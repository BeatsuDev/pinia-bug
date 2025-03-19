import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const hiddenData = ref(0)
  const count = computed(() => hiddenData.value)

  function increment() {
    hiddenData.value++
  }

  return { count, increment }
},
{
  persist: true
})
