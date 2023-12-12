import { Map } from 'mapbox-gl'
import { createLineLayer, addLineLayerOnMap, fitTrackBoundsToMap } from '.'
import type { CSV, Row, Tracks } from '@/types'

export const displayCsvTracksOnMap = ({ data, map }: { data: CSV; map: Map }) => {
  const tracks: Tracks = {}
  // Use only 500 rows in order have a better map UI
  data.slice(0, 500).forEach((item: Row) => {
    const { vessel_id, latitude, longitude } = item
    const vesselIdKey = vessel_id.toString()
    if (!tracks[vesselIdKey]) {
      tracks[vesselIdKey] = []
    }

    // Add the position to the vessel's track
    tracks[vesselIdKey].push([longitude, latitude])
  })

  map.once('style.load', () => {
    Object.keys(tracks).forEach((vesselId) => {
      const track = tracks[vesselId as keyof typeof tracks]

      createLineLayer({ map, vesselId, track })
      addLineLayerOnMap({ map, vesselId })
    })

    fitTrackBoundsToMap({ map, tracks })
  })
}
