import fs from 'fs';
import path from 'path';
import { components } from '../registry.config';
import type { Schema } from './types';

const REGISTRY_DIR = path.join(__dirname, '../registry');

if (!fs.existsSync(REGISTRY_DIR)) {
  fs.mkdirSync(REGISTRY_DIR);
}

components.forEach((component) => {
  try {
    const schema: Schema = {
      name: component.name,
      type: component.type,
      dependencies: component.dependencies || [],
      registryDependencies: component.registryDependencies || [],
      files: []
    };

    component.files.forEach((fileDef) => {
      const sourcePath = path.join(__dirname, '../', fileDef.path);
      
      if (!fs.existsSync(sourcePath)) {
        throw new Error(`Archivo no encontrado: ${sourcePath}`);
      }

      const content = fs.readFileSync(sourcePath, 'utf8');

      schema.files.push({
        path: fileDef.target,
        content: content,
        type: fileDef.type || component.type 
      });
    });

    const outputPath = path.join(REGISTRY_DIR, `${component.name}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(schema, null, 2));
    
  } catch (error) {
    console.error(`Error en ${component.name}:`, error instanceof Error ? error.message : error);
  }
});
        
console.log("Registro actualizado correctamente.");