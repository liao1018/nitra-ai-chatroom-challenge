<template>
  <q-card-section class="message-input-footer q-py-none">
    <q-input
      v-model="inputText"
      borderless
      placeholder="Say something..."
      @keydown.enter.prevent="handleSend"
    >
      <template #append>
        <div class="q-gutter-x-sm">
          <q-btn
            size="sm"
            flat
            round
            dense
            icon="fas fa-paperclip"
            color="grey-5"
            aria-label="Attach"
          />
          <q-btn
            size="sm"
            round
            unelevated
            icon="fas fa-chevron-right"
            color="primary"
            aria-label="Send"
            @click="handleSend"
          />
        </div>
      </template>
    </q-input>
  </q-card-section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  sendMessage: {
    type: Function,
    required: true,
  },
});

const inputText = ref("");

function handleSend() {
  const trimmed = inputText.value.trim();
  if (!trimmed) return;
  props.sendMessage(trimmed);
  inputText.value = "";
}
</script>

<style lang="scss" scoped>
.message-input-footer {
  border-top: 2px solid $gray-100;
}
</style>
