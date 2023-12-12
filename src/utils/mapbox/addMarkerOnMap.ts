import mapboxgl, { Map } from 'mapbox-gl'
import type { Country } from '@/types'

export const addMarkerOnMap = ({ map, country }: { map: Map; country: Country }) => {
  const [lat, lng] = country.latlng

  new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)
  map.flyTo({
    center: [lng, lat],
    zoom: 5,
    essential: true
  })
}
