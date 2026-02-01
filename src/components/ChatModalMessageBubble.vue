<template>
  <div
    :class="[
      'row q-gutter-sm q-mb-md',
      side === 'right' ? 'justify-end' : '',
    ]"
  >
    <q-avatar
      v-if="side === 'left'"
      size="28px"
      color="primary"
      text-color="white"
    >
      <img src="../assets/nitra-logo.svg" alt="Nitra" class="q-pa-xs" />
    </q-avatar>
    <q-card
      flat
      :class="[
        side === 'left' ? 'message-bubble-left bg-grey-2' : 'message-bubble-right bg-teal-2',
        'q-py-sm q-px-md',
      ]"
    >
      <q-card-section class="q-pa-none text-body1 text-grey-8">
        {{ text }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
defineProps({
  side: {
    type: String,
    validator: (v) => v === "left" || v === "right",
    default: "left",
  },
  text: {
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
