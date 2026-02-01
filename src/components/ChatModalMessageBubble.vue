<template>
  <div :class="rootClass">
    <q-avatar
      v-if="role === 'assistant'"
      size="28px"
      color="primary"
      text-color="white"
    >
      <img src="../assets/nitra-logo.svg" alt="Nitra" class="q-pa-xs" />
    </q-avatar>
    <q-card flat :class="bubbleClass">
      <q-card-section class="q-pa-none text-body1 text-grey-8">
        <template v-if="isThinkingDots">
          Thinking
          <span class="thinking-dot font-size-lg" style="animation-delay: 0s">.</span
          ><span class="thinking-dot font-size-lg" style="animation-delay: 0.2s">.</span
          ><span class="thinking-dot font-size-lg" style="animation-delay: 0.4s">.</span>
        </template>
        <q-markdown
          v-else-if="role === 'assistant'"
          :src="content"
          class="q-markdown"
        />
        <template v-else>{{ content }}</template>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  role: {
    type: String,
    validator: (v) => v === "assistant" || v === "user",
    default: "assistant",
  },
  content: {
    type: String,
    default: "",
  },
  isThinkingDots: {
    type: Boolean,
    default: false,
  },
});

const rootClass = computed(() => [
  "row q-gutter-sm q-mb-md",
  props.role === "user" ? "justify-end" : "",
]);

const bubbleClass = computed(() => [
  props.role === "assistant"
    ? "message-bubble-left bg-grey-2"
    : "message-bubble-right bg-teal-2",
  "q-py-sm q-px-md",
]);
</script>

<style lang="scss" scoped>
.message-bubble-left,
.message-bubble-right {
  max-width: 85%;
  min-width: 0;
  overflow-wrap: break-word;
  word-break: break-word;
}
.message-bubble-left {
  border-radius: 0 12px 12px 12px;
}
.message-bubble-right {
  border-radius: 12px 0 12px 12px;
}
:deep(.q-markdown) {
  overflow-wrap: break-word;
  word-break: break-word;
}
.thinking-dot {
  animation: thinking-blink 0.6s ease-in-out infinite;
}
@keyframes thinking-blink {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}
</style>
