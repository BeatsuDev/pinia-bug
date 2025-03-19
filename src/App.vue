<template>
  <div class="container">
    Store value: {{ count }}
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from './stores/counter';

const { count } = storeToRefs(useCounterStore());
const { increment } = useCounterStore();
</script>

<style scoped>
* {
  padding: 1rem;
  font-size: 3rem;
}
</style>