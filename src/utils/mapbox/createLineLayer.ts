import { Map } from 'mapbox-gl'
import type { Track } from '@/types'

// Create a Mapbox GL line layer for the track
export const createLineLayer = ({
  map,
  vesselId,
  track
}: {
  map: Map
  vesselId: string
  track: Track
}) => {
  map.addSource(`vessel-track-${vesselId}`, {
    type: 'geojson',
    data: {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: track
      }
    }
  })
}
