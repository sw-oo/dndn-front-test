<script setup>
import { computed, ref } from 'vue'
import {
  CalendarRange,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  CalendarClock,
  LayoutDashboard,
} from 'lucide-vue-next'

const T = {
  kicker: '\uc77c\uc815',
  title: '\uacf5\uc815 \uc9c0\ud45c\ubcf4\uace0',
  desc:
    '\uc5f0\uac04\xb7\uc6d4\uac04\xb7\uc8fc\uac04 \ub2e8\uc704\ub85c \uacf5\uc815 \uc9c4\ud589\uc728\uacfc \uc9c0\uc5f0, \uc8fc\uac04 \uacc4\ud68d \ub300\ube44 \uc2e4\uc801\uc744 \ud55c \ub208\uc5d0 \ud655\uc778\ud569\ub2c8\ub2e4.',
  tabY: '\uc5f0\uac04',
  tabM: '\uc6d4\uac04',
  tabW: '\uc8fc\uac04',
  kpiOverall: '\uc804\uccb4 \uc9c4\ud589\uc728',
  kpiDelayed: '\uc9c0\uc5f0 \uac74',
  kpiDoneWeek: '\uae08\uc8fc \uc644\ub8cc',
  kpiNextWeek: '\ub2e4\uc74c\uc8fc \uc608\uc815',
  kpiDelta: '\uc804\uc6d4 \ube44',
  kpiAction: '\uc870\uce58 \ud544\uc694',
  kpiPlanRatio: '\uacc4\ud68d \ub300\ube44',
  sectionWorkType: '\uacf5\uc885\ubcc4 \uc9c4\ud589\uc728',
  sectionStatus: '\uc77c\uc815 \uc0c1\ud0dc \ubd84\ud3ec',
  sectionWeekly: '\uc8fc\uac04 \uacc4\ud68d vs \uc2e4\uc801',
  sectionDelayed: '\uc9c0\uc5f0 \uacf5\uc815 \ubaa9\ub85d',
  sectionGantt: '\uacf5\uc815\ud45c (\uacc4\ud68d / \uc2e4\uc801)',
  legendPlan: '\uacc4\ud68d',
  legendActual: '\uc2e4\uc801',
  colTask: '\uacf5\uc815\uba85',
  colType: '\uacf5\uc885',
  delayLabel: '\uc9c0\uc5f0',
  plannedEnd: '\uc644\ub8cc \uc608\uc815',
  statusDone: '\uc644\ub8cc',
  statusProgress: '\uc9c4\ud589',
  statusPlanned: '\uc608\uc815',
  statusDelayed: '\uc9c0\uc5f0',
  countUnit: '\uac74',
}

const activeTab = ref('week')

const timeline = computed(() => {
  if (activeTab.value === 'year') {
    return {
      count: 4,
      labels: ['1\ubd84\uae30', '2\ubd84\uae30', '3\ubd84\uae30', '4\ubd84\uae30'],
      slotUnit: '\ubd84\uae30',
    }
  }
  if (activeTab.value === 'month') {
    return {
      count: 4,
      labels: ['1\uc8fc', '2\uc8fc', '3\uc8fc', '4\uc8fc'],
      slotUnit: '\uc8fc',
    }
  }
  return {
    count: 24,
    labels: Array.from({ length: 24 }, (_, i) => String(i + 1)),
    slotUnit: '',
  }
})

const kpi = computed(() => {
  if (activeTab.value === 'year') {
    return {
      overall: 58,
      overallDelta: '+5%',
      delayed: 6,
      doneWeek: 24,
      doneSub: '82%',
      nextWeek: 11,
    }
  }
  if (activeTab.value === 'month') {
    return {
      overall: 61,
      overallDelta: '+6%',
      delayed: 5,
      doneWeek: 9,
      doneSub: '85%',
      nextWeek: 10,
    }
  }
  return {
    overall: 62,
    overallDelta: '+8%',
    delayed: 4,
    doneWeek: 7,
    doneSub: '88%',
    nextWeek: 9,
  }
})

const workTypeBars = ref([
  { label: '\uac74\ucd95 / \ucca0\uadfc', pct: 74 },
  { label: '\ud30c\uc77c \uacf5\uc0ac', pct: 68 },
  { label: '\ud1a0\ubaa9 \uacf5\uc0ac', pct: 57 },
  { label: '\ud1b0\ub9c1 / \uac00\uc624\uc0ac', pct: 49 },
  { label: '\uc804\uae30 \uacf5\uc0ac', pct: 63 },
])

const statusItems = ref([
  { key: 'done', label: T.statusDone, count: 18, class: 'bg-emerald-500' },
  { key: 'progress', label: T.statusProgress, count: 14, class: 'bg-forena-600' },
  { key: 'planned', label: T.statusPlanned, count: 12, class: 'bg-slate-300' },
  { key: 'delayed', label: T.statusDelayed, count: 4, class: 'bg-rose-500' },
])

const weeklyCompare = ref([
  { label: '9\uc6d4 3\uc8fc', plan: 72, actual: 68 },
  { label: '9\uc6d4 4\uc8fc', plan: 80, actual: 76 },
  { label: '10\uc6d4 1\uc8fc', plan: 65, actual: 70 },
  { label: '10\uc6d4 2\uc8fc', plan: 58, actual: 55 },
])

const delayedTasks = ref([
  {
    type: '\ud30c\uc77c \uacf5\uc0ac',
    name: 'A-2 \uad6c\uac04 \ud30c\uc77c',
    delay: '3\uc77c \uc9c0\uc5f0',
    end: '2025-10-18',
  },
  {
    type: '\uc804\uae30 \uacf5\uc0ac',
    name: 'CCTV \uc124\uce58',
    delay: '2\uc77c \uc9c0\uc5f0',
    end: '2025-10-20',
  },
  {
    type: '\ud1a0\ubaa9',
    name: 'Joint Pipe EV PIT',
    delay: '1\uc77c \uc9c0\uc5f0',
    end: '2025-10-22',
  },
])

/** plan/actual: { s, e } \uc77c\uad00 \uc2ac\ub86f (1 ~ count) */
const ganttRows = computed(() => {
  const c = timeline.value.count
  if (activeTab.value === 'year') {
    return [
      {
        name: 'Joint Pipe EV PIT',
        trade: '\ud1a0\ubaa9',
        plan: { s: 1, e: 2 },
        actual: { s: 1, e: 2 },
      },
      {
        name: 'A-2 \uad6c\uac04 \ud30c\uc77c',
        trade: '\ud30c\uc77c \uacf5\uc0ac',
        plan: { s: 2, e: 3 },
        actual: { s: 2, e: 4 },
      },
      {
        name: 'CCTV \uc124\uce58',
        trade: '\uc804\uae30',
        plan: { s: 3, e: 3 },
        actual: { s: 3, e: 4 },
      },
      {
        name: '\uc9c0\ud558 \uc8fc\ucc28\uc7a5 \ud1a4\uac1c',
        trade: '\ud1a0\ubaa9',
        plan: { s: 1, e: 4 },
        actual: { s: 2, e: 4 },
      },
    ]
  }
  if (activeTab.value === 'month') {
    return [
      {
        name: 'Joint Pipe EV PIT',
        trade: '\ud1a0\ubaa9',
        plan: { s: 1, e: 2 },
        actual: { s: 1, e: 2 },
      },
      {
        name: 'A-2 \uad6c\uac04 \ud30c\uc77c',
        trade: '\ud30c\uc77c \uacf5\uc0ac',
        plan: { s: 2, e: 3 },
        actual: { s: 2, e: 3 },
      },
      {
        name: 'CCTV \uc124\uce58',
        trade: '\uc804\uae30',
        plan: { s: 3, e: 4 },
        actual: { s: 3, e: 4 },
      },
      {
        name: '\ucca0\uadfc \uc5d0\ub11c\uc9c0',
        trade: '\uac74\ucd95',
        plan: { s: 1, e: 3 },
        actual: { s: 2, e: 3 },
      },
    ]
  }
  return [
    {
      name: 'Joint Pipe EV PIT',
      trade: '\ud1a0\ubaa9',
      plan: { s: 3, e: 10 },
      actual: { s: 4, e: 11 },
    },
    {
      name: 'A-2 \uad6c\uac04 \ud30c\uc77c',
      trade: '\ud30c\uc77c \uacf5\uc0ac',
      plan: { s: 6, e: 14 },
      actual: { s: 7, e: 15 },
    },
    {
      name: 'CCTV \uc124\uce58',
      trade: '\uc804\uae30',
      plan: { s: 12, e: 18 },
      actual: { s: 13, e: 19 },
    },
    {
      name: '\ud615\ud2c0 \uc81c\uac70',
      trade: '\uac74\ucd95',
      plan: { s: 2, e: 8 },
      actual: { s: 2, e: 7 },
    },
    {
      name: 'TBM \ubc0f \uc548\uc804\uad50\uc721',
      trade: '\uc548\uc804',
      plan: { s: 1, e: 3 },
      actual: { s: 1, e: 3 },
    },
  ]
})

function barLeftPct(s, total) {
  return ((s - 1) / total) * 100
}

function barWidthPct(s, e, total) {
  return ((e - s + 1) / total) * 100
}
</script>

<template>
  <div class="space-y-6 pb-10">
    <!-- Hero -->
    <div
      class="relative overflow-hidden rounded-2xl border border-forena-100/90 bg-gradient-to-br from-white via-forena-50/50 to-flare-50/30 p-6 shadow-card"
    >
      <div
        class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-flare-400 via-forena-500 to-flare-500"
      />
      <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div class="flex items-start gap-3">
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-flare-400 to-flare-600 text-white shadow-md"
          >
            <LayoutDashboard class="h-5 w-5" />
          </span>
          <div>
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-flare-600">{{ T.kicker }}</p>
            <h1 class="text-gradient-brand text-xl font-bold tracking-tight">{{ T.title }}</h1>
            <p class="mt-2 max-w-2xl text-sm leading-relaxed text-forena-700/80">{{ T.desc }}</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-2 rounded-2xl border border-forena-100/80 bg-white/80 p-1.5 shadow-sm">
          <button
            v-for="tab in [
              { id: 'year', label: T.tabY },
              { id: 'month', label: T.tabM },
              { id: 'week', label: T.tabW },
            ]"
            :key="tab.id"
            type="button"
            class="rounded-xl px-4 py-2 text-sm font-bold transition"
            :class="
              activeTab === tab.id
                ? 'bg-gradient-to-r from-forena-700 to-forena-900 text-white shadow-md'
                : 'text-forena-600 hover:bg-forena-50'
            "
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- KPI -->
    <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <div
        class="rounded-2xl border border-forena-100/90 bg-white/95 p-4 shadow-card ring-1 ring-forena-50"
      >
        <div class="flex items-center justify-between gap-2">
          <p class="text-[11px] font-bold uppercase tracking-wider text-forena-500">{{ T.kpiOverall }}</p>
          <span class="rounded-lg bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
            {{ kpi.overallDelta }} {{ T.kpiDelta }}
          </span>
        </div>
        <div class="mt-2 flex items-end gap-2">
          <span class="text-3xl font-bold tabular-nums text-forena-900">{{ kpi.overall }}%</span>
          <TrendingUp class="mb-1 h-5 w-5 text-emerald-600" />
        </div>
      </div>
      <div
        class="rounded-2xl border border-rose-100/90 bg-gradient-to-br from-rose-50/40 to-white p-4 shadow-card ring-1 ring-rose-100/60"
      >
        <div class="flex items-center justify-between gap-2">
          <p class="text-[11px] font-bold uppercase tracking-wider text-rose-700/90">{{ T.kpiDelayed }}</p>
          <span class="rounded-lg bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-800">
            {{ T.kpiAction }}
          </span>
        </div>
        <div class="mt-2 flex items-end gap-2">
          <span class="text-3xl font-bold tabular-nums text-forena-900">{{ kpi.delayed }}</span>
          <span class="mb-1 text-sm font-medium text-slate-500">{{ T.countUnit }}</span>
          <AlertTriangle class="mb-1 h-5 w-5 text-rose-500" />
        </div>
      </div>
      <div
        class="rounded-2xl border border-forena-100/90 bg-white/95 p-4 shadow-card ring-1 ring-forena-50"
      >
        <p class="text-[11px] font-bold uppercase tracking-wider text-forena-500">{{ T.kpiDoneWeek }}</p>
        <div class="mt-2 flex items-end justify-between gap-2">
          <span class="text-3xl font-bold tabular-nums text-forena-900">{{ kpi.doneWeek }}</span>
          <span class="mb-1 text-xs font-semibold text-forena-600">{{ kpi.doneSub }} {{ T.kpiPlanRatio }}</span>
        </div>
        <CheckCircle2 class="mt-2 h-4 w-4 text-flare-600" />
      </div>
      <div
        class="rounded-2xl border border-forena-100/90 bg-white/95 p-4 shadow-card ring-1 ring-forena-50"
      >
        <p class="text-[11px] font-bold uppercase tracking-wider text-forena-500">{{ T.kpiNextWeek }}</p>
        <div class="mt-2 flex items-end gap-2">
          <span class="text-3xl font-bold tabular-nums text-forena-900">{{ kpi.nextWeek }}</span>
          <span class="mb-1 text-sm font-medium text-slate-500">{{ T.countUnit }}</span>
          <CalendarClock class="mb-1 h-5 w-5 text-forena-600" />
        </div>
      </div>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <div class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 p-5 shadow-card">
        <div class="flex items-center gap-2 border-b border-forena-100 pb-3">
          <CalendarRange class="h-4 w-4 text-flare-600" />
          <h2 class="text-sm font-bold text-forena-900">{{ T.sectionWorkType }}</h2>
        </div>
        <ul class="mt-4 space-y-3">
          <li v-for="(w, i) in workTypeBars" :key="i" class="space-y-1">
            <div class="flex justify-between text-xs font-semibold text-forena-800">
              <span>{{ w.label }}</span>
              <span class="tabular-nums text-forena-600">{{ w.pct }}%</span>
            </div>
            <div class="h-2 overflow-hidden rounded-full bg-forena-100">
              <div
                class="h-full rounded-full bg-gradient-to-r from-forena-600 to-flare-500 transition-all"
                :style="{ width: w.pct + '%' }"
              />
            </div>
          </li>
        </ul>
      </div>

      <div class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 p-5 shadow-card">
        <h2 class="border-b border-forena-100 pb-3 text-sm font-bold text-forena-900">{{ T.sectionStatus }}</h2>
        <div class="mt-4 flex flex-wrap gap-2">
          <div
            v-for="s in statusItems"
            :key="s.key"
            class="flex min-w-[140px] flex-1 items-center justify-between gap-3 rounded-xl border border-forena-100 bg-forena-50/50 px-3 py-2.5"
          >
            <span class="flex items-center gap-2 text-xs font-bold text-forena-800">
              <span class="h-2.5 w-2.5 shrink-0 rounded-full" :class="s.class" />
              {{ s.label }}
            </span>
            <span class="text-lg font-bold tabular-nums text-forena-900">{{ s.count }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <div class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 p-5 shadow-card">
        <h2 class="border-b border-forena-100 pb-3 text-sm font-bold text-forena-900">{{ T.sectionWeekly }}</h2>
        <div class="mt-4 flex h-40 items-end justify-between gap-3">
          <div v-for="(w, i) in weeklyCompare" :key="i" class="flex flex-1 flex-col items-center gap-2">
            <div class="flex h-32 w-full items-end justify-center gap-1">
              <div
                class="w-1/2 max-w-[18px] rounded-t-md bg-slate-200"
                :style="{ height: w.plan + '%' }"
                :title="'plan'"
              />
              <div
                class="w-1/2 max-w-[18px] rounded-t-md bg-gradient-to-t from-forena-900 to-forena-700"
                :style="{ height: w.actual + '%' }"
                :title="'actual'"
              />
            </div>
            <span class="text-center text-[10px] font-semibold text-slate-600">{{ w.label }}</span>
          </div>
        </div>
        <div class="mt-3 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-600">
          <span class="inline-flex items-center gap-1.5">
            <span class="h-2 w-4 rounded bg-slate-200" /> {{ T.legendPlan }}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <span class="h-2 w-4 rounded bg-forena-800" /> {{ T.legendActual }}
          </span>
        </div>
      </div>

      <div class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 p-5 shadow-card">
        <h2 class="border-b border-forena-100 pb-3 text-sm font-bold text-forena-900">{{ T.sectionDelayed }}</h2>
        <ul class="mt-3 divide-y divide-forena-50">
          <li v-for="(d, i) in delayedTasks" :key="i" class="flex flex-col gap-1 py-3 first:pt-0">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-[11px] font-bold text-flare-700">{{ d.type }}</span>
              <span class="rounded-md bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-rose-700">
                {{ T.delayLabel }} {{ d.delay }}
              </span>
            </div>
            <p class="font-semibold text-forena-900">{{ d.name }}</p>
            <p class="text-[11px] text-slate-500">{{ T.plannedEnd }}: {{ d.end }}</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- Gantt -->
    <div class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 shadow-card">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-forena-100 px-5 py-4">
        <div class="flex items-center gap-2">
          <CalendarRange class="h-4 w-4 text-flare-600" />
          <h2 class="text-sm font-bold text-forena-900">{{ T.sectionGantt }}</h2>
          <span class="rounded-lg bg-forena-100 px-2 py-0.5 text-[10px] font-bold text-forena-600">
            {{ activeTab === 'year' ? T.tabY : activeTab === 'month' ? T.tabM : T.tabW }}
          </span>
        </div>
        <div class="flex flex-wrap items-center gap-4 text-[11px] text-slate-600">
          <span class="inline-flex items-center gap-1.5">
            <span class="h-px w-6 bg-slate-400" /> {{ T.legendPlan }}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <span class="h-2 w-6 rounded bg-forena-900" /> {{ T.legendActual }}
          </span>
        </div>
      </div>

      <div class="overflow-x-auto">
        <div class="min-w-[880px] px-5 py-4">
          <div class="flex gap-3 border-b border-forena-100 pb-2 text-[10px] font-bold text-forena-500">
            <div class="w-[220px] shrink-0 pl-1">{{ T.colTask }} / {{ T.colType }}</div>
            <div
              class="grid min-w-0 flex-1"
              :style="{ gridTemplateColumns: `repeat(${timeline.count}, minmax(0, 1fr))` }"
            >
              <div
                v-for="(lab, idx) in timeline.labels"
                :key="idx"
                class="border-l border-forena-100 px-0.5 text-center tabular-nums"
              >
                {{ lab }}
              </div>
            </div>
          </div>

          <div v-for="(row, ri) in ganttRows" :key="ri" class="flex gap-3 border-b border-forena-50 py-3">
            <div class="w-[220px] shrink-0 min-w-0 pl-1 pr-2">
              <p class="truncate text-sm font-semibold text-forena-900">{{ row.name }}</p>
              <p class="truncate text-[11px] text-slate-500">{{ row.trade }}</p>
            </div>
            <div class="relative min-h-[44px] min-w-0 flex-1">
              <div
                class="absolute inset-0 grid h-full"
                :style="{ gridTemplateColumns: `repeat(${timeline.count}, minmax(0, 1fr))` }"
              >
                <div
                  v-for="n in timeline.count"
                  :key="n"
                  class="border-r border-forena-100/70 last:border-r-0"
                />
              </div>
              <div class="relative h-full min-h-[44px] w-full px-0.5">
                <div
                  class="pointer-events-none absolute top-[30%] h-0.5 rounded-full bg-slate-300"
                  :style="{
                    left: barLeftPct(row.plan.s, timeline.count) + '%',
                    width: barWidthPct(row.plan.s, row.plan.e, timeline.count) + '%',
                  }"
                />
                <div
                  class="pointer-events-none absolute top-[52%] h-2 rounded-full bg-gradient-to-r from-forena-900 to-forena-700 shadow-sm"
                  :style="{
                    left: barLeftPct(row.actual.s, timeline.count) + '%',
                    width: barWidthPct(row.actual.s, row.actual.e, timeline.count) + '%',
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
