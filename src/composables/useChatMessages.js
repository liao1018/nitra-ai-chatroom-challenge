import { ref } from "vue";
import { MESSAGE_MOCK_MAP } from "src/mock/messages.js";

const WELCOME_MESSAGE = "Welcome to Nitra AI!";

const FALLBACK_REPLY =
  "I don't have a response for that. Try one of the suggested questions.";

const TYPING_DELAY_MS = 12;
const AI_REPLY_DELAY_MS = 3000;

export function useChatMessages() {
  const messages = ref([]);
  const showBottomMarquee = ref(true);
  const isThinking = ref(false);
  let typingIntervalId = null;
  let typingFullText = null;
  let typingMessageIndex = -1;

  function startWelcomeTyping() {
    if (messages.value.length > 0) return;
    sendAssistantMessage(WELCOME_MESSAGE);
  }

  function sendUserMessage(userText) {
    const trimmed = userText?.trim();
    if (!trimmed) return;
    showBottomMarquee.value = false;
    addMessage("user", trimmed);
    const entry = MESSAGE_MOCK_MAP[trimmed];
    const assistantContent = entry?.message?.content ?? FALLBACK_REPLY;
    isThinking.value = true;
    setTimeout(() => {
      isThinking.value = false;
      sendAssistantMessage(assistantContent);
    }, AI_REPLY_DELAY_MS);
  }

  function sendAssistantMessage(assistantContent) {
    addMessage("assistant", "");
    typeOutMessage(assistantContent);
  }

  function addMessage(role, content) {
    const id = Math.max(0, ...messages.value.map((m) => m.id)) + 1;
    messages.value.push({ id, role, content });
  }

  function typeOutMessage(fullText, delayMs = TYPING_DELAY_MS) {
    if (typingIntervalId != null) {
      clearInterval(typingIntervalId);
      typingIntervalId = null;
      if (
        typingFullText != null &&
        typingMessageIndex >= 0 &&
        typingMessageIndex < messages.value.length
      ) {
        messages.value[typingMessageIndex].content = typingFullText;
      }
      typingFullText = null;
      typingMessageIndex = -1;
    }

    if (!fullText) return;

    const lastIndex = messages.value.length - 1;
    if (lastIndex < 0) return;

    typingFullText = fullText;
    typingMessageIndex = lastIndex;
    let index = 0;

    typingIntervalId = setInterval(() => {
      if (index >= fullText.length) {
        clearInterval(typingIntervalId);
        typingIntervalId = null;
        typingFullText = null;
        typingMessageIndex = -1;
        if (lastIndex >= 0 && lastIndex < messages.value.length) {
          messages.value[lastIndex].content = fullText;
        }
        return;
      }
      if (lastIndex < messages.value.length) {
        messages.value[lastIndex].content = fullText.slice(0, index + 1);
      }
      index += 1;
    }, delayMs);
  }

  return {
    messages,
    startWelcomeTyping,
    sendUserMessage,
    addMessage,
    showBottomMarquee,
    isThinking,
  };
}
