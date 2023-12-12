import mapboxgl, { Map } from 'mapbox-gl'
import type { Track, Tracks } from '@/types'

// make LngLatBounds in order for the track bounds to fit on the map
export const fitTrackBoundsToMap = ({ map, tracks }: { map: Map; tracks: Tracks }) => {
  const bounds = new mapboxgl.LngLatBounds()
  Object.values(tracks).forEach((track: Track) => {
    track.forEach((position: [number, number]) => {
      bounds.extend(position)
    })
  })
  map.fitBounds(bounds, { padding: 50 })
}
