<template>
    <span class="timestamp">{{ timestamp }}</span>
</template>

<script setup>

defineProps ({
    timestamp: {
        type: String,
    }
})

</script>

<style>

</style>