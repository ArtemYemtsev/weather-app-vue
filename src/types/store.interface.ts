export interface SettingsStoreBase {
    baseUrl: string,
    unitUrl: string,
    appid: string,
}

export interface SettingsStoreSettings {
  city: string | null,
  units: string,
}

export interface Weather {
  city: {
    coord: {
      lat: number | null,
      lon: number | null
    },
    country: string,
    id: number | null,
    name: string,
    population: number | null,
    sunrise: number | null,
    sunset: number | null,
    timezone: number | null
  },
  cnt: number | null,
  code: string,
  list: any[],
  message: number | null,
}