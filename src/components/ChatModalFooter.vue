<template>
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
</template>

<script setup>
</script>

<style lang="scss" scoped>
.message-input-footer {
  border-top: 2px solid $gray-100;
}
</style>
