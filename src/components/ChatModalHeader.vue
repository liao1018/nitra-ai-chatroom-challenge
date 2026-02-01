<template>
  <q-toolbar dark class="bg-primary q-py-md q-px-md row justify-between">
    <q-toolbar-title class="column q-gutter-y-xs col">
      <div class="row items-center q-gutter-sm">
        <q-avatar size="50px" class="bg-transparent">
          <img src="../assets/nitra-logo.svg" alt="Nitra" />
        </q-avatar>
        <span class="text-white text-weight-bold">Nitra AI</span>
        <q-icon name="fas fa-wand-magic-sparkles" size="xs" color="white" />
      </div>
      <div class="text-body2 text-white">Hi there, How can we help?</div>
    </q-toolbar-title>
    <div class="self-start">
      <q-btn
        flat
        round
        dense
        icon="fas fa-xmark"
        aria-label="Close"
        class="text-white"
        @click="$emit('close')"
      />
    </div>
  </q-toolbar>
</template>

<script setup>
defineEmits(["close"]);
</script>
