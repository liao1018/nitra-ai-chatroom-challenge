<template>
  <q-scroll-area class="col q-pt-lg q-px-md">
    <ChatModalMessageBubble side="left" text="Welcome to Nitra AI!" />
    <ChatModalMessageBubble
      v-for="i in 20"
      :key="i"
      side="right"
      text="Welcome to Nitra AI!"
    />
  </q-scroll-area>
</template>

<script setup>
import ChatModalMessageBubble from "components/ChatModalMessageBubble.vue";
</script>
