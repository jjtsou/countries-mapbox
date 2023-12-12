type Country = {
  flags: {
    png: string
    svg: string
    alt: string
  }
  name: {
    common: string
    official: string
    nativeName: {
      [key: string]: {
        official: string
        common: string
      }
    }
  }
  cca3: string
  capital: string[]
  latlng: number[]
  borders: string[]
  population: number
}

type Countries = Country[]

type Row = {
  vessel_id: String
  received_time_utc: String
  latitude: number
  longitude: number
}

type CSV = Row[]

type Track = [number, number][]

type Tracks = {
  [key: string]: Track
}

export type { Country, Countries, Row, CSV, Track, Tracks }
