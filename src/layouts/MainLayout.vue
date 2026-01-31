<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

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
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import ChatModal from 'components/ChatModal.vue'

const showModal = ref(true)

const linksList = [
  {
    title: 'Home',
    caption: 'Home',
    icon: 'home',
    to: '/'
  },
  {
    title: 'Colors',
    caption: 'Color palette and utilities',
    icon: 'palette',
    to: '/colors'
  },
  {
    title: 'Typography',
    caption: 'Typography',
    icon: 'text_fields',
    to: '/typography'
  },
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    target: '_blank',
    href: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    target: '_blank',
    href: 'https://github.com/quasarframework'
  },
]
</script>

<style scoped>
.ask-nitra-ai-fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
}
</style>
