# Assignment Notes (for Manager)

## 1. Tools I Used

- **Quasar** .
- **Vite** – Build tool (via Quasar CLI).
- **Font Awesome**
- **SCSS**
- **SVG** – Nitra logo assets (`nitra-logo.svg`).
- **Cursor**

## 2. Design Decisions and Rationale

- **Modal and button in MainLayout** – The ChatModal and the floating "Ask Nitra AI" button are placed in `MainLayout.vue` so the button is available on every page. The layout wraps the whole app (via `router-view`), so users can open the AI chat from anywhere without navigating to a specific page.

- **ChatModal prefix for related components** – All ChatModal-related components (e.g. ChatModalHeader, ChatModalContent, ChatModalFooter, ChatModalMessageBubble) use the "ChatModal" prefix in their file names so they sort together in the file list and are easy to find.

## 3. Challenges and How I Solved Them

- **Nitra logo SVG** – When implementing the Nitra logo, I couldn't find an existing asset to use. I went to the Nitra official website and found an SVG for the full "N Nitra" wordmark. I edited that SVG to keep only the "N" part (e.g. for use in the chat header and message avatar) and saved it as a separate asset.

- **Quasar styling** – During development I shared the design with Cursor, but the resulting styles still didn't match the design closely. I wanted to rely on Quasar's built-in styles as much as possible instead of writing custom CSS. I spent time in the Quasar documentation to adjust layout and styling so the UI uses Quasar's utilities and components correctly.

