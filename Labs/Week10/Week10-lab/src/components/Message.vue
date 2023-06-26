<template>
    <p class="message">
    {{ message }}
    </p>
</template>

<script setup>

defineProps ({
    message: {
        type: String,
    }
})

</script>

<style>

</style>