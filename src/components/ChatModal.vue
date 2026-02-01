<template>
  <q-dialog
    seamless
    :model-value="modelValue"
    position="right"
    class="chat-modal-panel"
    transition-show="fade"
    transition-hide="fade"
    @show="openModal"
    @update:model-value="(v) => $emit('update:modelValue', v)"
  >
    <q-card class="q-mx-md column">
      <ChatModalHeader @close="close" />
      <ChatModalContent
        ref="contentRef"
        :messages="messages"
        :show-bottom-marquee="showBottomMarquee"
        :is-thinking="isThinking"
      />
      <ChatModalFooter :send-message="sendUserMessage" />
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, nextTick } from "vue";
import ChatModalHeader from "components/ChatModalHeader.vue";
import ChatModalContent from "components/ChatModalContent.vue";
import ChatModalFooter from "components/ChatModalFooter.vue";
import { useChatMessages } from "src/composables/useChatMessages";

const {
  messages,
  sendUserMessage,
  showBottomMarquee,
  startWelcomeTyping,
  isThinking,
} = useChatMessages();

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const contentRef = ref(null);

function openModal() {
  startWelcomeTyping();
  contentRef.value?.scrollToBottom?.()
}

function close() {
  emit("update:modelValue", false);
}
</script>

<style lang="scss">
/* class is on the dialog root; the visible panel is .q-dialog__inner */
.chat-modal-panel .q-dialog__inner {
  width: 700px;
  max-width: 100%;
  max-height: calc(100vh - 50px);
  border-radius: 12px 0 0 12px;
}
.chat-modal-panel .q-dialog__inner > * {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
}
</style>
