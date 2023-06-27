<template>
    <h1>yo nací y viví en la ciudad de {{ useCounterStore().nombre }} por {{ useCounterStore().anios }} años.</h1>
    <button @click="useCounterStore().increment">Incrementar los años que viví en la ciudad +2</button>
    <button @click="useCounterStore().multiply">Multiplicar los años que viví en la ciudad x4</button>
</template>

<script setup>

import { useCounterStore } from '../stores/counter'



</script>

<style>

</style>