<script setup>
import { computed, ref } from 'vue'
import {
  MapPin,
  Settings,
  GripVertical,
  MoreHorizontal,
  Plus,
  X,
  Users,
} from 'lucide-vue-next'

const T = {
  kicker: '\uc778\ub825 \ubc30\uce58 (T.O)',
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
}

let idSeq = 100

const waiting = ref([
  { id: 'w1', name: '\uae40\ucca0\uc218', affiliation: '\ud0dc\uc591\uac74\uc124 (\ud604\uc7a5)' },
  { id: 'w2', name: '\uc774\uc601\ud76c', affiliation: '\uc6b0\uc8fc\uc0b0\uc5c5' },
  { id: 'w3', name: '\ubc15\ubbfc\uc218', affiliation: '\uc778\ub825\uc0ac\ubb34\uc18c' },
  { id: 'w4', name: '\uc815\ub300\ub9ac', affiliation: '\ubcf8\uc0ac \uc18c\uc18d' },
  { id: 'w5', name: '\ucd5c\uc791\uc5c5', affiliation: '\ud0dc\uc591\uac74\uc124 (\ud604\uc7a5)' },
])

const zones = ref([
  {
    id: 'z-a',
    title: 'A\uad6c\uc5ed',
    subtitle: '\uc9c0\ud558 \uc8fc\ucc28\uc7a5',
    required: 4,
    workers: [
      { id: 'z1', name: '\ud55c\ud604\uc7a5', affiliation: '\ud0dc\uc591\uac74\uc124' },
      { id: 'z2', name: '\uc11c\ub300\ub9ac', affiliation: '\ubcf8\uc0ac' },
    ],
  },
  {
    id: 'z-b',
    title: 'B\uad6c\uc5ed',
    subtitle: '1\ub3d9 \uace8\uc870',
    required: 6,
    workers: [{ id: 'z3', name: '\uc624\ud615\uc0ac', affiliation: '\uc6b0\uc8fc\uc0b0\uc5c5' }],
  },
  {
    id: 'z-c',
    title: 'C\uad6c\uc5ed',
    subtitle: '2\ub3d9 \ub9c8\uac10',
    required: 3,
    workers: [],
  },
])

const dragged = ref(null)
const dragSource = ref(null)

const waitingCount = computed(() => waiting.value.length)

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
  if (w) waiting.value.push({ ...w, id: 'w-' + String(++idSeq) })
}

function onDropZone(zoneId) {
  if (!dragged.value || !dragSource.value) return
  const worker = { ...dragged.value }
  const src = dragSource.value

  if (src.type === 'waiting') {
    removeFromWaiting(worker.id)
  } else if (src.type === 'zone' && src.zoneId) {
    const zFrom = zones.value.find((x) => x.id === src.zoneId)
    if (zFrom) zFrom.workers = zFrom.workers.filter((w) => w.id !== worker.id)
  }

  const zTo = zones.value.find((x) => x.id === zoneId)
  if (zTo && !zTo.workers.some((w) => w.id === worker.id)) {
    zTo.workers.push({
      ...worker,
      id: worker.id.startsWith('w') ? 'z-' + String(++idSeq) : worker.id,
    })
  }
  onDragEnd()
}

function onDropWaiting() {
  if (!dragged.value || !dragSource.value) return
  const worker = { ...dragged.value }
  if (dragSource.value.type === 'zone' && dragSource.value.zoneId) {
    const zFrom = zones.value.find((x) => x.id === dragSource.value.zoneId)
    if (zFrom) zFrom.workers = zFrom.workers.filter((w) => w.id !== worker.id)
    waiting.value.push({ ...worker, id: 'w-' + String(++idSeq) })
  }
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
  alert(T.alertLoad)
}

function autoRecommend() {
  const pool = [...waiting.value]
  for (const z of zones.value) {
    while (z.workers.length < z.required && pool.length) {
      const w = pool.shift()
      removeFromWaiting(w.id)
      z.workers.push({ ...w, id: 'z-' + String(++idSeq) })
    }
  }
  alert(T.alertAuto)
}

function confirmSave() {
  alert(T.alertSave)
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
    </div>

    <div class="flex gap-4 overflow-x-auto pb-2" @dragover.prevent @drop.prevent="onDropWaiting">
      <section
        class="flex w-[280px] shrink-0 flex-col rounded-2xl border border-forena-100/90 bg-white/90 shadow-card"
      >
        <header class="flex items-center justify-between border-b border-forena-100 px-4 py-3">
          <div class="flex items-center gap-2">
            <Users class="h-4 w-4 text-flare-600" />
            <span class="text-sm font-bold text-forena-900">{{ T.waitingTitle }}</span>
            <span class="text-[11px] text-slate-500">({{ T.waitingSub }})</span>
          </div>
          <span class="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-800"
            >{{ waitingCount }}{{ T.count }}</span
          >
        </header>
        <div class="max-h-[520px] space-y-2 overflow-y-auto p-3">
          <div
            v-for="w in waiting"
            :key="w.id"
            draggable="true"
            class="flex cursor-grab items-center gap-3 rounded-xl border border-forena-100 bg-white p-3 shadow-sm transition hover:border-flare-300 active:cursor-grabbing"
            @dragstart="onDragStart(w, 'waiting')"
            @dragend="onDragEnd"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forena-100 to-flare-50 text-xs font-bold text-forena-700"
            >
              {{ w.name.slice(0, 1) }}
            </div>
            <div class="min-w-0 flex-1">
              <div class="truncate text-sm font-semibold text-forena-900">{{ w.name }}</div>
              <div class="truncate text-[11px] text-slate-500">{{ w.affiliation }}</div>
            </div>
            <MoreHorizontal class="h-4 w-4 shrink-0 text-slate-400" />
          </div>
          <p v-if="waiting.length === 0" class="py-8 text-center text-sm text-slate-400">
            {{ T.waitingEmpty }}
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
            class="flex cursor-grab items-center gap-3 rounded-xl border border-forena-100 bg-white p-3 shadow-sm transition hover:border-flare-300 active:cursor-grabbing"
            @dragstart="onDragStart(w, 'zone', z.id)"
            @dragend="onDragEnd"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-flare-100 to-forena-50 text-xs font-bold text-forena-800"
            >
              {{ w.name.slice(0, 1) }}
            </div>
            <div class="min-w-0 flex-1">
              <div class="truncate text-sm font-semibold text-forena-900">{{ w.name }}</div>
              <div class="truncate text-[11px] text-slate-500">{{ w.affiliation }}</div>
            </div>
            <button
              type="button"
              class="rounded-lg p-1.5 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
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
  </div>
</template>
