import type { CSV, Row } from '@/types'

export const transformCsvData = (csv: CSV) =>
  csv.map((row: Row) => ({
    vessel_id: row['vessel_id'],
    received_time_utc: row['received_time_utc'],
    latitude: row['latitude'],
    longitude: row['longitude']
  }))
