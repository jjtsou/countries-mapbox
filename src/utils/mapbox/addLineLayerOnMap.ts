import type { Map } from 'mapbox-gl'

// Add a line layer to the map
export const addLineLayerOnMap = ({ map, vesselId }: { map: Map; vesselId: string }) => {
  map.addLayer({
    id: `vessel-track-${vesselId}`,
    type: 'line',
    source: `vessel-track-${vesselId}`,
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': 'gray',
      'line-width': 1,
      'line-opacity': 0.8
    }
  })
}
