<template>
  <div
    :class="[
      'row q-gutter-sm q-mb-md',
      role === 'user' ? 'justify-end' : '',
    ]"
  >
    <q-avatar
      v-if="role === 'assistant'"
      size="28px"
      color="primary"
      text-color="white"
    >
      <img src="../assets/nitra-logo.svg" alt="Nitra" class="q-pa-xs" />
    </q-avatar>
    <q-card
      flat
      :class="[
        role === 'assistant' ? 'message-bubble-left bg-grey-2' : 'message-bubble-right bg-teal-2',
        'q-py-sm q-px-md',
      ]"
    >
      <q-card-section class="q-pa-none text-body1 text-grey-8">
        {{ content }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
defineProps({
  role: {
    type: String,
    validator: (v) => v === "assistant" || v === "user",
    default: "assistant",
  },
  content: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.message-bubble-left {
  max-width: 85%;
  border-radius: 0 12px 12px 12px;
}
.message-bubble-right {
  max-width: 85%;
  border-radius: 12px 0 12px 12px;
}
</style>
