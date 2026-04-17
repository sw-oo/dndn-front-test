import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const ROLE_SITE_MANAGER = 'site_manager'

/** @param {string} role */
/** @param {string} fullPath */
export function pathAllowedForRole(role, fullPath) {
  const path = fullPath.split('?')[0] || '/'
  if (role !== ROLE_SITE_MANAGER) return false
  if (path === '/') return false
  if (path.startsWith('/site/')) return true
  if (path.startsWith('/hr/partners')) return true
  return false
}

export const useAuthStore = defineStore('auth', () => {
  const role = ref(ROLE_SITE_MANAGER)

  const roleLabel = computed(() => '\ucd1d \ucc45\uc784\uc790')

  return { role, roleLabel }
})
