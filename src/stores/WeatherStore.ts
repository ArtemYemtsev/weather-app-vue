import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useWeatherStore = defineStore('weather', () => {
  const weather = ref({})

  async function setWeather<T>(query: string): Promise<T> {
    try {
      const response = await axios.get(query)
      console.log(response.data)
      weather.value = response.data
    }
    catch (error) {
      console.error(error);
    }
  }

  return { weather, setWeather }
})