<template>
  <div class="col column relative-position" style="min-height: 0">
    <q-scroll-area class="col q-pt-lg q-px-md">
      <ChatModalMessageBubble
        v-for="msg in messages"
        :key="msg.id"
        :role="msg.role"
        :content="msg.content"
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

defineProps({
  messages: {
    type: Array,
    default: () => [],
  },
});
</script>
