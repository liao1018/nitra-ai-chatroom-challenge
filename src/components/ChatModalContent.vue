<template>
  <div class="col column relative-position" style="min-height: 0">
    <q-scroll-area ref="scrollAreaRef" class="col q-px-md">
      <div class="q-pt-lg"></div>
      <ChatModalMessageBubble
        v-for="msg in messages"
        :key="msg.id"
        :role="msg.role"
        :content="msg.content"
      />
      <ChatModalMessageBubble
        v-if="isThinking"
        key="thinking"
        role="assistant"
        :is-thinking-dots="true"
      />
    </q-scroll-area>
    <div v-if="showBottomMarquee" class="absolute-bottom-left q-px-md q-pb-md">
      <ChatModalBottomMarquee />
    </div>
  </div>
</template>

<script setup>
import ChatModalMessageBubble from "components/ChatModalMessageBubble.vue";
import ChatModalBottomMarquee from "components/ChatModalBottomMarquee.vue";
import { useScrollToBottom } from "src/composables/useScrollToBottom.js";

const props = defineProps({
  messages: {
    type: Array,
    default: () => [],
  },
  showBottomMarquee: {
    type: Boolean,
    default: true,
  },
  isThinking: {
    type: Boolean,
    default: false,
  },
});

const { scrollAreaRef, scrollToBottom } = useScrollToBottom(() => props.messages);

defineExpose({ scrollToBottom });
</script>
