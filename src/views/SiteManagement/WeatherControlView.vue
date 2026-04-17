<script setup>
import { ref } from 'vue'
import { CloudSun, Sparkles, AlertTriangle, CalendarRange, Wind, Droplets } from 'lucide-vue-next'

const T = {
  kicker: '\uc77c\uc815',
  title: '\uae30\uc0c1 \uad00\uc81c',
  desc:
    '\ub2f9\uc77c\xb7\uc8fc\uac04 \uae30\uc0c1 \ube0c\ub9ac\ud551\uacfc \uc704\ud5d8 \uc7a5\ube44 \ud1b5\uc81c, \uacf5\uc815\uacfc\uc758 \uc5f0\ub3d9\uc744 \ud55c \ud654\uba74\uc5d0\uc11c \uc9c0\uc6d0\ud569\ub2c8\ub2e4.',
  catInfo: '\uae30\uc0c1 \uc815\ubcf4 \uad00\ub9ac',
  catControl: '\uae30\uc0c1 \uad00\uc81c',
  catRisk: '\uc704\ud5d8 \ud1b5\uc81c',
  row1Title: '\uae30\uc0c1 \ube0c\ub9ac\ud551 \ubc0f \uc790\ub3d9\ud654',
  row1Desc:
    '\uc9c1\uad00\uc801\uc778 \ub2f9\uc77c/\uc8fc\uac04 \uae30\uc0c1 \ube0c\ub9ac\ud551 \ud45c\ucd9c \ubc0f \uc791\uc5c5 \uc77c\ubcf4 \uc791\uc131 \uc2dc \ud574\ub2f9 \uc2dc\uac04\ub300 \uae30\uc0c1 \uc815\ubcf4 \uc790\ub3d9 \uae30\uc785.',
  row2Title: 'AI \uc704\ud5d8 \uc7a5\ube44 \ud1b5\uc81c',
  row2Desc:
    '\ub2f9\uc77c \uae30\uc0c1 \ubd84\uc11d\uc744 \ud1b5\ud574 \uac15\ud48d, \ud3ed\uc6b0 \uc2dc \ud0c0\uc6cc\ud06c\ub808\uc778 \ub4f1 \uc704\ud5d8 \uc7a5\ube44 \ud22c\uc785 \uc81c\ud55c \ucd94\ucc9c \uacbd\uace0 \ud45c\uc2dc.',
  row3Title: '\uacc4\ud68d \ub300\ube44 \uc704\ud5d8 \uacbd\uace0',
  row3Desc:
    '\uc2e4\uc2dc\uac04 \ub0a0\uc528\uc640 \uacf5\uc815 \uacc4\ud68d\uc744 \ub300\uc870\ud558\uc5ec \uc6b0\ucc9c \uc2dc \ucf58\ud06c\ub9ac\ud2b8 \ud0c0\uc124 \ub4f1 \uc704\ud5d8 \uc77c\uc815\uc744 \ubd89\uc740\uc0c9\uc73c\ub85c \ud558\uc774\ub77c\uc774\ud2b8.',
  demoToday: '\uc624\ub298 \uc694\uc57d',
  demoWeek: '\uc774\ubc88 \uc8fc \uc694\uc57d',
  demoWind: '\ucd5c\ub300 \ud48d\uc18d',
  demoRain: '\uac15\uc218\ud655\ub960',
  badgeAi: 'AI',
  badgePlan: '\uacc4\ud68d \uc5f0\ub3d9',
  liveRisk: '\uc2e4\uc2dc\uac04 \uc704\ud5d8 \ud1b5\uc81c \ucd94\ucc9c (\uc608\uc2dc)',
  dot: '\xb7',
}

const briefing = ref({
  todayHigh: '22\xb0C',
  todayLow: '14\xb0C',
  condition: '\ud765\ub9bc, \uc624\ud6c4 \uc18c\ub098\uae30',
  weekNote: '\ubaa9~\uae08 \uc77c\uc2dc \uac15\ud48d \uc8fc\uc758 (\ucd5c\ub300 15m/s \uc608\ubcf4)',
})

const riskFlags = ref([
  { id: 1, type: 'crane', label: '\ud0c0\uc6cc\ud06c\ub808\uc778 A', level: '\uc8fc\uc758', reason: '\uc624\ud6c4 \ud48d\uc18d 12m/s \uc608\ubcf4' },
  { id: 2, type: 'concrete', label: 'B\uad6c\uc5ed \uc2ac\ub77c\ube0c \ud0c0\uc124', level: '\uc81c\ud55c', reason: '\uac15\uc6b0 \uc608\ubcf4 \u2014 \uacc4\ud68d \ub300\ube44 \uc911\ub2e8 \ucd94\ucc9c' },
])
</script>

<template>
  <div class="space-y-6 pb-10">
    <div
      class="relative overflow-hidden rounded-2xl border border-forena-100/90 bg-gradient-to-br from-white via-sky-50/30 to-flare-50/20 p-6 shadow-card"
    >
      <div
        class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-forena-500 to-flare-500"
      />
      <div class="flex items-start gap-3">
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-forena-700 text-white shadow-md"
        >
          <CloudSun class="h-5 w-5" />
        </span>
        <div>
          <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-sky-600">{{ T.kicker }}</p>
          <h1 class="text-gradient-brand text-xl font-bold tracking-tight">{{ T.title }}</h1>
          <p class="mt-2 max-w-3xl text-sm leading-relaxed text-forena-700/80">{{ T.desc }}</p>
        </div>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <article class="rounded-2xl border border-forena-100/90 bg-white/95 p-5 shadow-card">
        <p class="text-[11px] font-bold text-forena-500">{{ T.demoToday }}</p>
        <p class="mt-2 text-2xl font-bold tabular-nums text-forena-900">{{ briefing.todayHigh }} / {{ briefing.todayLow }}</p>
        <p class="mt-1 text-sm text-slate-600">{{ briefing.condition }}</p>
      </article>
      <article class="rounded-2xl border border-forena-100/90 bg-white/95 p-5 shadow-card">
        <p class="text-[11px] font-bold text-forena-500">{{ T.demoWeek }}</p>
        <p class="mt-2 flex items-center gap-2 text-sm font-semibold text-amber-800">
          <Wind class="h-4 w-4 shrink-0" />
          {{ briefing.weekNote }}
        </p>
      </article>
      <article class="rounded-2xl border border-sky-100/90 bg-sky-50/50 p-5 shadow-card">
        <p class="text-[11px] font-bold text-sky-800">{{ T.demoRain }}</p>
        <p class="mt-2 flex items-center gap-2 text-sm text-sky-900">
          <Droplets class="h-4 w-4" />
          60% (\uc624\ud6c4)
        </p>
      </article>
    </div>

    <div class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 shadow-card">
      <div class="border-b border-forena-100 bg-forena-50/50 px-5 py-3">
        <h2 class="text-sm font-bold text-forena-900">{{ T.catInfo }} {{ T.dot }} {{ T.catControl }}</h2>
      </div>
      <div class="divide-y divide-forena-50">
        <div class="grid gap-4 p-5 md:grid-cols-[200px_1fr] md:items-start">
          <div class="flex flex-wrap items-center gap-2">
            <span class="rounded-lg bg-sky-100 px-2 py-1 text-[10px] font-bold text-sky-800">{{ T.catControl }}</span>
            <CalendarRange class="h-4 w-4 text-flare-600" />
          </div>
          <div>
            <h3 class="font-bold text-forena-900">{{ T.row1Title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ T.row1Desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 shadow-card">
      <div class="border-b border-forena-100 bg-forena-50/50 px-5 py-3">
        <h2 class="text-sm font-bold text-forena-900">{{ T.catRisk }}</h2>
      </div>
      <div class="divide-y divide-forena-50">
        <div class="grid gap-4 p-5 md:grid-cols-[200px_1fr] md:items-start">
          <div class="flex items-center gap-2">
            <span class="rounded-lg bg-violet-100 px-2 py-1 text-[10px] font-bold text-violet-800">{{ T.badgeAi }}</span>
            <Sparkles class="h-4 w-4 text-violet-600" />
          </div>
          <div>
            <h3 class="font-bold text-forena-900">{{ T.row2Title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ T.row2Desc }}</p>
          </div>
        </div>
        <div class="grid gap-4 p-5 md:grid-cols-[200px_1fr] md:items-start">
          <div class="flex items-center gap-2">
            <span class="rounded-lg bg-rose-100 px-2 py-1 text-[10px] font-bold text-rose-800">{{ T.badgePlan }}</span>
            <AlertTriangle class="h-4 w-4 text-rose-600" />
          </div>
          <div>
            <h3 class="font-bold text-forena-900">{{ T.row3Title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ T.row3Desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-rose-100/80 bg-rose-50/30 p-5 shadow-card">
      <h3 class="flex items-center gap-2 text-sm font-bold text-rose-900">
        <AlertTriangle class="h-4 w-4" />
        {{ T.liveRisk }}
      </h3>
      <ul class="mt-3 space-y-2">
        <li
          v-for="r in riskFlags"
          :key="r.id"
          class="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-rose-200/60 bg-white px-4 py-3 text-sm"
        >
          <span class="font-semibold text-forena-900">{{ r.label }}</span>
          <span
            class="rounded-md px-2 py-0.5 text-[10px] font-bold"
            :class="r.level === '\uc81c\ud55c' ? 'bg-rose-600 text-white' : 'bg-amber-100 text-amber-900'"
            >{{ r.level }}</span
          >
          <p class="w-full text-xs text-slate-600">{{ r.reason }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
