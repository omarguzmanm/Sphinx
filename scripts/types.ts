export type RegistryItem = {
  name: string;
  type: "components:ui:m" | "components:ui";
  dependencies?: string[];
  registryDependencies?: string[];
  files: Array<{
    path: string;
    target: string;
  }>;
};

export type Registry = RegistryItem[];

export type Schema = {
  name: string;
  type: string;
  dependencies: string[];
  registryDependencies: string[];
  files: Array<{
    path: string;
    content: string;
    type: string;
  }>;
};