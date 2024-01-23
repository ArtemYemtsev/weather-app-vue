<script setup lang="ts">
import { ref, computed } from "vue";
import { useSettingsStore } from "@/stores/SettingsStore";
import { useWeatherStore } from "@/stores/WeatherStore";

const settingsStore = useSettingsStore();
const base = settingsStore.base;
const settings = settingsStore.settings;

const weatherStore = useWeatherStore();
const weather = computed(() => weatherStore.getWeather);
const setWeather = weatherStore.setWeather;

const query = ref<string>(`${base.baseUrl}${settings.city}${base.unitUrl}${settings.units}${base.appid}`);

const value = ref<string>('');

</script>

<template>
  <main class="main">
    <section class="search-form">
      <div class="container">
        <div class="search-form__inner">
          <form
            class="form"
            @submit.prevent="setWeather(query)"
          >
            <div class="form__item">
              <input
                type="text"
                v-model="value"
              >
            </div>
            <button
              type="submit"
            >
              SEARCH
            </button>
          </form>
        </div>
      </div>
    </section>

    <section
      class="weather"
    >
      <div class="container">
        <div class="weather__inner">
          <p>City: {{ weather.city.name }}</p>
          <p>Temp: {{  }}</p>
          <p>Wind: {{  }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.search-form {
  margin-top: 2rem;
  
  &__inner {
    color: black;
  }
  .form {
    display: flex;
    flex-direction: row;
    &__item {
      input {
        padding: 0.5rem;
      }
    }
  }
}
</style>