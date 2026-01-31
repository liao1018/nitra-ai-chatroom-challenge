<template>
  <q-dialog
    seamless
    :model-value="modelValue"
    position="right"
    class="chat-modal-panel"
    transition-show="fade"
    transition-hide="fade"
    @update:model-value="(v) => $emit('update:modelValue', v)"
  >
    <q-card class="q-mx-md column">
      <!-- Header -->
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
            @click="close"
          />
        </div>
      </q-toolbar>

      <!-- Content -->
      <q-scroll-area class="col q-pt-lg q-px-md">
        <!-- AI Message -->
        <div class="row q-gutter-sm q-mb-md">
          <q-avatar size="28px" color="primary" text-color="white">
            <img src="../assets/nitra-logo.svg" alt="Nitra" class="q-pa-xs" />
          </q-avatar>
          <q-card flat class="message-bubble-left bg-grey-2 q-py-sm q-px-md">
            <q-card-section class="q-pa-none text-body1 text-grey-8">
              Welcome to Nitra AI!
            </q-card-section>
          </q-card>
        </div>

        <!-- User Message -->
        <div
          v-for="i in 20"
          :key="i"
          class="row justify-end q-gutter-sm q-mb-md"
        >
          <q-card flat class="message-bubble-right bg-teal-2 q-py-sm q-px-md">
            <q-card-section class="q-pa-none text-body1 text-grey-8">
              Welcome to Nitra AI!
            </q-card-section>
          </q-card>
        </div>
      </q-scroll-area>

      <!-- Footer -->
      <q-card-section class="message-input-footer q-py-none">
        <q-input borderless placeholder="Say something...">
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
              />
            </div>
          </template>
        </q-input>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

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
.message-bubble-left {
  max-width: 85%;
  border-radius: 0 12px 12px 12px;
}
.message-bubble-right {
  max-width: 85%;
  border-radius: 12px 0 12px 12px;
}
.message-input-footer {
  border-top: 2px solid $gray-100;
}
</style>
