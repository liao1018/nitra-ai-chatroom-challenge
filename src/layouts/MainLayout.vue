<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <AskNitraAiFab />
  </q-layout>
</template>

<script setup>
import AskNitraAiFab from "components/AskNitraAiFab.vue";
</script>
