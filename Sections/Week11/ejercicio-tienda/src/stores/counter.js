import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  const anios = ref(30);

  const nombre = ref("Tucuman");

  const fecha = ref("31/05/1565");

  const doubleCount = computed(() => anios.value * 2);
  
  let increment = () => {
    anios.value = anios.value + 2
  };

  let multiply = () => {
    anios.value = anios.value *4
  };

  return { anios, nombre, doubleCount, increment, multiply };
})
