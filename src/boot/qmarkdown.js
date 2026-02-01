import { defineBoot } from "@quasar/app-vite/wrappers";
import QMarkdownPlugin from "@quasar/quasar-ui-qmarkdown";

export default defineBoot(({ app }) => {
  app.use(QMarkdownPlugin);
});
