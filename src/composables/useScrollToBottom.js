import { ref, nextTick, watch } from "vue";

export function useScrollToBottom(watchSource, scrollAreaRef) {
  const scrollAreaRefOrInternal = scrollAreaRef ?? ref(null);

  function scrollToBottom() {
    nextTick(() => {
      const area = scrollAreaRefOrInternal.value;
      if (!area) return;
      const el = area.getScrollTarget();
      if (!el) return;
      const offset = Math.max(0, el.scrollHeight - el.clientHeight);
      area.setScrollPosition("vertical", offset, 0);
    });
  }

  if (watchSource != null) {
    watch(watchSource, () => scrollToBottom(), { deep: true });
  }

  return { scrollAreaRef: scrollAreaRefOrInternal, scrollToBottom };
}
