<template>
    <img
    :src="img"
    class="profile"
    alt="profile"
    />
</template>

<script setup>

defineProps ({
    img: {
        type: String,
    }
})

</script>

<style>

</style>