export interface SettingsStoreBase {
    baseUrl: String,
    unitUrl: String,
    appid: String,
}

export interface SettingsStoreSettings {
  city: string | null,
  units: string,
}