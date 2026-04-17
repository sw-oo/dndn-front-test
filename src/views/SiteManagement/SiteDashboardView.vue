<script setup>
import { ref, computed } from 'vue'
import {
  HardHat,
  MapPin,
  Users,
  AlertTriangle,
  UserPlus,
  Truck,
  ClipboardList,
  BarChart3,
  CloudRain,
  Zap,
  LayoutDashboard,
} from 'lucide-vue-next'

const T = {
  kicker: '\uc778\uc0ac \ub2f4\ub2f9',
  title: '\uc778\uc0ac \ub300\uc2dc\ubcf4\ub4dc',
  desc: '\ud604\uc7a5 \uc778\uc6d0, \uacf5\uc815, \uae30\uc0c1\xb7\uc548\uc804 \uc54c\ub9bc\uc744 \uc2e4\uc2dc\uac04\uc5d0 \uac00\uae4c\uc6b4 \ud615\ud0dc\ub85c \ud655\uc778\ud569\ub2c8\ub2e4.',
  today: '\uae08\uc77c \ud22c\uc785',
  cap: '/ 145 \uba85 (\uc0d8\ud50c)',
  status: '\ud604\uc7a5 \uc0c1\ud0dc',
  running: '\uc6b4\uc601 \uc911',
  alert: '\uae34\uae09 \uc54c\ub9bc',
  alertBody: '\uac15\ud48d \uc8fc\uc758 \u2014 \uace0\uc18c\uc791\uc5c5 \uc911\uc9c0',
  tbm: '\uc624\ub298 TBM',
  tbmBody: '07:30 \uc77c\uc77c \uc548\uc804 \uacf5\uc720',
  secMain: '\uba54\uc778 \uc778\ub514\ucf00\uc774\ud130',
  indAttendance: '\uae08\uc77c \ud22c\uc785 \uc778\uc6d0 \ud604\ud669',
  indAttendanceSub:
    '\uae08\uc77c \ucd9c\uadfc \uc644\ub8cc\ub41c \ucd1d \uc778\uc6d0 \ubc0f \uacf5\uc885\ubcc4(\ud611\ub825\uc0ac\ubcc4) \uc778\uc6d0 \uc2e4\uc2dc\uac04 \ud45c\ucd9c',
  totalChecked: '\ucd9c\uadfc \uc644\ub8cc \ud569\uacc4',
  personUnit: '\uba85',
  colBreakdown: '\uacf5\uc885 / \ud611\ub825\uc0ac',
  colCount: '\uc778\uc6d0',
  indNew: '\uc2e0\uaddc \ud22c\uc785 \ud604\ud669',
  indNewSub: '\uae08\uc77c \ud604\uc7a5\uc5d0 \uc0c8\ub85c \ud22c\uc785\ub41c \uc2e0\uaddc \uc628\ubcf4\ub529 \uc778\uc6d0 \uc218\uce58',
  newCountLabel: '\uc624\ub298 \uc2e0\uaddc \ud22c\uc785',
  indWork: '\uae08\uc77c \uc791\uc5c5 \uc694\uc57d',
  indWorkSub:
    '\uae08\uc77c \ud604\uc7a5\uc5d0 \ud22c\uc785\ub420 \uc911\uc7a5\ube44 \ub9ac\uc2a4\ud2b8 \ubc0f \uc9c4\ud589\ub420 \uacf5\uc815 \ub9ac\uc2a4\ud2b8',
  equipTitle: '\uc911\uc7a5\ube44 (\uc608\uc815)',
  procTitle: '\uacf5\uc815 (\uc608\uc815)',
  secProgress: '\uacf5\uc815 \uc9c4\ud589 \uc0c1\ud669',
  progressViz: '\uacf5\uc0ac \uc9c4\ud589\ub3c4 \uc2dc\uac01\ud654',
  progressVizSub: '\uc804\uccb4 \uacf5\uc0ac \uc9c4\ud589\ub3c4 \ubc0f \uacf5\uc885\ubcc4 \uacf5\uc0ac \uc9c4\ud589\ub3c4 \ud37c\uc13c\ud2b8(%) \uc694\uc57d',
  overall: '\uc804\uccb4 \uacf5\uc0ac',
  secAlert: '\uc54c\ub9bc \ubc0f \uacbd\uace0',
  weatherAlertTitle: '\uae30\uc0c1 \uae30\ubc18 \uc548\uc804 \uacbd\ubcf4',
  weatherAlertSub:
    '\uae30\uc0c1 \uc815\ubcf4\uc5d0 \ub530\ub978 \uc791\uc5c5 \uc548\uc804 \uacbd\uace0 \ubc0f \ud604\uc7a5 \uc548\uc804\uacbd\ubcf4 \uae34\uae09 \uc54c\ub9bc \ud45c\ucd9c',
  urgent: '\uae34\uae09',
  weather: '\uae30\uc0c1',
  liveTag: 'LIVE',
}

const attendanceBreakdown = ref([
  { label: '\ud615\ud2c0 (\ud0dc\uc591\uac74\uc124)', count: 42 },
  { label: '\uc804\uae30 (\ud55c\uc232\uc804\uae30)', count: 28 },
  { label: '\ud1a0\ubaa9 (\uccad\uc6d4\uac74\uc124)', count: 35 },
  { label: '\ub0b4\ubd80 \uc9c1\uc6d0 / \uae30\ud0c0', count: 19 },
])

const newDeployToday = ref(8)

const equipmentToday = ref([
  '50\ud1a4 \ud0c0\uc6cc\ud06c\ub808\uc778 (\ub3d9)',
  '\ucf58\ud06c\ub9ac\ud2b8 \ud37c\uc9f1\uce742\ub300',
  '\uc0ac\ub2e4 \uae45\uace0 25t',
  '\ube44\uc544\uc0ac \uc18c\ud615 \uad6c\uc870',
])

const processesToday = ref([
  'B\uad6c\uc5ed \uc9c0\ud558 2\uce35 \uc2ac\ub77c\ube0c \ud615\ud2c0 \uc870\ub9bd',
  'A\uad6c\uc5ed \uc804\uae30 \ubc30\uad00 \ub3c4\uc120',
  '\uc678\ubd80 \uc2a4\ud06c\ud53c\ub4dc \ub0b4\ub9e4\ub9c5 \uc9c4\ud589',
  '\uc9c0\ud558\uc8fc\ucc28\uc7a5 \ubc29\uc218 \uacf5\uc0ac',
])

const overallProgress = ref(62)

const processProgress = ref([
  { name: '\uace8\uc870 \uacf5\uc0ac', pct: 74 },
  { name: '\ud30c\uc77c \ubc0f \uae30\ucd08', pct: 68 },
  { name: '\uc804\uae30 \ubc0f \uc18c\ubc29', pct: 52 },
  { name: '\ub0b4\ub9e4\ub9c5 \ubc0f \ub9c8\uac10', pct: 41 },
])

const weatherAlerts = ref([
  {
    id: 1,
    level: '\uc8fc\uc758',
    title: '\uc624\ud6c4 \ud48d\uc18d \uac15\ud654 (12~15m/s \uc608\ubcf4)',
    detail: '\ud0c0\uc6cc\ud06c\ub808\uc778 \uc791\uc5c5 \uc2dc\uac04 \ub2e8\ucd95 \ubc0f \ud6c4\ud48d \uac10\uc18c \uc548\ub0b4',
  },
  {
    id: 2,
    level: '\uc548\ub0b4',
    title: '\uc18c\ub098\uae30 \ub2e4\ub7c9 \u2014 \uc678\ubd80 \uc6a9\uc811 \ubbf8\ub044\ub7ec\uc9d0 \uc8fc\uc758',
    detail: '\uace0\uc18c \uc791\uc5c5 \uc2dc \ubbf8\ub044\ub7ec\uc9d0 \uc7a5\uce58 \uc810\uac80 \ucd94\ucc9c',
  },
])

const urgentAlerts = ref([
  {
    id: 1,
    title: '[\uae34\uae09] \uac15\ud48d \uc774\uc218 \uc2dc \uace0\uc18c \uc791\uc5c5 \uc804\uba74 \uc911\uc9c0',
    time: '09:42',
    source: '\ud604\uc7a5 \uc548\uc804\uad00\ub9ac\uc790',
  },
  {
    id: 2,
    title: 'TBM \uc774\ud6c4 \uc9c0\ud558 \uc8fc\ucc28\uc7a5 \uc785\uad6c \ud1b5\uc81c 1\uc2dc\uac04 \ud574\uc81c',
    time: '08:15',
    source: '\ucd9c\uc785\uadfc\ud0dc \uc2dc\uc2a4\ud15c',
  },
])

const totalCheckedIn = computed(() =>
  attendanceBreakdown.value.reduce((s, r) => s + r.count, 0),
)
</script>

<template>
  <div class="w-full min-w-0 space-y-5 pb-8">
    <div
      class="relative overflow-hidden rounded-2xl border border-forena-100/90 bg-gradient-to-br from-white via-forena-50/50 to-flare-50/30 p-5 shadow-card"
    >
      <div
        class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-flare-400 via-forena-500 to-flare-500"
      />
      <div
        class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
      >
        <div class="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
          <span
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-flare-400 to-flare-600 text-white shadow-md"
          >
            <HardHat class="h-[1.125rem] w-[1.125rem]" />
          </span>
          <div class="min-w-0">
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-flare-600">{{ T.kicker }}</p>
            <h2 class="text-gradient-brand text-lg font-bold tracking-tight sm:text-xl">{{ T.title }}</h2>
            <p class="mt-1.5 w-full text-[13px] leading-relaxed text-forena-700/80 sm:text-sm">
              {{ T.desc }}
            </p>
          </div>
        </div>
        <div
          class="flex shrink-0 flex-wrap items-center gap-2 rounded-xl border border-forena-100/80 bg-white/60 px-3 py-2 text-[11px] text-forena-600 lg:flex-col lg:items-stretch lg:px-4 lg:py-3"
        >
          <span class="font-bold uppercase tracking-wide text-forena-400">{{ T.liveTag }}</span>
          <span class="tabular-nums text-forena-800">{{ T.today }}: <strong>{{ totalCheckedIn }}</strong> {{ T.personUnit }}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
      <article class="flex min-h-[7.5rem] flex-col gap-2 rounded-2xl border border-white/90 bg-white/90 p-4 shadow-card">
        <div class="flex items-center gap-2 text-sm font-semibold text-forena-900">
          <Users class="h-4 w-4 text-flare-600" />
          {{ T.today }}
        </div>
        <div class="flex flex-1 flex-col justify-center py-0.5">
          <p class="text-2xl font-light tabular-nums text-forena-900 sm:text-3xl">{{ totalCheckedIn }}</p>
        </div>
        <p class="text-xs text-slate-500">{{ T.cap }}</p>
      </article>
      <article class="flex min-h-[7.5rem] flex-col gap-2 rounded-2xl border border-white/90 bg-white/90 p-4 shadow-card">
        <div class="flex items-center gap-2 text-sm font-semibold text-forena-900">
          <MapPin class="h-4 w-4 text-flare-600" />
          {{ T.status }}
        </div>
        <div class="flex flex-1 flex-col justify-center py-0.5">
          <p class="text-base font-bold text-emerald-700 sm:text-lg">{{ T.running }}</p>
        </div>
      </article>
      <article
        class="flex min-h-[7.5rem] flex-col gap-2 rounded-2xl border border-rose-100/80 bg-rose-50/30 p-4 shadow-card"
      >
        <div class="flex items-center gap-2 text-sm font-semibold text-rose-900">
          <AlertTriangle class="h-4 w-4 shrink-0" />
          {{ T.alert }}
        </div>
        <div class="flex flex-1 flex-col justify-center py-0.5">
          <p class="text-sm leading-snug text-rose-800">{{ T.alertBody }}</p>
        </div>
      </article>
      <article class="flex min-h-[7.5rem] flex-col gap-2 rounded-2xl border border-white/90 bg-white/90 p-4 shadow-card">
        <div class="flex items-center gap-2 text-sm font-semibold text-forena-900">
          <HardHat class="h-4 w-4 text-flare-600" />
          {{ T.tbm }}
        </div>
        <div class="flex flex-1 flex-col justify-center py-0.5">
          <p class="text-sm text-slate-700">{{ T.tbmBody }}</p>
        </div>
      </article>
    </div>

    <!-- Main indicators: attendance, new hires, work summary -->
    <div class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 shadow-card">
      <div class="flex flex-wrap items-center gap-2 border-b border-forena-100 bg-forena-50/50 px-4 py-2.5 sm:px-5 sm:py-3">
        <LayoutDashboard class="h-4 w-4 text-flare-600" />
        <h3 class="text-sm font-bold text-forena-900">{{ T.secMain }}</h3>
        <span
          class="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-800"
          >{{ T.liveTag }}</span
        >
      </div>
      <div
        class="grid gap-4 p-4 sm:gap-5 sm:p-5 lg:grid-cols-1 xl:grid-cols-12 xl:gap-5 xl:p-6"
      >
        <div
          class="min-w-0 rounded-xl border border-forena-100 bg-forena-50/30 p-3.5 sm:p-4 xl:col-span-5"
        >
          <div class="flex items-start gap-2">
            <Users class="mt-0.5 h-4 w-4 shrink-0 text-flare-600" />
            <div>
              <p class="text-sm font-bold text-forena-900">{{ T.indAttendance }}</p>
              <p class="mt-1 text-[11px] leading-snug text-slate-600">{{ T.indAttendanceSub }}</p>
            </div>
          </div>
          <p class="mt-3 text-2xl font-bold tabular-nums text-forena-900 sm:text-3xl">
            {{ totalCheckedIn }}<span class="text-base font-semibold text-slate-500 sm:text-lg">{{ T.personUnit }}</span>
          </p>
          <p class="text-[11px] font-semibold text-forena-500">{{ T.totalChecked }}</p>
          <div class="mt-3 max-h-44 overflow-y-auto rounded-lg border border-forena-100 bg-white sm:max-h-48 xl:max-h-56">
            <table class="w-full text-left text-xs">
              <thead class="sticky top-0 bg-forena-50/90 text-[10px] font-bold uppercase text-forena-500">
                <tr>
                  <th class="px-3 py-2">{{ T.colBreakdown }}</th>
                  <th class="px-3 py-2 text-right">{{ T.colCount }}</th>
                </tr>
              </thead>
              <tbody class="text-forena-800">
                <tr v-for="(row, i) in attendanceBreakdown" :key="i" class="border-t border-forena-50">
                  <td class="px-3 py-2 font-medium">{{ row.label }}</td>
                  <td class="px-3 py-2 text-right font-bold tabular-nums">{{ row.count }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          class="flex min-h-0 flex-col rounded-xl border border-sky-100/80 bg-sky-50/40 p-3.5 sm:p-4 xl:col-span-3"
        >
          <div class="flex items-start gap-2">
            <UserPlus class="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
            <div class="min-w-0">
              <p class="text-sm font-bold text-forena-900">{{ T.indNew }}</p>
              <p class="mt-1 text-[11px] leading-snug text-slate-600">{{ T.indNewSub }}</p>
            </div>
          </div>
          <div
            class="mt-4 flex flex-1 flex-col items-center justify-center gap-1 border border-sky-100/60 bg-white/70 py-6 sm:mt-5 sm:py-8 xl:min-h-[11rem]"
          >
            <p class="text-3xl font-bold tabular-nums text-sky-900 sm:text-4xl">{{ newDeployToday }}</p>
            <p class="text-center text-[11px] font-semibold text-sky-800">{{ T.newCountLabel }}</p>
          </div>
        </div>

        <div
          class="min-w-0 rounded-xl border border-forena-100 bg-white p-3.5 sm:p-4 xl:col-span-4"
        >
          <div class="flex items-start gap-2">
            <ClipboardList class="mt-0.5 h-4 w-4 shrink-0 text-flare-600" />
            <div>
              <p class="text-sm font-bold text-forena-900">{{ T.indWork }}</p>
              <p class="mt-1 text-[11px] leading-snug text-slate-600">{{ T.indWorkSub }}</p>
            </div>
          </div>
          <div class="mt-3 grid min-h-0 gap-3 sm:grid-cols-2 sm:gap-4 xl:gap-5">
            <div class="min-w-0">
              <p class="mb-2 flex items-center gap-1 text-[11px] font-bold text-forena-500">
                <Truck class="h-3.5 w-3.5" /> {{ T.equipTitle }}
              </p>
              <ul class="space-y-1.5 text-xs text-forena-800">
                <li
                  v-for="(eq, ei) in equipmentToday"
                  :key="ei"
                  class="rounded-lg border border-forena-100 bg-forena-50/50 px-2.5 py-1.5"
                >
                  {{ eq }}
                </li>
              </ul>
            </div>
            <div class="min-w-0">
              <p class="mb-2 text-[11px] font-bold text-forena-500">{{ T.procTitle }}</p>
              <ul class="space-y-1.5 text-xs text-forena-800">
                <li
                  v-for="(pr, pi) in processesToday"
                  :key="pi"
                  class="rounded-lg border border-forena-100 px-2.5 py-1.5"
                >
                  {{ pr }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Process progress visualization -->
    <div class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 shadow-card">
      <div class="border-b border-forena-100 bg-forena-50/50 px-4 py-2.5 sm:px-5 sm:py-3">
        <div class="flex items-center gap-2">
          <BarChart3 class="h-4 w-4 text-flare-600" />
          <h3 class="text-sm font-bold text-forena-900">{{ T.secProgress }}</h3>
        </div>
        <p class="mt-1 text-[11px] text-slate-600">{{ T.progressVizSub }}</p>
      </div>
      <div class="grid gap-5 p-4 sm:p-5 lg:grid-cols-2 lg:items-start lg:gap-6 xl:gap-8 xl:p-6">
        <div
          class="rounded-xl border border-forena-100 bg-gradient-to-r from-forena-50/80 to-flare-50/40 p-3.5 sm:p-4"
        >
          <div class="flex flex-wrap items-end justify-between gap-3">
            <p class="text-xs font-bold uppercase tracking-wide text-forena-500">{{ T.overall }}</p>
            <p class="text-2xl font-bold tabular-nums text-forena-900 sm:text-3xl">{{ overallProgress }}%</p>
          </div>
          <div class="mt-4 h-3 overflow-hidden rounded-full bg-forena-100 sm:h-3.5">
            <div
              class="h-full rounded-full bg-gradient-to-r from-forena-600 to-flare-500 transition-all"
              :style="{ width: overallProgress + '%' }"
            />
          </div>
        </div>
        <div class="min-w-0">
          <p class="mb-3 text-xs font-bold text-forena-500">{{ T.progressViz }}</p>
          <ul class="grid gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3 lg:grid-cols-1 xl:grid-cols-2 xl:gap-x-8">
            <li v-for="(p, idx) in processProgress" :key="idx" class="min-w-0">
              <div class="flex justify-between gap-2 text-xs font-semibold text-forena-800">
                <span class="min-w-0 truncate">{{ p.name }}</span>
                <span class="shrink-0 tabular-nums text-flare-700">{{ p.pct }}%</span>
              </div>
              <div class="mt-1.5 h-2 overflow-hidden rounded-full bg-forena-100">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-forena-500 to-flare-400"
                  :style="{ width: p.pct + '%' }"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 알림 및 경고 -->
    <div class="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5 xl:gap-6">
      <div class="overflow-hidden rounded-2xl border border-sky-100/90 bg-white/95 shadow-card">
        <div class="border-b border-sky-100 bg-sky-50/50 px-4 py-2.5 sm:px-5 sm:py-3">
          <div class="flex items-center gap-2">
            <CloudRain class="h-4 w-4 text-sky-600" />
            <h3 class="text-sm font-bold text-forena-900">{{ T.weatherAlertTitle }}</h3>
          </div>
          <p class="mt-1 text-[11px] text-slate-600">{{ T.weatherAlertSub }}</p>
        </div>
        <ul class="divide-y divide-forena-50 p-3.5 sm:p-4">
          <li v-for="w in weatherAlerts" :key="w.id" class="py-3 first:pt-0 last:pb-0">
            <span
              class="inline-flex rounded-md px-2 py-0.5 text-[10px] font-bold"
              :class="
                w.level === '\uc8fc\uc758'
                  ? 'bg-amber-100 text-amber-900'
                  : 'bg-slate-100 text-slate-700'
              "
              >{{ T.weather }} · {{ w.level }}</span
            >
            <p class="mt-2 text-sm font-bold text-forena-900">{{ w.title }}</p>
            <p class="mt-1 text-xs text-slate-600">{{ w.detail }}</p>
          </li>
        </ul>
      </div>
      <div class="overflow-hidden rounded-2xl border border-rose-100/90 bg-white/95 shadow-card">
        <div class="border-b border-rose-100 bg-rose-50/40 px-4 py-2.5 sm:px-5 sm:py-3">
          <div class="flex items-center gap-2">
            <Zap class="h-4 w-4 text-rose-600" />
            <h3 class="text-sm font-bold text-rose-900">{{ T.secAlert }} — {{ T.urgent }}</h3>
          </div>
        </div>
        <ul class="divide-y divide-rose-50/80 p-3.5 sm:p-4">
          <li v-for="u in urgentAlerts" :key="u.id" class="py-3 first:pt-0 last:pb-0">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-[10px] font-bold tabular-nums text-slate-500">{{ u.time }}</span>
              <span class="text-[10px] text-slate-500">{{ u.source }}</span>
            </div>
            <p class="mt-1 text-sm font-semibold text-rose-900">{{ u.title }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
