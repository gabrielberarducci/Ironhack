<template>
    <div>
        <h1>{{ title }}</h1>
        <img :src="image" alt="" />
    </div>
</template>

<script setup>

defineProps({
  title: String,
  image: String,
  description: String,
});

</script>

<style>

</style>