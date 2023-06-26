<template>
    <span class="user">
        <span class="name">{{ name }}</span>
        <span class="handle">{{ handle }}</span>
    </span>
</template>

<script setup>

defineProps ({
    name: {
        type: String,
    },
    handle: {
        type: String,
    }
})

</script>

<style>

</style>