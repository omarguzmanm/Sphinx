export type RegistryType = 
  | "registry:ui" 
  | "registry:lib" 
  | "registry:hook" 
  | "registry:block"
  | "registry:component";

export type RegistryItem = {
  name: string;
  type: RegistryType; 
  dependencies?: string[];
  registryDependencies?: string[];
  files: Array<{
    path: string;
    target: string;
    type?: RegistryType;
  }>;
};

export type Registry = RegistryItem[];

export type Schema = {
  name: string;
  type: RegistryType;
  dependencies: string[];
  registryDependencies: string[];
  files: Array<{
    path: string;
    content: string;
    type: RegistryType;
  }>;
};