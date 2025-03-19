import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const hiddenData = ref(0)  // This data does not persist
  const count = computed(() => hiddenData.value)

  function increment() {
    hiddenData.value++
  }

  return { count, increment } // I could return hiddenData here and it would work, but I don't want to expose it
},
{
  persist: true
})
