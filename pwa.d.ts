// pwa.d.ts
import { NuxtConfig } from 'nuxt'

declare module 'nuxt' {
  interface NuxtConfig {
    pwa?: any // Use `any` or a more specific type based on the PWA options you're using
  }
}