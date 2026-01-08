import { Registry } from "./scripts/types";

export const components: Registry = [
  {
    name: "magic-card",
    type: "registry:ui",
    files: [
      {
        path: "src/components/magic-card/MagicCard.vue",
        target: "components/ui/magic-card/MagicCard.vue",
        type: "registry:ui"
      },
      {
        path: "src/components/magic-card/index.ts",
        target: "components/ui/magic-card/index.ts",
        type: "registry:ui"
      }
    ],
    dependencies: ["lucide-vue-next", "@vueuse/core"], 
    registryDependencies: ["button", "badge"]
  },
];