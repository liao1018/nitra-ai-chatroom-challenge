<template>
  <div class="overflow-hidden">
    <Transition name="marquee-slide" mode="out-in">
      <div
        :key="currentIndex"
        class="row items-center q-gutter-sm"
      >
        <q-icon
          v-if="currentItem.icon"
          :name="currentItem.icon"
          size="18px"
          color="teal-100"
          class="flex-shrink-0"
        />
        <span class="text-body2 text-gray-600">{{ currentItem.text }}</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const ITEMS = [
  { text: "Upload your supplier list", icon: "fas fa-clipboard-list" },
  { text: "Check if Avastin is in stock", icon: "fas fa-cart-shopping" },
  { text: "Check if there's a better price for Xeomin", icon: "fas fa-hand-holding-dollar" },
  { text: "What are some generic options for Restylane", icon: "fas fa-search" },
  { text: "What’s the best product for Xeomin", icon: "fas fa-thumbs-up" },
];

const props = defineProps({
  interval: {
    type: Number,
    default: 3000,
  },
});

const currentIndex = ref(0);

const currentItem = computed(() => {
  if (!ITEMS.length) return { text: "", icon: "" };
  return ITEMS[currentIndex.value % ITEMS.length];
});

let intervalId = null;

onMounted(() => {
  if (ITEMS.length <= 1) return;
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % ITEMS.length;
  }, props.interval);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style lang="scss" scoped>
.marquee-slide-leave-active,
.marquee-slide-enter-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.marquee-slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.marquee-slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.marquee-slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}
</style>
