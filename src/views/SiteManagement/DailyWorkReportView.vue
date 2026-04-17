<script setup>
import { computed, ref } from 'vue'
import {
  Calendar,
  Printer,
  Send,
  CloudRain,
  Wind,
  Plus,
  X,
} from 'lucide-vue-next'

const T = {
  titleSuffix: ' \uc791\uc5c5 \uc77c\ubcf4',
  print: '\uc77c\ubcf4 \ucd9c\ub825',
  approve: '\uc77c\ubcf4 \uacb0\uc7ac / \uc804\uc1a1',
  weatherTitle: '\uae08\uc77c \uae30\uc0c1 \ubc0f \ud2b9\uc774\uc0ac\ud56d (\uc774\uc288)',
  am: '\uc624\uc804',
  pm: '\uc624\ud6c4',
  safetyTitle: '\ud22c\uc785 \ucd1d\uad00 \ubc0f \uc548\uc804 \uad00\ub9ac',
  totalWorkers: '\uae08\uc77c \ud22c\uc785 \ucd1d\uc6d0',
  manDaysSum: '\ud655\uc815 \uacf5\uc218 \ud569\uacc4',
  newHireEdu: '\uc2e0\uaddc \ucc44\uc6a9\uc790 \uad50\uc721',
  safetyAcc: '\uc548\uc804 \uc0ac\uace0',
  nearMiss: '\uc544\ucc28\uc0ac\uace0',
  tableTitle: '\uad6c\uc5ed\ubcc4 / \uacf5\uc885\ubcc4 \uc8fc\uc694 \uc791\uc5c5 \ub0b4\uc6a9',
  colArea: '\uc791\uc5c5 \uad6c\uc5ed',
  colTrade: '\uacf5\uc885 / \ud611\ub825\uc0ac',
  colHead: '\uc778\uc6d0',
  colWork: '\uae08\uc77c \uc791\uc5c5 \ub0b4\uc6a9',
  addWork: '\uc8fc\uc694 \uc791\uc5c5 \ucd94\uac00',
  modalTitle: '\uc8fc\uc694 \uc791\uc5c5 \ub4f1\ub85d',
  cancel: '\ucde8\uc18c',
  save: '\ub4f1\ub85d',
  fArea: '\uc791\uc5c5 \uad6c\uc5ed',
  fTrade: '\uacf5\uc885 / \ud611\ub825\uc0ac',
  fCount: '\uc778\uc6d0',
  fDetail: '\uc791\uc5c5 \ub0b4\uc6a9',
  fAlert: '\uc774\uc0c1/\ucde8\uc18c \ub4f1 \ud2b9\uc774 \uc0ac\ud56d (\ube68\uac04\uc0c9 \uac15\uc870)',
  personUnit: '\uba85',
  manUnit: '\uacf5\uc218',
  caseUnit: '\uac74',
}

const reportDate = ref('2025-10-14')

const dateTitle = computed(() => {
  const [y, m, d] = reportDate.value.split('-').map(Number)
  return `${y}\ub144 ${m}\uc6d4 ${d}\uc77c${T.titleSuffix}`
})

const weather = ref({
  am: { label: '\ube44 (18\xb0C)', icon: 'rain' },
  pm: { label: '\ud765\ub9bc/\uac15\ud48d (22\xb0C)', icon: 'wind' },
  notes:
    '\uc624\uc804 \uc6b0\ucc9c\uc73c\ub85c \uc778\ud558\uc5ec \uc678\ubd80 \ud1a0\ubaa9 \uacf5\uc0ac \uc804\uba74 \uc911\ub2e8. \uc624\ud6c4 \ubc14\ub78d \uc57d\ud654 \ud6c4 \uc2e4\ub0b4 \uacf5\uc885 \uc911\uc2ec \uc9c4\ud589. \uc9c0\ud558 \uc8fc\ucc28\uc7a5 \ubc30\uc218 \uacf5\uc0ac\ub294 \ubc29\uc218 \uac00\ub3d9 \uc544\ub798 \uc81c\ud55c\uc801 \uc9c4\ud589.',
})

const summary = ref({
  totalPersonnel: 132,
  manDays: 124.5,
  newHire: '3\uba85 (\uc774\uc218 \uc644\ub8cc)',
  accidents: 0,
  nearMiss: 1,
})

let workId = 3
const workRows = ref([
  {
    id: 1,
    area: 'A\uad6c\uc5ed (\uc9c0\ud558\uc8fc\ucc28\uc7a5)',
    trade: '\ud615\ud2c0 (\ud0dc\uc591\uac74\uc124)',
    personnel: 45,
    detail: '\uc9c0\ud558 2\uce35 \uc2ac\ub77c\ube0c \ud615\ud2c0 \uc870\ub9bd \ubc0f \ubcf4\uac15',
    highlight: false,
  },
  {
    id: 2,
    area: 'B\uad6c\uc5ed (\uc5c5\ubb34\ub3d9)',
    trade: '\uc804\uae30 (\ud55c\uc232\uc804\uae30)',
    personnel: 28,
    detail: '2\ub3d9 \uc804\uae30 \ubc30\uad00 \ubc0f \ucf58\uc13c\ud2b8 \uc124\uce58',
    highlight: false,
  },
  {
    id: 3,
    area: 'C\uad6c\uc5ed (\uc678\ubd80)',
    trade: '\ud1a0\ubaa9 (\uccad\uc6d4\uac74\uc124)',
    personnel: 0,
    detail: '\uc6b0\ucc9c\uc73c\ub85c \uc778\ud55c \uc791\uc5c5 \ucde8\uc18c (\uc2e4\ub0b4 \ub300\uae30)',
    highlight: true,
  },
])

const showAddModal = ref(false)
const workForm = ref({
  area: '',
  trade: '',
  personnel: '',
  detail: '',
  highlight: false,
})

function openAddModal() {
  workForm.value = { area: '', trade: '', personnel: '', detail: '', highlight: false }
  showAddModal.value = true
}

function closeAddModal() {
  showAddModal.value = false
}

function submitWorkRow() {
  const f = workForm.value
  const n = Number(f.personnel)
  workRows.value.push({
    id: ++workId,
    area: f.area || '-',
    trade: f.trade || '-',
    personnel: Number.isFinite(n) ? n : 0,
    detail: f.detail || '-',
    highlight: f.highlight,
  })
  closeAddModal()
}

function printReport() {
  window.print()
}

function approveReport() {
  window.alert('\uc77c\ubcf4 \uacb0\uc7ac/\uc804\uc1a1 (\ub370\ubaa8)')
}
</script>

<template>
  <div class="space-y-6 pb-10 print:space-y-4">
    <!-- Header -->
    <div
      class="relative overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 p-6 shadow-card print:border-forena-200"
    >
      <div
        class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-flare-400 via-forena-500 to-flare-500 print:hidden"
      />
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div class="flex items-start gap-3">
          <span
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-flare-400 to-flare-600 text-white shadow-md"
          >
            <Calendar class="h-6 w-6" />
          </span>
          <div>
            <h1 class="text-gradient-brand text-xl font-bold tracking-tight md:text-2xl">{{ dateTitle }}</h1>
            <p class="mt-1 text-sm text-forena-600 tabular-nums">{{ reportDate }}</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-2 print:hidden">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-xl border border-forena-200 bg-white px-4 py-2.5 text-sm font-bold text-forena-800 shadow-sm transition hover:bg-forena-50"
            @click="printReport"
          >
            <Printer class="h-4 w-4" />
            {{ T.print }}
          </button>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-forena-700 to-forena-900 px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:from-forena-800 hover:to-forena-950"
            @click="approveReport"
          >
            <Send class="h-4 w-4" />
            {{ T.approve }}
          </button>
        </div>
      </div>
    </div>

    <!-- Middle two columns -->
    <div class="grid gap-4 lg:grid-cols-2">
      <div class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 p-5 shadow-card">
        <h2 class="border-b border-forena-100 pb-3 text-sm font-bold text-forena-900">{{ T.weatherTitle }}</h2>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <div class="rounded-xl border border-sky-100 bg-sky-50/60 p-4">
            <p class="text-[11px] font-bold uppercase tracking-wide text-sky-700">{{ T.am }}</p>
            <div class="mt-2 flex items-center gap-2">
              <CloudRain class="h-8 w-8 text-sky-600" />
              <span class="text-sm font-semibold text-forena-900">{{ weather.am.label }}</span>
            </div>
          </div>
          <div class="rounded-xl border border-slate-200 bg-slate-50/80 p-4">
            <p class="text-[11px] font-bold uppercase tracking-wide text-slate-600">{{ T.pm }}</p>
            <div class="mt-2 flex items-center gap-2">
              <Wind class="h-8 w-8 text-slate-600" />
              <span class="text-sm font-semibold text-forena-900">{{ weather.pm.label }}</span>
            </div>
          </div>
        </div>
        <p class="mt-4 rounded-xl border border-forena-100 bg-forena-50/40 p-4 text-sm leading-relaxed text-forena-800">
          {{ weather.notes }}
        </p>
      </div>

      <div class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 p-5 shadow-card">
        <h2 class="border-b border-forena-100 pb-3 text-sm font-bold text-forena-900">{{ T.safetyTitle }}</h2>
        <ul class="mt-4 space-y-3">
          <li class="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-forena-100 px-4 py-3">
            <span class="text-sm font-bold text-forena-700">{{ T.totalWorkers }}</span>
            <span class="text-lg font-bold tabular-nums text-forena-900">
              {{ summary.totalPersonnel }}{{ T.personUnit }}
            </span>
          </li>
          <li class="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-emerald-200/80 bg-emerald-50/70 px-4 py-3">
            <span class="text-sm font-bold text-emerald-900">{{ T.manDaysSum }}</span>
            <span class="text-lg font-bold tabular-nums text-emerald-900">
              {{ summary.manDays }} {{ T.manUnit }}
            </span>
          </li>
          <li
            class="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-sky-200/80 bg-sky-50/70 px-4 py-3"
          >
            <span class="text-sm font-bold text-sky-900">{{ T.newHireEdu }}</span>
            <span class="text-sm font-bold text-sky-950">{{ summary.newHire }}</span>
          </li>
          <li
            class="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-rose-200/80 bg-rose-50/70 px-4 py-3"
          >
            <span class="text-sm font-bold text-rose-900">{{ T.safetyAcc }} / {{ T.nearMiss }}</span>
            <span class="text-sm font-bold tabular-nums text-rose-950">
              {{ summary.accidents }}{{ T.caseUnit }} / {{ summary.nearMiss }}{{ T.caseUnit }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 shadow-card">
      <div
        class="flex flex-col gap-3 border-b border-forena-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <h2 class="text-sm font-bold text-forena-900">{{ T.tableTitle }}</h2>
        <button
          type="button"
          class="inline-flex items-center gap-2 self-start rounded-xl bg-gradient-to-r from-forena-700 to-forena-900 px-4 py-2 text-sm font-bold text-white shadow-md transition hover:from-forena-800 hover:to-forena-950 print:hidden"
          @click="openAddModal"
        >
          <Plus class="h-4 w-4" />
          {{ T.addWork }}
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[720px] text-left text-sm">
          <thead
            class="border-b border-forena-100 bg-forena-50/70 text-[11px] font-bold uppercase tracking-wider text-forena-500"
          >
            <tr>
              <th class="px-5 py-4 font-semibold">{{ T.colArea }}</th>
              <th class="px-5 py-4 font-semibold">{{ T.colTrade }}</th>
              <th class="px-5 py-4 font-semibold">{{ T.colHead }}</th>
              <th class="px-5 py-4 font-semibold">{{ T.colWork }}</th>
            </tr>
          </thead>
          <tbody class="text-forena-800">
            <tr
              v-for="row in workRows"
              :key="row.id"
              class="border-b border-forena-50 transition hover:bg-flare-50/20"
            >
              <td class="px-5 py-4 align-top text-sm font-medium">{{ row.area }}</td>
              <td class="px-5 py-4 align-top text-xs font-semibold text-forena-700">{{ row.trade }}</td>
              <td class="px-5 py-4 align-top tabular-nums text-slate-700">{{ row.personnel }}</td>
              <td
                class="px-5 py-4 align-top text-sm leading-relaxed"
                :class="row.highlight ? 'font-semibold text-rose-600' : 'text-forena-900'"
              >
                {{ row.detail }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="showAddModal"
        class="fixed inset-0 z-[100] flex items-end justify-center bg-forena-900/40 p-4 backdrop-blur-sm sm:items-center print:hidden"
        @click.self="closeAddModal"
      >
        <div class="w-full max-w-lg rounded-2xl border border-forena-100 bg-white shadow-2xl">
          <div class="flex items-center justify-between border-b border-forena-100 px-5 py-4">
            <h3 class="text-lg font-bold text-forena-900">{{ T.modalTitle }}</h3>
            <button
              type="button"
              class="rounded-lg p-2 text-slate-500 hover:bg-forena-50"
              @click="closeAddModal"
            >
              <X class="h-5 w-5" />
            </button>
          </div>
          <form class="space-y-4 px-5 py-5" @submit.prevent="submitWorkRow">
            <label class="block space-y-1">
              <span class="text-xs font-bold text-forena-600">{{ T.fArea }}</span>
              <input
                v-model="workForm.area"
                type="text"
                required
                class="w-full rounded-xl border border-forena-200 px-3 py-2 text-sm focus:border-flare-400 focus:outline-none focus:ring-2 focus:ring-flare-200/50"
              />
            </label>
            <label class="block space-y-1">
              <span class="text-xs font-bold text-forena-600">{{ T.fTrade }}</span>
              <input
                v-model="workForm.trade"
                type="text"
                required
                class="w-full rounded-xl border border-forena-200 px-3 py-2 text-sm focus:border-flare-400 focus:outline-none focus:ring-2 focus:ring-flare-200/50"
              />
            </label>
            <label class="block space-y-1">
              <span class="text-xs font-bold text-forena-600">{{ T.fCount }}</span>
              <input
                v-model="workForm.personnel"
                type="number"
                min="0"
                required
                class="w-full rounded-xl border border-forena-200 px-3 py-2 text-sm focus:border-flare-400 focus:outline-none focus:ring-2 focus:ring-flare-200/50"
              />
            </label>
            <label class="block space-y-1">
              <span class="text-xs font-bold text-forena-600">{{ T.fDetail }}</span>
              <textarea
                v-model="workForm.detail"
                rows="3"
                required
                class="w-full resize-y rounded-xl border border-forena-200 px-3 py-2 text-sm focus:border-flare-400 focus:outline-none focus:ring-2 focus:ring-flare-200/50"
              />
            </label>
            <label class="flex cursor-pointer items-start gap-2 rounded-xl border border-forena-100 bg-forena-50/50 p-3">
              <input v-model="workForm.highlight" type="checkbox" class="mt-1 rounded border-forena-300 text-flare-600" />
              <span class="text-xs font-medium text-forena-800">{{ T.fAlert }}</span>
            </label>
            <div class="flex justify-end gap-2 border-t border-forena-100 pt-4">
              <button
                type="button"
                class="rounded-xl border border-forena-200 px-4 py-2.5 text-sm font-bold text-forena-700 hover:bg-forena-50"
                @click="closeAddModal"
              >
                {{ T.cancel }}
              </button>
              <button
                type="submit"
                class="rounded-xl bg-gradient-to-r from-forena-700 to-forena-900 px-5 py-2.5 text-sm font-bold text-white shadow-md"
              >
                {{ T.save }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>
  </div>
</template>
