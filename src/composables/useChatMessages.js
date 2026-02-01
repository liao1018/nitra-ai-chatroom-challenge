import { ref } from "vue";
import { MESSAGE_MOCK_MAP } from "src/mock/messages.js";

const INITIAL_MESSAGES = [
  { id: 1, role: "assistant", content: "Welcome to Nitra AI!" },
];

const FALLBACK_REPLY =
  "I don't have a response for that. Try one of the suggested questions.";

export function useChatMessages() {
  const messages = ref([...INITIAL_MESSAGES]);

  function addMessage(role, content) {
    const id = Math.max(0, ...messages.value.map((m) => m.id)) + 1;
    messages.value.push({ id, role, content });
  }

  function sendUserMessage(userText) {
    const trimmed = userText?.trim();
    if (!trimmed) return;
    addMessage("user", trimmed);
    const entry = MESSAGE_MOCK_MAP[trimmed];
    const assistantContent = entry?.message?.content ?? FALLBACK_REPLY;
    addMessage("assistant", assistantContent);
  }

  return { messages, addMessage, sendUserMessage };
}
