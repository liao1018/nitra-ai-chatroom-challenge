<template>
  <div class="col column relative-position" style="min-height: 0">
    <q-scroll-area class="col q-pt-lg q-px-md">
      <ChatModalMessageBubble side="left" text="Welcome to Nitra AI!" />
      <ChatModalMessageBubble
        v-for="i in 20"
        :key="i"
        side="right"
        text="Welcome to Nitra AI!"
      />
    </q-scroll-area>
    <div
      class="absolute-bottom-left q-px-md q-pb-md"
    >
      <ChatModalBottomMarquee />
    </div>
  </div>
</template>

<script setup>
import ChatModalMessageBubble from "components/ChatModalMessageBubble.vue";
import ChatModalBottomMarquee from "components/ChatModalBottomMarquee.vue";
</script>
