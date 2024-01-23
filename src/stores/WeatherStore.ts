import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Weather } from "@/types/store.interface"

export const useWeatherStore = defineStore('weather', () => {
  const weather = ref<Weather>({
    city: {
      coord: {
        lat:  null,
        lon:  null
      },
      country: '',
      id:  null,
      name: '',
      population:  null,
      sunrise:  null,
      sunset:  null,
      timezone:  null
    },
    cnt:  null,
    code: '',
    list: [],
    message: null,
  })

  async function setWeather(query: string) {
    try {
      const response = await axios.get(query)
      console.log(response.data)
      weather.value = response.data
      console.log(weather.value)
    }
    catch (error) {
      console.error(error);
    }
  }

  const getWeather = computed(() => {
    return weather.value
  })

  return { weather, setWeather, getWeather, }
})