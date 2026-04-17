<script setup>
import {
  Zap,
  Building2,
  Users,
  Wallet,
  ShieldAlert,
  User,
  HardHat,
  AlertTriangle,
  Bell,
  Cloud,
  TrendingUp,
  ChevronRight,
} from 'lucide-vue-next'

const D = {
  heroKicker: '\ucd1d\uad8c \ud604\ud669',
  heroTitle: '\ubcf8\uc0ac \uc804\uccb4 \uc6b4\uc601 \ud604\ud669',
  heroDesc:
    '\ub4f1\ub85d \ud604\uc7a5, \ucd9c\uadfc, \uc815\uc0b0 \uc54c\ub9bc, \uae30\uc0c1 \uc774\uc288 \ub4f1 \ubcf8\uc0ac KPI\ub97c \ud55c \ud654\uba74\uc5d0 \uc9d1\uc57d\ud569\ub2c8\ub2e4.',
  k1: '\ub4f1\ub85d \ud604\uc7a5 (\uc6b4\uc601 / \uc885\ub8cc)',
  k1Sub: '/ 4 \uacf3',
  k2: '\uc624\ub298 \ucd9c\uadfc \uc778\uc6d0 (\uc2b9\uc778)',
  k2Sub: '/ 595 \uba85',
  k2Foot: '\uacb0\uadfc/\ucde8\uc18c: 12\uba85 (\uc815\uc0c1)',
  k3: '\uc2e0\uaddc \uc815\uc0b0 \ub0b4\uc5ed \uc54c\ub9bc',
  k3Sub: '\uac74 \ub300\uae30 \uc911',
  k3Btn: '\uc815\uc0b0 \uc218\uc2e0 \ub300\uae30: 2\uac74',
  k4: '\uc704\ud5d8 \uc54c\ub9bc \ubc0f \uae30\uc0c1 \uc774\uc288',
  k4Unit: '\uac74',
  k4Foot: '\uac15\ub0a8\uad6c \uc7ac\uac74\ucd95 A\uacf5\uad6c (\uac15\ud48d)',
  colTitle: '\ud604\uc7a5\ubcc4 \uc6b4\uc601 \uc694\uc57d',
  colAll: '\uc804\uccb4\ubcf4\uae30',
  chartTitle: '\uc6d4\ubcc4 \uc778\uac74\ube44 \ucd1d\uc561 \uc694\uc57d',
  chartUnit: '(\ub2e8\uc704: \uc5b5)',
  chartTrend: '\uc804\uc6d4 \ub300\ube44 2.4% \uc99d\uac00',
  donutTitle: '\uc804\uccb4 \ud611\ub825\uc0ac\ubcc4 \ud22c\uc785 \ud604\ud669',
  donutCenter: '18\uac1c\uc0ac',
  alertTitle: '\uae34\uae09 \uc54c\ub9bc / \uc774\uc288',
  wxTitle: '\uae08\uc77c \uae30\uc0c1 \uc601\ud5a5 ',
  wxHint: '(\uc694\uc57d)',
  wxRainL: '\ube44 (\uc6b0\ucca8)',
  wxRainR: '3\uac1c \ud604\uc7a5',
  wxWindL: '\uac15\ud48d (\ud48d\uc18d 10m/s+)',
  wxWindR: '1\uac1c \ud604\uc7a5',
  wxBtn: '\uae30\uc0c1 \uc0c1\uc138 \ub9ac\uc2a4\ud2b8 \ubcf4\uae30',
  months: [
    '1\uc6d4',
    '2\uc6d4',
    '3\uc6d4',
    '4\uc6d4',
    '5\uc6d4',
    '6\uc6d4',
    '7\uc6d4',
    '8\uc6d4',
    '9\uc6d4',
    '10\uc6d4',
    '11\uc6d4',
    '12\uc6d4',
  ],
  sites: [
    {
      name: '\uac15\ub0a8\uad6c \uc7ac\uac74\ucd95 A\uacf5\uad6c',
      badge: '\uc6b4\uc601 \uc911',
      badgeClass: 'bg-emerald-50 text-emerald-700',
      deploy: '\ud22c\uc785: 124\uba85',
      partners: '\ud611\ub825\uc0ac: 5\uac1c',
      issue: true,
      muted: false,
    },
    {
      name: '\ud310\uad50 \ub370\uc774\ud130\uc13c\ud130',
      badge: '\uc6b4\uc601 \uc911',
      badgeClass: 'bg-emerald-50 text-emerald-700',
      deploy: '\ud22c\uc785: 350\uba85',
      partners: '\ud611\ub825\uc0ac: 12\uac1c',
      issue: false,
      muted: false,
    },
    {
      name: '\uc778\ucc9c\ud56d \ubb3c\ub958\uc13c\ud130',
      badge: '\ub9c8\uac10 \ud544\uc694',
      badgeClass: 'bg-amber-50 text-amber-800',
      deploy: '\ud22c\uc785: 85\uba85',
      partners: '\ud611\ub825\uc0ac: 3\uac1c',
      issue: false,
      muted: true,
    },
    {
      name: '\uc138\uc885 \ubcf5\ud569\ubb38\ud654\uacf5\uac04',
      badge: '\uc2dc\uc791 \uc804',
      badgeClass: 'bg-slate-100 text-slate-600',
      deploy: '\ud22c\uc785: 0\uba85',
      partners: '\ud611\ub825\uc0ac: 0\uac1c',
      issue: false,
      muted: 'low',
    },
  ],
  alerts: [
    {
      title: '[\uac15\ub0a8\uad6c] \uac15\ud48d \uc8fc\uc758\ubcf4',
      body: '\uc624\ud6c4 \uace0\uc18c\uc791\uc5c5 \uc804\uba74 \uc911\uc9c0 \uc9c0\uc2dc',
      tone: 'rose',
    },
    {
      title: '[\uc778\ucc9c\ud56d] \uc7a5\ube44 \uacb0\ud568',
      body: '1\ud638\uae30 \ud06c\ub808\uc778 \uc815\ube44 \ub300\uae30 (2\uc77c \uc9c0\uc5f0 \uc608\uc0c1)',
      tone: 'amber',
    },
  ],
  issueLabel: '\uc774\uc288 \ubc1c\uc0dd',
  legend: [
    { label: '\ud615\ud2c8', sub: '(45%)', dot: 'bg-forena-500' },
    { label: '\ucc9c\uadfc', sub: '(28%)', dot: 'bg-flare-400' },
    { label: '\ube44\uacc4', sub: '(15%)', dot: 'bg-amber-400' },
    { label: '\uae30\ud0c0', sub: '(12%)', dot: 'bg-slate-400' },
  ],
}
</script>

<template>
  <div class="space-y-6 pb-10 font-sans text-slate-800">
    <div
      class="relative overflow-hidden rounded-2xl border border-forena-100/90 bg-gradient-to-br from-white via-forena-50/50 to-flare-50/30 p-6 shadow-card"
    >
      <div
        class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-flare-400 via-forena-500 to-flare-500"
      />
      <div class="flex flex-wrap items-start gap-4">
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-flare-400 to-flare-600 text-white shadow-md"
        >
          <Zap class="h-5 w-5" />
        </span>
        <div>
          <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-flare-600">
            {{ D.heroKicker }}
          </p>
          <h2 class="text-gradient-brand text-xl font-bold tracking-tight">{{ D.heroTitle }}</h2>
          <p class="mt-2 max-w-3xl text-sm leading-relaxed text-forena-700/80">{{ D.heroDesc }}</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <article
        class="relative flex h-[120px] flex-col justify-between overflow-hidden rounded-2xl border border-white/90 bg-white/90 p-5 shadow-card backdrop-blur-sm"
      >
        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-forena-500 to-flare-400 opacity-90"
        />
        <div class="flex items-start justify-between">
          <h3 class="text-sm font-semibold text-forena-800">{{ D.k1 }}</h3>
          <span
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-flare-100 text-flare-600"
          >
            <Building2 class="h-4 w-4" />
          </span>
        </div>
        <div class="flex items-baseline gap-1">
          <span class="text-4xl font-light tabular-nums text-forena-900">2</span>
          <span class="text-lg font-medium text-slate-400">{{ D.k1Sub }}</span>
        </div>
      </article>

      <article
        class="relative flex h-[120px] flex-col justify-between overflow-hidden rounded-2xl border border-white/90 bg-white/90 p-5 shadow-card backdrop-blur-sm"
      >
        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-flare-500 to-emerald-400"
        />
        <div class="flex items-start justify-between">
          <h3 class="text-sm font-semibold text-forena-800">{{ D.k2 }}</h3>
          <span
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600"
          >
            <Users class="h-4 w-4" />
          </span>
        </div>
        <div>
          <div class="flex items-baseline gap-1">
            <span class="text-4xl font-light tabular-nums text-forena-900">559</span>
            <span class="text-sm font-medium text-slate-400">{{ D.k2Sub }}</span>
          </div>
          <p class="mt-1 flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
            <span class="h-1 w-1 rounded-full bg-emerald-500" />
            {{ D.k2Foot }}
          </p>
        </div>
      </article>

      <article
        class="relative flex h-[120px] flex-col justify-between overflow-hidden rounded-2xl border border-amber-100/80 bg-gradient-to-br from-amber-50/80 to-white/90 p-5 shadow-card"
      >
        <div class="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-amber-200/20" />
        <div class="relative z-10 flex items-start justify-between">
          <h3 class="text-sm font-semibold text-amber-900">{{ D.k3 }}</h3>
          <span
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700"
          >
            <Wallet class="h-4 w-4" />
          </span>
        </div>
        <div class="relative z-10">
          <div class="flex items-baseline gap-1">
            <span class="text-4xl font-light tabular-nums text-forena-900">4</span>
            <span class="text-sm font-medium text-slate-500">{{ D.k3Sub }}</span>
          </div>
          <button
            type="button"
            class="mt-1 flex items-center gap-0.5 text-left text-[11px] font-bold text-amber-800 hover:underline"
          >
            {{ D.k3Btn }}
            <ChevronRight class="h-3 w-3" />
          </button>
        </div>
      </article>

      <article
        class="relative flex h-[120px] flex-col justify-between overflow-hidden rounded-2xl border border-rose-100/90 bg-gradient-to-br from-rose-50/90 to-white/90 p-5 shadow-card"
      >
        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-rose-400 to-amber-400"
        />
        <div class="flex items-start justify-between">
          <h3 class="text-sm font-semibold text-rose-800">{{ D.k4 }}</h3>
          <span
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-600"
          >
            <ShieldAlert class="h-4 w-4" />
          </span>
        </div>
        <div>
          <div class="flex items-baseline gap-1">
            <span class="text-4xl font-light tabular-nums text-rose-600">1</span>
            <span class="text-sm font-medium text-rose-500">{{ D.k4Unit }}</span>
          </div>
          <p class="mt-1 truncate text-[11px] font-medium text-rose-700">{{ D.k4Foot }}</p>
        </div>
      </article>
    </div>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div
        class="relative flex min-h-[500px] flex-col rounded-2xl border border-white/90 bg-white/90 p-5 shadow-card backdrop-blur-sm lg:col-span-3"
      >
        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-forena-500 to-flare-400 opacity-90"
        />
        <div class="mb-4 flex items-center justify-between">
          <h3 class="font-bold text-forena-900">{{ D.colTitle }}</h3>
          <button
            type="button"
            class="text-[11px] font-semibold text-flare-600 hover:text-flare-700 hover:underline"
          >
            {{ D.colAll }}
          </button>
        </div>
        <div class="scrollbar-hide flex-1 space-y-3 overflow-y-auto pr-1">
          <div
            v-for="(s, idx) in D.sites"
            :key="idx"
            class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
            :class="s.muted === true ? 'opacity-70' : s.muted === 'low' ? 'opacity-50' : ''"
          >
            <div class="mb-3 flex items-start justify-between">
              <h4 class="text-sm font-bold text-slate-800">{{ s.name }}</h4>
              <span class="rounded-full px-2 py-0.5 text-[10px] font-bold" :class="s.badgeClass">{{
                s.badge
              }}</span>
            </div>
            <div class="space-y-1.5 text-xs text-slate-600">
              <p class="flex items-center justify-between gap-2">
                <span class="flex items-center gap-1.5">
                  <User class="h-3.5 w-3.5 text-flare-500" />
                  {{ s.deploy }}
                </span>
                <span
                  v-if="s.issue"
                  class="flex items-center gap-1 rounded bg-rose-50 px-1.5 py-0.5 text-[10px] font-semibold text-rose-600"
                >
                  <AlertTriangle class="h-3 w-3" />
                  {{ D.issueLabel }}
                </span>
              </p>
              <p class="flex items-center gap-1.5">
                <HardHat class="h-3.5 w-3.5 text-forena-400" />
                {{ s.partners }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 lg:col-span-6">
        <div
          class="flex min-h-[300px] flex-1 flex-col rounded-2xl border border-white/90 bg-white/90 p-5 shadow-card backdrop-blur-sm"
        >
          <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h3 class="font-bold text-forena-900">
              {{ D.chartTitle }}
              <span class="ml-1 text-xs font-normal text-slate-400">{{ D.chartUnit }}</span>
            </h3>
            <span
              class="flex items-center gap-1 rounded-lg bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700"
            >
              <TrendingUp class="h-3.5 w-3.5" />
              {{ D.chartTrend }}
            </span>
          </div>
          <div
            class="relative flex flex-1 items-end justify-between rounded-xl border-b-2 border-forena-100 bg-gradient-to-t from-flare-50/50 to-transparent px-4 pb-2"
          >
            <div class="h-[20%] w-8 rounded-t-sm bg-forena-200" />
            <div class="h-[25%] w-8 rounded-t-sm bg-forena-200" />
            <div class="h-[35%] w-8 rounded-t-sm bg-forena-300" />
            <div class="h-[55%] w-8 rounded-t-sm bg-forena-400" />
            <div class="h-[40%] w-8 rounded-t-sm bg-forena-300" />
            <div class="h-[60%] w-8 rounded-t-sm bg-flare-500" />
            <div
              class="relative h-[80%] w-8 rounded-t-sm bg-gradient-to-t from-forena-600 to-flare-500"
            >
              <span
                class="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-600"
                >18.5</span
              >
            </div>
            <div class="h-[5%] w-8 rounded-t-sm bg-slate-200" />
            <div class="h-[5%] w-8 rounded-t-sm bg-slate-200" />
            <div class="h-[5%] w-8 rounded-t-sm bg-slate-200" />
            <div class="h-[5%] w-8 rounded-t-sm bg-slate-200" />
            <div class="h-[5%] w-8 rounded-t-sm bg-slate-200" />
          </div>
          <div class="mt-2 flex justify-between px-2 text-[10px] font-medium text-slate-400">
            <span v-for="(m, mi) in D.months" :key="mi">{{ m }}</span>
          </div>
        </div>

        <div
          class="flex h-[180px] flex-col rounded-2xl border border-white/90 bg-white/90 p-5 shadow-card backdrop-blur-sm"
        >
          <h3 class="mb-4 font-bold text-forena-900">{{ D.donutTitle }}</h3>
          <div class="flex flex-1 items-center justify-around">
            <div
              class="relative flex h-24 w-24 items-center justify-center rounded-full border-[12px] border-slate-100"
            >
              <div
                class="absolute inset-[-12px] rotate-[-45deg] rounded-full border-[12px] border-forena-500 border-b-transparent border-r-transparent"
              />
              <div
                class="absolute inset-[-12px] rotate-45 rounded-full border-[12px] border-flare-400 border-b-transparent border-l-transparent border-t-transparent"
              />
              <div
                class="absolute inset-[-12px] -rotate-12 rounded-full border-[12px] border-amber-400 border-b-transparent border-r-transparent border-t-transparent"
              />
              <span class="text-xs font-bold text-forena-900">{{ D.donutCenter }}</span>
            </div>
            <div class="grid grid-cols-2 gap-x-6 gap-y-3 text-xs">
              <div v-for="(lg, li) in D.legend" :key="li" class="flex items-center gap-2">
                <div class="h-2 w-2 rounded-full" :class="lg.dot" />
                <span class="text-slate-600"
                  >{{ lg.label }} <span class="text-slate-400">{{ lg.sub }}</span></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 lg:col-span-3">
        <div
          class="flex-1 rounded-2xl border border-flare-100/80 bg-gradient-to-b from-flare-50/50 to-white/90 p-5 shadow-card backdrop-blur-sm"
        >
          <div class="mb-4 flex items-center justify-between">
            <h3 class="font-bold text-forena-900">{{ D.alertTitle }}</h3>
            <Bell class="h-5 w-5 text-flare-500" />
          </div>
          <div class="space-y-3">
            <div
              v-for="(a, ai) in D.alerts"
              :key="ai"
              class="rounded-lg bg-white p-3 shadow-sm"
              :class="
                a.tone === 'rose'
                  ? 'border border-rose-100 ring-1 ring-rose-100/80'
                  : 'border border-amber-100'
              "
            >
              <div
                class="mb-1 flex items-center gap-1.5 text-xs font-bold"
                :class="a.tone === 'rose' ? 'text-rose-600' : 'text-amber-700'"
              >
                <AlertTriangle class="h-3.5 w-3.5 shrink-0" />
                {{ a.title }}
              </div>
              <p class="text-[11px] text-slate-500">{{ a.body }}</p>
            </div>
          </div>
        </div>

        <div
          class="rounded-2xl border border-white/90 bg-white/90 p-5 shadow-card backdrop-blur-sm"
        >
          <div class="mb-4 flex items-center justify-between">
            <h3 class="font-bold text-forena-900">
              {{ D.wxTitle }}<span class="text-xs font-normal text-slate-400">{{ D.wxHint }}</span>
            </h3>
            <Cloud class="h-5 w-5 text-flare-500" />
          </div>
          <div class="mb-4 space-y-2">
            <div class="flex items-center justify-between rounded-lg bg-flare-50/80 p-2.5">
              <span class="text-xs font-medium text-forena-800">{{ D.wxRainL }}</span>
              <span class="text-xs font-bold text-flare-700">{{ D.wxRainR }}</span>
            </div>
            <div class="flex items-center justify-between rounded-lg bg-rose-50/80 p-2.5">
              <span class="text-xs font-medium text-rose-900">{{ D.wxWindL }}</span>
              <span class="text-xs font-bold text-rose-600">{{ D.wxWindR }}</span>
            </div>
          </div>
          <button
            type="button"
            class="w-full rounded-xl border border-slate-200 bg-white py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-50"
          >
            {{ D.wxBtn }}
          </button>
        </div>
      </div>
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
