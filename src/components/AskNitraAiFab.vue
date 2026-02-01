<template>
  <div class="ask-nitra-ai-fab">
    <q-btn
      color="accent"
      no-caps
      unelevated
      rounded
      @click="showModal = !showModal"
    >
      <q-icon name="fas fa-wand-magic-sparkles" size="xs" color="white" class="q-mr-sm"/>
      <span class="text-white text-weight-bold">Ask Nitra AI</span>
    </q-btn>
  </div>
  <ChatModal v-model="showModal" />
</template>

<script setup>
import { ref } from 'vue'
import ChatModal from 'components/ChatModal.vue'

const showModal = ref(false)
</script>

<style scoped>
.ask-nitra-ai-fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
}
</style>
