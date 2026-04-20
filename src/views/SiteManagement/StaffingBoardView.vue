<script setup>
import { computed, ref, onMounted } from 'vue'
import {
  MapPin,
  Settings,
  GripVertical,
  MoreHorizontal,
  Plus,
  X,
  Users,
  Radio,
  WifiOff,
  Moon,
  AlertTriangle,
} from 'lucide-vue-next'
import { getAffiliationKind, affiliationKindBadgeClass } from '@/utils/workerAffiliation'
import { useStaffingBoardSync } from '@/composables/useStaffingBoardSync'

const T = {
  kicker: '\uc778\ub825 \ubc30\uce58',
  boardTitle: '\uc778\ub825 \ubc30\uce58 \uad00\ub9ac \ubcf4\ub4dc',
  hint: '\ub4dc\ub798\uadf8 \uc564 \ub4dc\ub86d\uc73c\ub85c \uc791\uc5c5\uc790\ub97c \uad6c\uc5ed\ubcc4\ub85c \ubc30\uce58\ud558\uc138\uc694.',
  loadPrev: '\uc774\uc804 \ubc30\uce58 \ubd88\ub7ec\uc624\uae30',
  autoRec: '\uc790\ub3d9 \ucd94\ucc9c \ubc30\uce58',
  confirm: '\ubc30\uce58 \ud655\uc815 \ubc0f \uc800\uc7a5',
  waitingTitle: '\ud22c\uc785 \uac00\ub2a5 \uc778\ub825',
  waitingSub: '\ubc30\uce58 \uc804',
  waitingEmpty: '\ud22c\uc785 \uac00\ub2a5 \uc778\ub825\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.',
  needTo: '\ud544\uc694 \uc778\uc6d0 (T.O)',
  current: '\ud604\uc7ac \ubc30\uce58',
  dropHint: '\uc778\ub825\uc744 \uc774\uacf3\uc73c\ub85c \ub4dc\ub798\uadf8',
  zoneSettings: '\uad6c\uc5ed \uc124\uc815',
  removeZone: '\uad6c\uc5ed\uc5d0\uc11c \uc81c\uac70',
  more: '\ub354 \ubcf4\uae30',
  count: '\uba85',
  alertLoad: '\uc800\uc7a5\ub41c \uc774\uc804 \ubc30\uce58 \uc2a4\ub0b4\uc774\ud06c\ub97c \ubd88\ub7ec\uc634\ub2c8\ub2e4. (\ub370\ubaa8)',
  alertAuto:
    '\ubd80\uc871 \uad6c\uc5ed \uc704\uc8fc\ub85c \ud22c\uc785 \uac00\ub2a5 \uc778\ub825\uc744 \uc790\ub3d9 \ubc30\uce58\ud588\uc2b5\ub2c8\ub2e4. (\ub370\ubaa8)',
  alertSave: '\ud604\uc7ac \ubc30\uce58\uac00 \ud655\uc815\ub418\uc5b4 \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4. (\ub370\ubaa8)',
  kindSummary: '\uc624\ub298 \ubcf4\ub4dc \uc778\uc6d0 (\uad6c\ubd84)',
  kindFilter: '\ub300\uae30 \ubaa9\ub85d \uad6c\ubd84',
  kindAll: '\uc804\uccb4',
  badgeDirect: '\uc9c1\uc601',
  badgePartner: '\ud611\ub825',
  badgeAgency: '\uc778\ub825',
  countUnit: '\uba85',
  waitingFilteredEmpty: '\uc120\ud0dd\ud55c \uad6c\ubd84\uc5d0 \ud574\ub2f9\ud558\ub294 \uc778\ub825\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.',
  zoneMix: '\uad6c\uc5ed \uad6c\uc131',
  totalWorkers: '\ubcf4\ub4dc \ucd1d\uc778\uc6d0',
  syncTitle: '\uc2e4\uc2dc\uac04 \ubcf4\ub4dc \ub3d9\uae30\ud654',
  syncConnected:
    'BroadcastChannel: \ub2e4\ub978 \uad00\ub9ac \ud0ed\uacfc \ub3d9\uae30\ud654 \uc911 (\uc0c8\ub85c\uace0\uce68 \uc5c6\uc774 \ubc18\uc601)',
  syncUnsupported:
    '\uc774 \ube0c\ub77c\uc6b0\uc800\ub294 \ud0ed \uac04 \ub3d9\uae30\ud654(BroadcastChannel)\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.',
  tradeToTitle: '\uad6c\uc5ed \ud544\uc694 \uc9c1\uc885(T.O)',
  tradeWarn:
    '\uc774 \uad6c\uc5ed\uc5d0 \ud544\uc694\ud55c \uc9c1\uc885\uacfc \ub9de\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubc30\uce58\ub294 \uac00\ub2a5\ud558\uba70, \uc548\uc804/\uc0b0\uc5c5 \uad00\uc810\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694.',
  fatigueTitle:
    '\uc548\uc804 \uc8fc\uc758: \uc804\ub0a0 \uc57c\uac04 \uadfc\ubb34 \ub610\ub294 \uc5f0\uc18d \uadfc\ubb34 \uc77c\uc218\uac00 \ub192\uc74c (\ud53c\ub85c\ub3c4 \ub204\uc801 \uc758\uc2ed)',
  skillCarpenter: '\ubaa9\uc218',
  skillRebar: '\uccbc\uadfc',
  skillWelder: '\uc6a9\uc811',
  skillLabor: '\uc778\ubd80',
}

const tradeLabel = (key) => {
  if (key === 'carpenter') return T.skillCarpenter
  if (key === 'rebar') return T.skillRebar
  if (key === 'welder') return T.skillWelder
  return T.skillLabor
}

let idSeq = 100

function cloneWorker(w) {
  return {
    ...w,
    skills: Array.isArray(w.skills) ? [...w.skills] : ['labor'],
    fatigue: w.fatigue
      ? { ...w.fatigue }
      : { nightShiftYesterday: false, consecutiveDays: 0 },
  }
}

const waiting = ref([
  {
    id: 'w1',
    name: '\uae40\ucca0\uc218',
    affiliation: '\ud611\ub825\uc0ac (\ud0dc\uc591\uac74\uc124)',
    skills: ['carpenter', 'labor'],
    fatigue: { nightShiftYesterday: true, consecutiveDays: 2 },
  },
  {
    id: 'w2',
    name: '\uc774\uc601\ud76c',
    affiliation: '\ud611\ub825\uc0ac (\uc6b0\uc8fc\uc0b0\uc5c5)',
    skills: ['rebar'],
    fatigue: { nightShiftYesterday: false, consecutiveDays: 6 },
  },
  {
    id: 'w3',
    name: '\ubc15\ubbfc\uc218',
    affiliation: '\uc778\ub825\uc0ac\ubb34\uc18c (\uac1c\uc778)',
    skills: ['labor'],
    fatigue: { nightShiftYesterday: false, consecutiveDays: 1 },
  },
  {
    id: 'w4',
    name: '\uc815\ub300\ub9ac',
    affiliation: '\ubcf8\uc0ac \uc18c\uc18d',
    skills: ['welder', 'labor'],
    fatigue: { nightShiftYesterday: false, consecutiveDays: 0 },
  },
  {
    id: 'w5',
    name: '\ucd5c\uc791\uc5c5',
    affiliation: '\ud611\ub825\uc0ac (\ud0dc\uc591\uac74\uc124)',
    skills: ['carpenter'],
    fatigue: { nightShiftYesterday: false, consecutiveDays: 5 },
  },
])

const zones = ref([
  {
    id: 'z-a',
    title: 'A\uad6c\uc5ed',
    subtitle: '\uc9c0\ud558 \uc8fc\ucc28\uc7a5',
    required: 4,
    tradeNeeds: [
      { trade: 'carpenter', need: 2 },
      { trade: 'rebar', need: 1 },
      { trade: 'welder', need: 1 },
    ],
    workers: [
      {
        id: 'z1',
        name: '\ud55c\ud604\uc7a5',
        affiliation: '\ud611\ub825\uc0ac (\ud0dc\uc591\uac74\uc124)',
        skills: ['carpenter'],
        fatigue: { nightShiftYesterday: false, consecutiveDays: 3 },
      },
      {
        id: 'z2',
        name: '\uc11c\ub300\ub9ac',
        affiliation: '\ubcf8\uc0ac \uc18c\uc18d',
        skills: ['labor'],
        fatigue: { nightShiftYesterday: true, consecutiveDays: 4 },
      },
    ],
  },
  {
    id: 'z-b',
    title: 'B\uad6c\uc5ed',
    subtitle: '1\ub3d9 \uace8\uc870',
    required: 6,
    tradeNeeds: [
      { trade: 'rebar', need: 3 },
      { trade: 'carpenter', need: 2 },
      { trade: 'labor', need: 1 },
    ],
    workers: [
      {
        id: 'z3',
        name: '\uc624\ud615\uc0ac',
        affiliation: '\ud611\ub825\uc0ac (\uc6b0\uc8fc\uc0b0\uc5c5)',
        skills: ['rebar'],
        fatigue: { nightShiftYesterday: false, consecutiveDays: 7 },
      },
    ],
  },
  {
    id: 'z-c',
    title: 'C\uad6c\uc5ed',
    subtitle: '2\ub3d9 \ub9c8\uac10',
    required: 3,
    tradeNeeds: [
      { trade: 'welder', need: 1 },
      { trade: 'labor', need: 2 },
    ],
    workers: [],
  },
])

const dragged = ref(null)
const dragSource = ref(null)

const toasts = ref([])
let toastSeq = 0

function pushToast(message, variant = 'warning') {
  const id = ++toastSeq
  toasts.value = [...toasts.value, { id, message, variant }]
  window.setTimeout(() => {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }, 4200)
}

const waitingCount = computed(() => waiting.value.length)

const boardKindFilter = ref('')

const displayedWaiting = computed(() => {
  const k = boardKindFilter.value
  if (!k) return waiting.value
  return waiting.value.filter((w) => getAffiliationKind(w.affiliation) === k)
})

const boardKindBreakdown = computed(() => {
  const list = []
  for (const w of waiting.value) list.push(w)
  for (const z of zones.value) for (const w of z.workers) list.push(w)
  let direct = 0
  let partner = 0
  let agency = 0
  for (const w of list) {
    const k = getAffiliationKind(w.affiliation)
    if (k === 'direct') direct++
    else if (k === 'agency') agency++
    else partner++
  }
  return { direct, partner, agency, total: list.length }
})

function workerKindLabel(affiliation) {
  const k = getAffiliationKind(affiliation)
  if (k === 'direct') return T.badgeDirect
  if (k === 'agency') return T.badgeAgency
  return T.badgePartner
}

const boardKindPills = computed(() => [
  { key: '', label: T.kindAll },
  { key: 'direct', label: T.badgeDirect },
  { key: 'partner', label: T.badgePartner },
  { key: 'agency', label: T.badgeAgency },
])

function zoneKindMixText(z) {
  if (!z.workers.length) return ''
  let d = 0
  let p = 0
  let a = 0
  for (const w of z.workers) {
    const k = getAffiliationKind(w.affiliation)
    if (k === 'direct') d++
    else if (k === 'agency') a++
    else p++
  }
  return `${T.zoneMix}: ${T.badgeDirect} ${d} · ${T.badgePartner} ${p} · ${T.badgeAgency} ${a}`
}

function countTradeInZone(zone, trade) {
  return zone.workers.filter((w) => (w.skills || []).includes(trade)).length
}

function zoneTradeProgress(zone) {
  const needs = zone.tradeNeeds || []
  return needs.map((tn) => ({
    trade: tn.trade,
    label: tradeLabel(tn.trade),
    need: tn.need,
    fill: countTradeInZone(zone, tn.trade),
  }))
}

/** \uad6c\uc5ed\uc5d0 \uba85\uc2dc\ub41c \ud544\uc694 \uc9c1\uc885\uacfc \uc791\uc5c5\uc790 \uc2a4\ud0ac \uad50\uc9d1\uc774 \uc5c6\uc73c\uba74 \uacbd\uace0 */
function shouldWarnTradeMismatch(zone, worker) {
  const needs = zone.tradeNeeds || []
  if (!needs.length) return false
  const needSet = new Set(needs.map((n) => n.trade))
  const skills = worker.skills || []
  if (!skills.length) return false
  return !skills.some((s) => needSet.has(s))
}

function workerFatigueHigh(w) {
  const f = w.fatigue || {}
  return Boolean(f.nightShiftYesterday) || (f.consecutiveDays ?? 0) >= 5
}

function skillBadgeClass(trade) {
  if (trade === 'welder') return 'bg-violet-50 text-violet-800 ring-1 ring-violet-200/80'
  if (trade === 'rebar') return 'bg-sky-50 text-sky-800 ring-1 ring-sky-200/80'
  if (trade === 'carpenter') return 'bg-amber-50 text-amber-900 ring-1 ring-amber-200/80'
  return 'bg-slate-100 text-slate-700 ring-1 ring-slate-200/80'
}

function packState() {
  return {
    waiting: JSON.parse(JSON.stringify(waiting.value)),
    zones: JSON.parse(JSON.stringify(zones.value)),
    idSeq,
  }
}

function applyRemoteState(payload) {
  if (!payload || !Array.isArray(payload.waiting) || !Array.isArray(payload.zones)) return
  waiting.value = payload.waiting.map(cloneWorker)
  zones.value = payload.zones.map((z) => ({
    ...z,
    workers: (z.workers || []).map(cloneWorker),
  }))
  if (typeof payload.idSeq === 'number' && payload.idSeq > idSeq) idSeq = payload.idSeq
}

const tabId =
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `tab-${Date.now()}-${Math.random().toString(36).slice(2)}`

const { syncStatus, publish } = useStaffingBoardSync(tabId, applyRemoteState)

function syncPublish() {
  publish(packState())
}

onMounted(() => {
  syncPublish()
})

function onDragStart(worker, source, zoneId = null) {
  dragged.value = worker
  dragSource.value = { type: source, zoneId }
}

function onDragEnd() {
  dragged.value = null
  dragSource.value = null
}

function removeFromWaiting(id) {
  waiting.value = waiting.value.filter((w) => w.id !== id)
}

function removeFromZone(zoneId, workerId) {
  const z = zones.value.find((x) => x.id === zoneId)
  if (!z) return
  const w = z.workers.find((x) => x.id === workerId)
  z.workers = z.workers.filter((x) => x.id !== workerId)
  if (w) waiting.value.push(cloneWorker({ ...w, id: 'w-' + String(++idSeq) }))
  syncPublish()
}

function onDropZone(zoneId) {
  if (!dragged.value || !dragSource.value) return
  const worker = cloneWorker(dragged.value)
  const src = dragSource.value

  if (src.type === 'waiting') {
    removeFromWaiting(worker.id)
  } else if (src.type === 'zone' && src.zoneId) {
    const zFrom = zones.value.find((x) => x.id === src.zoneId)
    if (zFrom) zFrom.workers = zFrom.workers.filter((w) => w.id !== worker.id)
  }

  const zTo = zones.value.find((x) => x.id === zoneId)
  if (zTo && !zTo.workers.some((w) => w.id === worker.id)) {
    if (shouldWarnTradeMismatch(zTo, worker)) {
      pushToast(T.tradeWarn, 'warning')
    }
    zTo.workers.push({
      ...worker,
      id: worker.id.startsWith('w') ? 'z-' + String(++idSeq) : worker.id,
    })
  }
  syncPublish()
  onDragEnd()
}

function onDropWaiting() {
  if (!dragged.value || !dragSource.value) return
  const worker = cloneWorker(dragged.value)
  if (dragSource.value.type === 'zone' && dragSource.value.zoneId) {
    const zFrom = zones.value.find((x) => x.id === dragSource.value.zoneId)
    if (zFrom) zFrom.workers = zFrom.workers.filter((w) => w.id !== worker.id)
    waiting.value.push(cloneWorker({ ...worker, id: 'w-' + String(++idSeq) }))
  }
  syncPublish()
  onDragEnd()
}

function zoneFillRatio(z) {
  if (!z.required) return 1
  return Math.min(z.workers.length / z.required, 1)
}

function zoneBarClass(z) {
  const r = zoneFillRatio(z)
  if (r >= 1) return 'bg-emerald-500'
  if (r >= 0.5) return 'bg-amber-500'
  return 'bg-rose-500'
}

function loadPrevious() {
  window.alert(T.alertLoad)
}

function autoRecommend() {
  const pool = waiting.value.map(cloneWorker)
  waiting.value = []
  for (const z of zones.value) {
    while (z.workers.length < z.required && pool.length) {
      const w = pool.shift()
      z.workers.push({ ...w, id: 'z-' + String(++idSeq) })
    }
  }
  waiting.value = pool
  syncPublish()
  window.alert(T.alertAuto)
}

function confirmSave() {
  syncPublish()
  window.alert(T.alertSave)
}

function toastClass(v) {
  if (v === 'danger') return 'border-rose-200 bg-rose-50 text-rose-900'
  if (v === 'info') return 'border-sky-200 bg-sky-50 text-sky-900'
  return 'border-amber-200 bg-amber-50 text-amber-950'
}
</script>

<template>
  <div class="space-y-6 pb-10">
    <div
      class="relative overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 p-5 shadow-card md:p-6"
    >
      <div
        class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-flare-400 via-forena-500 to-flare-500"
      />
      <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div class="flex items-start gap-3">
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-flare-400 to-flare-600 text-white shadow-md"
          >
            <MapPin class="h-5 w-5" />
          </span>
          <div>
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-flare-600">{{ T.kicker }}</p>
            <h1 class="text-gradient-brand text-xl font-bold tracking-tight">{{ T.boardTitle }}</h1>
            <p class="mt-1 text-sm text-forena-600/90">{{ T.hint }}</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            type="button"
            class="rounded-xl border border-forena-200 bg-white px-4 py-2.5 text-sm font-bold text-forena-700 shadow-sm transition hover:bg-forena-50"
            @click="loadPrevious"
          >
            {{ T.loadPrev }}
          </button>
          <button
            type="button"
            class="rounded-xl border border-flare-200 bg-flare-50 px-4 py-2.5 text-sm font-bold text-forena-800 shadow-sm transition hover:bg-flare-100/80"
            @click="autoRecommend"
          >
            {{ T.autoRec }}
          </button>
          <button
            type="button"
            class="rounded-xl bg-gradient-to-r from-forena-700 to-forena-900 px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:from-forena-800 hover:to-forena-950"
            @click="confirmSave"
          >
            {{ T.confirm }}
          </button>
        </div>
      </div>
      <div
        class="mt-4 flex flex-wrap items-center gap-2 rounded-xl border px-3 py-2.5 text-[11px] font-semibold"
        :class="
          syncStatus === 'connected'
            ? 'border-emerald-200/90 bg-emerald-50/60 text-emerald-900'
            : 'border-forena-200 bg-forena-50/80 text-forena-700'
        "
      >
        <Radio
          v-if="syncStatus === 'connected'"
          class="h-3.5 w-3.5 shrink-0 text-emerald-600"
          aria-hidden="true"
        />
        <WifiOff v-else class="h-3.5 w-3.5 shrink-0 text-slate-500" aria-hidden="true" />
        <span class="font-bold text-forena-800">{{ T.syncTitle }}</span>
        <span class="text-forena-600/90">
          {{ syncStatus === 'connected' ? T.syncConnected : T.syncUnsupported }}
        </span>
      </div>
    </div>

    <div
      class="rounded-2xl border border-forena-100/90 bg-white/90 px-4 py-3 shadow-card sm:px-5"
    >
      <p class="text-[11px] font-bold uppercase tracking-wide text-forena-500">{{ T.kindSummary }}</p>
      <p class="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-forena-800">
        <span class="tabular-nums">
          <span class="font-semibold text-indigo-700">{{ T.badgeDirect }}</span>
          {{ boardKindBreakdown.direct }}{{ T.countUnit }}
        </span>
        <span class="text-slate-300" aria-hidden="true">·</span>
        <span class="tabular-nums">
          <span class="font-semibold text-amber-800">{{ T.badgePartner }}</span>
          {{ boardKindBreakdown.partner }}{{ T.countUnit }}
        </span>
        <span class="text-slate-300" aria-hidden="true">·</span>
        <span class="tabular-nums">
          <span class="font-semibold text-slate-600">{{ T.badgeAgency }}</span>
          {{ boardKindBreakdown.agency }}{{ T.countUnit }}
        </span>
        <span class="text-slate-300" aria-hidden="true">·</span>
        <span class="tabular-nums text-slate-500">
          {{ T.totalWorkers }} {{ boardKindBreakdown.total }}{{ T.countUnit }}
        </span>
      </p>
    </div>

    <div class="flex gap-4 overflow-x-auto pb-2" @dragover.prevent @drop.prevent="onDropWaiting">
      <section
        class="flex w-[280px] shrink-0 flex-col rounded-2xl border border-forena-100/90 bg-white/90 shadow-card"
      >
        <header class="border-b border-forena-100 px-4 py-3">
          <div class="flex items-center justify-between gap-2">
            <div class="flex min-w-0 items-center gap-2">
              <Users class="h-4 w-4 shrink-0 text-flare-600" />
              <div class="min-w-0">
                <div class="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span class="text-sm font-bold text-forena-900">{{ T.waitingTitle }}</span>
                  <span class="text-[11px] text-slate-500">({{ T.waitingSub }})</span>
                </div>
              </div>
            </div>
            <span class="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-800"
              >{{ waitingCount }}{{ T.count }}</span
            >
          </div>
          <p class="mt-2 text-[10px] font-bold text-forena-500">{{ T.kindFilter }}</p>
          <div class="mt-1.5 flex flex-wrap gap-1.5">
            <button
              v-for="pill in boardKindPills"
              :key="pill.key || 'all'"
              type="button"
              class="rounded-full px-2.5 py-0.5 text-[10px] font-bold transition ring-1"
              :class="
                boardKindFilter === pill.key
                  ? 'bg-forena-800 text-white ring-forena-800'
                  : 'bg-forena-50 text-forena-700 ring-forena-200/80 hover:bg-forena-100'
              "
              @click="boardKindFilter = pill.key"
            >
              {{ pill.label }}
            </button>
          </div>
        </header>
        <div class="max-h-[520px] space-y-2 overflow-y-auto p-3">
          <div
            v-for="w in displayedWaiting"
            :key="w.id"
            draggable="true"
            class="flex cursor-grab items-start gap-2 rounded-xl border border-forena-100 bg-white p-3 shadow-sm transition hover:border-flare-300 active:cursor-grabbing"
            @dragstart="onDragStart(w, 'waiting')"
            @dragend="onDragEnd"
          >
            <div class="relative shrink-0">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-forena-100 to-flare-50 text-xs font-bold text-forena-700"
              >
                {{ w.name.slice(0, 1) }}
              </div>
              <span
                v-if="workerFatigueHigh(w)"
                class="absolute -right-0.5 -bottom-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-white ring-2 ring-white"
                :title="T.fatigueTitle"
              >
                <AlertTriangle class="h-2.5 w-2.5" aria-hidden="true" />
              </span>
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex flex-wrap items-center gap-1.5">
                <div class="truncate text-sm font-semibold text-forena-900">{{ w.name }}</div>
                <span
                  class="shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold"
                  :class="affiliationKindBadgeClass(getAffiliationKind(w.affiliation))"
                >
                  {{ workerKindLabel(w.affiliation) }}
                </span>
                <Moon
                  v-if="w.fatigue?.nightShiftYesterday"
                  class="h-3.5 w-3.5 shrink-0 text-indigo-500"
                  :title="T.fatigueTitle"
                  aria-hidden="true"
                />
              </div>
              <div class="truncate text-[11px] text-slate-500">{{ w.affiliation }}</div>
              <div class="mt-1.5 flex flex-wrap gap-1">
                <span
                  v-for="sk in w.skills || []"
                  :key="sk"
                  class="rounded px-1.5 py-0.5 text-[9px] font-bold"
                  :class="skillBadgeClass(sk)"
                >
                  {{ tradeLabel(sk) }}
                </span>
              </div>
            </div>
            <MoreHorizontal class="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
          </div>
          <p v-if="displayedWaiting.length === 0" class="py-8 text-center text-sm text-slate-400">
            {{ waiting.length === 0 ? T.waitingEmpty : T.waitingFilteredEmpty }}
          </p>
        </div>
      </section>

      <section
        v-for="z in zones"
        :key="z.id"
        class="flex w-[300px] shrink-0 flex-col rounded-2xl border border-forena-100/90 bg-white/90 shadow-card"
        @dragover.prevent
        @drop.prevent="onDropZone(z.id)"
      >
        <header class="border-b border-forena-100 px-4 py-3">
          <div class="flex items-start justify-between gap-2">
            <div>
              <div class="flex items-center gap-1.5">
                <h2 class="text-sm font-bold text-forena-900">{{ z.title }}</h2>
                <button
                  type="button"
                  class="rounded p-1 text-slate-400 transition hover:bg-forena-50 hover:text-forena-600"
                  :title="T.zoneSettings"
                >
                  <Settings class="h-3.5 w-3.5" />
                </button>
              </div>
              <p class="text-[11px] text-slate-500">{{ z.subtitle }}</p>
            </div>
          </div>
          <div class="mt-3 space-y-1.5">
            <div class="flex justify-between text-[11px] font-semibold text-forena-600">
              <span>{{ T.needTo }} {{ z.required }}{{ T.count }}</span>
              <span>{{ T.current }} {{ z.workers.length }}{{ T.count }}</span>
            </div>
            <div class="h-2 overflow-hidden rounded-full bg-forena-100">
              <div
                class="h-full rounded-full transition-all duration-300"
                :class="zoneBarClass(z)"
                :style="{ width: Math.round(zoneFillRatio(z) * 100) + '%' }"
              />
            </div>
            <p v-if="z.workers.length" class="text-[10px] font-medium text-slate-500">
              {{ zoneKindMixText(z) }}
            </p>
            <div v-if="(z.tradeNeeds || []).length" class="rounded-lg border border-forena-100 bg-forena-50/50 px-2 py-2">
              <p class="text-[9px] font-bold uppercase tracking-wide text-forena-500">{{ T.tradeToTitle }}</p>
              <ul class="mt-1 space-y-0.5">
                <li
                  v-for="row in zoneTradeProgress(z)"
                  :key="row.trade"
                  class="flex justify-between text-[10px] font-semibold tabular-nums"
                >
                  <span class="text-forena-700">{{ row.label }}</span>
                  <span :class="row.fill >= row.need ? 'text-emerald-700' : 'text-rose-600'">
                    {{ row.fill }}/{{ row.need }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div
          class="m-3 flex min-h-[100px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-forena-200/80 bg-forena-50/40 px-3 py-6 text-center transition hover:border-flare-300 hover:bg-flare-50/30"
        >
          <GripVertical class="mb-1 h-5 w-5 text-forena-400" />
          <span class="text-[11px] font-medium text-forena-500">{{ T.dropHint }}</span>
        </div>

        <div class="max-h-[360px] flex-1 space-y-2 overflow-y-auto px-3 pb-3">
          <div
            v-for="w in z.workers"
            :key="w.id"
            draggable="true"
            class="flex cursor-grab items-start gap-2 rounded-xl border border-forena-100 bg-white p-3 shadow-sm transition hover:border-flare-300 active:cursor-grabbing"
            @dragstart="onDragStart(w, 'zone', z.id)"
            @dragend="onDragEnd"
          >
            <div class="relative shrink-0">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-flare-100 to-forena-50 text-xs font-bold text-forena-800"
              >
                {{ w.name.slice(0, 1) }}
              </div>
              <span
                v-if="workerFatigueHigh(w)"
                class="absolute -right-0.5 -bottom-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-white ring-2 ring-white"
                :title="T.fatigueTitle"
              >
                <AlertTriangle class="h-2.5 w-2.5" aria-hidden="true" />
              </span>
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex flex-wrap items-center gap-1.5">
                <div class="truncate text-sm font-semibold text-forena-900">{{ w.name }}</div>
                <span
                  class="shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold"
                  :class="affiliationKindBadgeClass(getAffiliationKind(w.affiliation))"
                >
                  {{ workerKindLabel(w.affiliation) }}
                </span>
                <Moon
                  v-if="w.fatigue?.nightShiftYesterday"
                  class="h-3.5 w-3.5 shrink-0 text-indigo-500"
                  :title="T.fatigueTitle"
                  aria-hidden="true"
                />
              </div>
              <div class="truncate text-[11px] text-slate-500">{{ w.affiliation }}</div>
              <div class="mt-1.5 flex flex-wrap gap-1">
                <span
                  v-for="sk in w.skills || []"
                  :key="sk"
                  class="rounded px-1.5 py-0.5 text-[9px] font-bold"
                  :class="skillBadgeClass(sk)"
                >
                  {{ tradeLabel(sk) }}
                </span>
              </div>
            </div>
            <button
              type="button"
              class="mt-0.5 shrink-0 rounded-lg p-1.5 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
              :title="T.removeZone"
              @click="removeFromZone(z.id, w.id)"
            >
              <X class="h-4 w-4" />
            </button>
          </div>
        </div>
        <footer class="border-t border-forena-50 px-3 py-2 text-center">
          <button
            type="button"
            class="inline-flex items-center gap-1 text-[11px] font-bold text-flare-700 hover:text-flare-800"
          >
            <Plus class="h-3.5 w-3.5" />
            {{ T.more }}
          </button>
        </footer>
      </section>
    </div>

    <Teleport to="body">
      <div
        class="pointer-events-none fixed bottom-4 right-4 z-[80] flex max-w-sm flex-col gap-2"
        aria-live="polite"
      >
        <div
          v-for="t in toasts"
          :key="t.id"
          class="pointer-events-auto flex items-start gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold shadow-lg ring-1 ring-black/5"
          :class="toastClass(t.variant)"
        >
          <AlertTriangle v-if="t.variant === 'warning'" class="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>{{ t.message }}</span>
        </div>
      </div>
    </Teleport>
  </div>
</template>
