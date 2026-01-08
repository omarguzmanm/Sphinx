<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

interface Props {
  title: string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div 
    :class="cn(
      'p-6 border rounded-xl shadow-sm bg-card text-card-foreground',
      'hover:shadow-md transition-all duration-200',
      props.class
    )"
  >
    <h3 class="font-semibold text-lg tracking-tight mb-2">
      {{ title }}
    </h3>
    <div class="text-sm text-muted-foreground">
      <slot />
    </div>
  </div>
</template>