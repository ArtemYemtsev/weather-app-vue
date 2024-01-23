import { ref } from "vue";
import { defineStore } from "pinia";
import type { SettingsStoreSettings, SettingsStoreBase } from "@/types/store.interface"

export const useSettingsStore = defineStore('settings', () => {
  const base = ref<SettingsStoreBase>({
    baseUrl: "https://api.openweathermap.org/data/2.5/forecast?q=",
    unitUrl: "&units=",
    appid: "&APPID=83de6bb90ef948d5414ac411b62cad61",
  })

  const settings = ref<SettingsStoreSettings>({
    city: "Dnipro",
    units: "metric",
  })

  return { settings, base }
})