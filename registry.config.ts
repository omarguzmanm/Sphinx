import { Registry } from "./scripts/types";

export const components: Registry = [
  {
    name: "magic-card",
    type: "components:ui",
    files: [
      {
        path: "src/components/MagicCard.vue",
        target: "components/ui/magic-card/MagicCard.vue"
      }
    ],
    dependencies: ["lucide-vue-next", "@vueuse/core"], 
    registryDependencies: ["button", "badge"]
  },
];