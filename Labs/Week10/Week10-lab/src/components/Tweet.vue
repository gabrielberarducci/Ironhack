<template>
    <div class="tweet">
      <!-- <img
        src="https://i.imgur.com/9yw1Fyw.jpg"
        class="profile"
        alt="profile"
      /> -->
      <profile-image :img="tweet.user.image"/>
  
      <div class="body">
        <div class="top">
          <!-- Esta porcion de codigo la hemos reemplazado por un prop
            <span class="user">
            <span class="name">Ironhack</span>
            <span class="handle">@ironhack</span>
          </span> -->
          <user :name="tweet.user.name" :handle="tweet.user.handle"/>
          <!-- <span class="timestamp">Nov 30, 2020</span> -->
          <timestamp :timestamp="tweet.timestamp"/>
        </div>
  
        <!-- <p class="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p> -->
        <message :message="tweet.message"/>
        
        <!-- <div class="actions">
          Font Awesome icons
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div> -->
        <actions />
      </div>
  
      <i class="fas fa-ellipsis-h"></i>
    </div>
  </template>
  
  <style scoped>
  a {
    color: #42b983;
  }
  </style>

  <script setup>
  import user from "./User.vue"
  import timestamp from "./Timestamp.vue"
  import message from "./Message.vue"
  import profileImage from "./ProfileImage.vue"
  import actions from "./Actions.vue"

  defineProps({
    tweet: {
      type: Object,
      required: true,
    }
  })

  </script>