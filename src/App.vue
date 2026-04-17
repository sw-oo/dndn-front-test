<script setup>
import { computed, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import {
  LayoutDashboard,
  UserPlus,
  Users,
  ClipboardList,
  MapPin,
  Calculator,
  FileText,
  HardHat,
  Handshake,
  ChevronDown,
  ChevronRight,
  CalendarRange,
  CalendarDays,
  CloudSun,
  Upload,
} from 'lucide-vue-next'
import { useAuthStore } from '@/stores/authStore'

const route = useRoute()
const auth = useAuthStore()

const personnelOpen = ref(true)
const scheduleOpen = ref(true)

const L = {
  brandTitle: '\uc778\uc0ac \uad00\ub9ac',
  brandSub: '\uc778\uc0ac \xb7 \uc77c\uc815 \uba54\ub274',
  banner:
    '\ucd1d \ucc45\uc784\uc790 \uad8c\ud55c\uc73c\ub85c \uc778\uc0ac \ubc0f \uc77c\uc815 \uba54\ub274\uc5d0\uc11c \uc8fc\uc694 \uae30\ub2a5\uc744 \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
  headerKicker: '\ud654\uba74',
  fallbackTitle: '\ubcf8\uc0ac \uad00\ub9ac \uc2dc\uc2a4\ud15c',
  personnelGroup: '\uc778\uc0ac \uad00\ub9ac',
  scheduleGroup: '\uc77c\uc815 \uad00\ub9ac',
}

const personnelNavAll = [
  {
    path: '/site/dashboard',
    label: '\uc778\uc0ac \ub300\uc2dc\ubcf4\ub4dc',
    icon: LayoutDashboard,
  },
  {
    path: '/site/onboarding',
    label: '\uc791\uc5c5\uc790 \uc778\ub825 \uc628\ubcf4\ub529',
    icon: UserPlus,
  },
  {
    path: '/site/workers/manage',
    label: '\uc791\uc5c5\uc790 \uad00\ub9ac',
    icon: Users,
    activePrefix: '/site/workers/manage',
  },
  { path: '/site/staffing', label: '\uc778\ub825 \ubc30\uce58 (T.O)', icon: MapPin },
  { path: '/site/man-days', label: '\uacf5\uc218 \uad00\ub9ac', icon: Calculator },
  { path: '/hr/partners', label: '\ud611\ub825\uc0ac \uad00\ub9ac', icon: Handshake },
]

const scheduleNavAll = [
  {
    path: '/site/schedule',
    label: '\uacf5\uc815 \uc9c0\ud45c\ubcf4\uace0',
    icon: CalendarDays,
  },
  {
    path: '/site/work-plan',
    label: '\uc791\uc5c5 \uacc4\ud68d',
    icon: Upload,
  },
  {
    path: '/site/work-instructions',
    label: '\uc791\uc5c5 \uc9c0\uc2dc',
    icon: ClipboardList,
  },
  { path: '/site/daily-log', label: '\uc791\uc5c5 \uc77c\ubcf4', icon: FileText },
  {
    path: '/site/weather',
    label: '\uae30\uc0c1 \uad00\uc81c',
    icon: CloudSun,
  },
]

const pageTitle = computed(() =>
  typeof route.meta.title === 'string' ? route.meta.title : L.fallbackTitle,
)

function pathActive(path, exact) {
  if (path === '/') return route.path === '/'
  if (exact) return route.path === path
  return route.path === path || route.path.startsWith(`${path}/`)
}

function navItemActive(item) {
  if (item.activePrefix && route.path.startsWith(item.activePrefix)) return true
  return pathActive(item.path, item.exact)
}

function linkClass(item) {
  const active = navItemActive(item)
  return [
    'relative flex items-center gap-2 rounded-xl py-2.5 pl-3 pr-3 text-sm font-medium transition-all duration-200',
    active
      ? [
          'font-semibold text-forena-900 shadow-sm ring-1 ring-forena-200/50',
          'bg-gradient-to-r from-forena-500/[0.12] via-flare-500/[0.06] to-transparent',
          'before:pointer-events-none before:absolute before:inset-y-2 before:left-0 before:z-10 before:w-[3px] before:rounded-full',
          'before:bg-gradient-to-r before:from-flare-500 before:via-flare-400/25 before:to-transparent',
        ].join(' ')
      : 'text-slate-600 hover:bg-white/90 hover:text-forena-800 hover:shadow-sm hover:ring-1 hover:ring-forena-100/80',
  ]
}
</script>

<template>
  <div
    class="relative flex min-h-0 flex-1 overflow-hidden bg-mesh-page bg-forena-50 text-slate-900"
  >
    <aside
      class="scrollbar-hide hidden h-full min-h-0 w-72 shrink-0 flex-col border-r border-forena-200/50 bg-white/80 px-3 py-5 shadow-[4px_0_24px_rgba(0,46,85,0.06)] backdrop-blur-xl md:flex"
    >
      <RouterLink
        to="/site/dashboard"
        class="group flex items-center gap-3 rounded-2xl px-2 py-1 transition hover:bg-forena-50/80"
      >
        <div
          class="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-forena-500 via-forena-600 to-forena-800 text-sm font-bold text-white shadow-lg shadow-forena-900/25 ring-2 ring-flare-400/35 ring-offset-2 ring-offset-white transition group-hover:ring-flare-400/55"
        >
          HQ
        </div>
        <div>
          <p class="text-base font-bold tracking-tight text-forena-900">{{ L.brandTitle }}</p>
          <p class="text-[11px] font-medium text-forena-500/90">{{ L.brandSub }}</p>
        </div>
      </RouterLink>

      <div
        class="mx-2 mt-4 rounded-2xl border border-flare-200/60 bg-gradient-to-br from-flare-50/90 via-white to-amber-50/40 px-3 py-2.5 text-[11px] leading-snug text-forena-900 shadow-sm"
      >
        {{ L.banner }}
      </div>

      <nav class="mt-5 min-h-0 flex-1 space-y-1 overflow-y-auto pb-4">
        <button
          type="button"
          class="flex w-full items-center justify-between rounded-xl px-2 py-2 text-left text-[10px] font-bold tracking-wider text-forena-400 uppercase transition hover:bg-white/60"
          @click="personnelOpen = !personnelOpen"
        >
          <span class="flex items-center gap-2 text-forena-800">
            <span
              class="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-flare-500 to-flare-600 text-white shadow-md shadow-forena-900/20"
            >
              <HardHat class="h-3.5 w-3.5" />
            </span>
            {{ L.personnelGroup }}
          </span>
          <ChevronDown v-if="personnelOpen" class="h-4 w-4 text-flare-500" />
          <ChevronRight v-else class="h-4 w-4 text-slate-400" />
        </button>
        <div v-show="personnelOpen" class="ml-1 space-y-0.5 border-l border-flare-100 pl-2">
          <RouterLink
            v-for="item in personnelNavAll"
            :key="item.path + (item.exact ? ':exact' : '')"
            :to="item.path"
            class="group"
            :class="linkClass(item)"
          >
            <component
              :is="item.icon"
              class="h-4 w-4 shrink-0"
              :class="navItemActive(item) ? 'text-flare-600' : 'text-slate-400'"
            />
            {{ item.label }}
          </RouterLink>
        </div>

        <button
          type="button"
          class="mt-4 flex w-full items-center justify-between rounded-xl px-2 py-2 text-left text-[10px] font-bold tracking-wider text-forena-400 uppercase transition hover:bg-white/60"
          @click="scheduleOpen = !scheduleOpen"
        >
          <span class="flex items-center gap-2 text-forena-800">
            <span
              class="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-forena-500 to-forena-700 text-white shadow-md shadow-forena-900/20"
            >
              <CalendarRange class="h-3.5 w-3.5" />
            </span>
            {{ L.scheduleGroup }}
          </span>
          <ChevronDown v-if="scheduleOpen" class="h-4 w-4 text-flare-500" />
          <ChevronRight v-else class="h-4 w-4 text-slate-400" />
        </button>
        <div v-show="scheduleOpen" class="ml-1 space-y-0.5 border-l border-forena-100 pl-2">
          <RouterLink
            v-for="item in scheduleNavAll"
            :key="item.path + (item.exact ? ':exact' : '')"
            :to="item.path"
            class="group"
            :class="linkClass(item)"
          >
            <component
              :is="item.icon"
              class="h-4 w-4 shrink-0"
              :class="navItemActive(item) ? 'text-flare-600' : 'text-slate-400'"
            />
            {{ item.label }}
          </RouterLink>
        </div>
      </nav>

      <div class="space-y-2 border-t border-forena-100/80 pt-3">
        <div
          class="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-gradient-to-r hover:from-forena-50 hover:to-flare-50/50"
        >
          <div
            class="h-9 w-9 rounded-full bg-gradient-to-br from-forena-500 via-flare-400 to-flare-500 shadow-md ring-2 ring-white"
          />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-semibold text-forena-900">{{ auth.roleLabel }}</p>
            <p class="truncate text-xs text-forena-500">hq@local</p>
          </div>
        </div>
      </div>
    </aside>

    <div class="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      <header
        class="sticky top-0 z-10 border-b border-forena-100/80 bg-white/75 px-6 py-4 shadow-sm backdrop-blur-md"
      >
        <div class="min-w-0">
          <p class="text-[10px] font-bold tracking-[0.12em] text-flare-600 uppercase">
            {{ L.headerKicker }}
          </p>
          <h1 class="mt-0.5 text-xl font-bold tracking-tight text-forena-900">{{ pageTitle }}</h1>
          <div class="mt-2 h-0.5 w-14 rounded-full bg-forena-200" />
        </div>
      </header>

      <main class="min-h-0 flex-1 overflow-y-auto p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
