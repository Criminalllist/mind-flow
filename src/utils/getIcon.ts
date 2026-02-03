import { markRaw, type Component } from "vue";

interface ViteComponentModule {
  default: Component
}

const icons = import.meta.glob<ViteComponentModule>('@/common/icons/*.vue', { eager: true })

export const getIcon = (name: string): Component | null => {
  const path = `/src/common/icons/${name}.vue`

  const iconModule = icons[path]

  return iconModule ? markRaw(iconModule.default) : null
}