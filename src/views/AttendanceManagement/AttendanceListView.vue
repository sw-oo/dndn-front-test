<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  ScanLine,
  Search,
  Trash2,
  X,
  AlertTriangle,
  Users,
  Clock,
  UserCheck,
  Eye,
} from 'lucide-vue-next'

const props = defineProps({
  embed: { type: Boolean, default: false },
})

const router = useRouter()

const T = {
  kicker: '\ud604\uc7a5 \uc6b4\uc601',
  title: '\ucd9c\uc785 / \uadfc\ud0dc \uad00\ub9ac',
  desc: '\uc791\uc5c5\uc790 \ucd9c\ud1f4\uadfc\uacfc \uacf5\uc218 \uc0b0\uc815 \ud604\ud669\uc744 \uc77c\uc77c\ubcc4\ub85c \uc870\ud68c\ud558\uace0 \ubcf4\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
  breadcrumb: '\ud604\uc7a5 \uad00\ub9ac / \ucd9c\uc785\xb7\uadfc\ud0dc',
  statTotal: '\uc870\ud68c \uc778\uc6d0',
  statWorking: '\uc791\uc5c5 \uc911',
  statDone: '\ud1f4\uadfc \uc644\ub8cc',
  filterDate: '\uc870\ud68c \ub0a0\uc9dc',
  filterSite: '\ud604\uc7a5',
  filterAffil: '\uc18c\uc18d \uad6c\ubd84',
  filterSearch: '\uc791\uc5c5\uc790 \uc774\ub984',
  filterSearchPh: '\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694',
  siteAll: '\uc804\uccb4 \ud604\uc7a5',
  affilAll: '\uc804\uccb4 \uc18c\uc18d',
  colContact: '\uc774\ub984 / \uc5f0\ub77d\ucc98',
  colEmergency: '\ube44\uc0c1 \uc5f0\ub77d\ub9dd',
  colAffil: '\uc18c\uc18d / \ud604\uc7a5',
  colTime: '\ucd9c\xb7\ud1f4\uadfc',
  colMan: '\uc0b0\uc815 \uacf5\uc218',
  colStatus: '\uc0c1\ud0dc',
  colDel: '\uc0ad\uc81c',
  empty: '\uc870\ud68c\ub41c \uadfc\ud0dc \ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.',
  drawerTitle: '\uadfc\ud0dc \uae30\ub85d \ubcf4\uc815',
  drawerWorker: '\ub300\uc0c1 \uc791\uc5c5\uc790',
  affilChange: '\uc18c\uc18d \ubcc0\uacbd',
  clockIn: '\ucd9c\uadfc \uc2dc\uac04',
  clockOut: '\ud1f4\uadfc \uc2dc\uac04',
  manDays: '\uc0b0\uc815 \uacf5\uc218',
  reasonTitle: '\ubcf4\uc815 \uc0ac\uc720 (\ud544\uc218)',
  reasonPh: '\uc2dc\uac04 \uc624\ub958, \uc2dc\uc2a4\ud15c \ub204\ub77d \ub4f1 \uc0ac\uc720\ub97c \uc785\ub825\ud558\uc138\uc694.',
  cancel: '\ucde8\uc18c',
  save: '\ubcf4\uc815 \ubc0f \uc2b9\uc778',
  closedWarn: '\uc774\ubbf8 \ub9c8\uac10\ub41c \ud604\uc7a5\uc758 \uadfc\ud0dc\ub294 \uc218\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.',
  deleteConfirm: '\ud574\ub2f9 \uc791\uc5c5\uc790\uc758 \uadfc\ud0dc \uae30\ub85d\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?',
  deleted: '\uc0ad\uc81c\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
  reasonRequired: '\ubcf4\uc815 \uc0ac\uc720\ub97c \ubc18\ub4dc\uc2dc \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.',
  saved: '\uadfc\ud0dc \uc815\ubcf4\uac00 \uc131\uacf5\uc801\uc73c\ub85c \ubcf4\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
  closedTag: '\ub9c8\uac10\ub428',
  manSuffix: '\uacf5\uc218',
  statHint: '\uae30\uc900',
  colDetail: '\uc0c1\uc138\ubcf4\uae30',
}

const siteOptions = [
  { value: '\uac15\ub0a8\uad6c \uc7ac\uac74\ucd95 A\uacf5\uad6c', label: '\uac15\ub0a8\uad6c \uc7ac\uac74\ucd95 A\uacf5\uad6c' },
  { value: '\ud310\uad50 \ub370\uc774\ud130\uc13c\ud130', label: '\ud310\uad50 \ub370\uc774\ud130\uc13c\ud130' },
]

const affiliationOptions = [
  { value: '\ubcf8\uc0ac \uc18c\uc18d', label: '\ubcf8\uc0ac \uc18c\uc18d \uc9c1\uc6d0' },
  { value: '\ud611\ub825\uc0ac', label: '\ud611\ub825\uc0ac \uc18c\uc18d' },
  { value: '\uc778\ub825\uc0ac\ubb34\uc18c', label: '\uc778\ub825\uc0ac\ubb34\uc18c (\uac1c\uc778)' },
]

const editAffiliationOptions = [
  { value: '\ubcf8\uc0ac \uc18c\uc18d', label: '\ubcf8\uc0ac \uc18c\uc18d \uc9c1\uc6d0' },
  { value: '\ud611\ub825\uc0ac (\ud0dc\uc591\uac74\uc124)', label: '\ud611\ub825\uc0ac (\ud0dc\uc591\uac74\uc124)' },
  { value: '\uc778\ub825\uc0ac\ubb34\uc18c', label: '\uc778\ub825\uc0ac\ubb34\uc18c (\uac1c\uc778)' },
]

const filters = ref({
  date: new Date().toISOString().split('T')[0],
  siteName: '',
  affiliationType: '',
  searchName: '',
})

const attendanceList = ref([
  {
    id: 1,
    name: '\uae40\ub3d9\uc11d',
    phone: '010-1234-5678',
    emergency: '010-9999-1111 (\ubc30\uc6b0\uc790)',
    affiliationType: '\ud611\ub825\uc0ac (\ud0dc\uc591\uac74\uc124)',
    site: '\uac15\ub0a8\uad6c \uc7ac\uac74\ucd95 A\uacf5\uad6c',
    clockIn: '06:50',
    clockOut: '17:10',
    manDays: 1.0,
    status: '\ud1f4\uadfc \uc644\ub8cc',
    isClosed: false,
    monthTotalMan: 18.5,
    clockHistory: [
      { date: '2025-10-14', clockIn: '06:50', clockOut: '17:10', manDays: 1.0 },
      { date: '2025-10-13', clockIn: '06:48', clockOut: '17:05', manDays: 1.0 },
      { date: '2025-10-12', clockIn: '06:52', clockOut: '17:00', manDays: 1.0 },
      { date: '2025-10-11', clockIn: '06:55', clockOut: '12:30', manDays: 0.5 },
    ],
  },
  {
    id: 2,
    name: '\uc774\ubaa9\uc218',
    phone: '010-8888-7777',
    emergency: '010-7777-6666 (\uc790\ub155)',
    affiliationType: '\uc778\ub825\uc0ac\ubb34\uc18c',
    site: '\uac15\ub0a8\uad6c \uc7ac\uac74\ucd95 A\uacf5\uad6c',
    clockIn: '07:05',
    clockOut: '-',
    manDays: 0,
    status: '\uc791\uc5c5 \uc911',
    isClosed: false,
    monthTotalMan: 14.0,
    clockHistory: [
      { date: '2025-10-14', clockIn: '07:05', clockOut: '-', manDays: 0 },
      { date: '2025-10-13', clockIn: '07:00', clockOut: '17:15', manDays: 1.0 },
      { date: '2025-10-12', clockIn: '07:02', clockOut: '17:00', manDays: 1.0 },
    ],
  },
  {
    id: 3,
    name: '\ubc15\ubc18\uc7a5',
    phone: '010-5555-4444',
    emergency: '010-4444-3333 (\ud615\uc81c)',
    affiliationType: '\ubcf8\uc0ac \uc18c\uc18d',
    site: '\ud310\uad50 \ub370\uc774\ud130\uc13c\ud130',
    clockIn: '06:45',
    clockOut: '16:00',
    manDays: 0.5,
    status: '\uc870\ud1f4',
    isClosed: true,
    monthTotalMan: 10.5,
    clockHistory: [
      { date: '2025-10-14', clockIn: '06:45', clockOut: '16:00', manDays: 0.5 },
      { date: '2025-10-13', clockIn: '-', clockOut: '-', manDays: 0 },
      { date: '2025-10-12', clockIn: '06:40', clockOut: '17:10', manDays: 1.0 },
    ],
  },
])

const filteredAttendance = computed(() => {
  let result = attendanceList.value
  if (filters.value.siteName) result = result.filter((a) => a.site.includes(filters.value.siteName))
  if (filters.value.affiliationType)
    result = result.filter((a) => a.affiliationType.includes(filters.value.affiliationType))
  if (filters.value.searchName)
    result = result.filter((a) => a.name.includes(filters.value.searchName))
  return result
})

const statCounts = computed(() => {
  const rows = filteredAttendance.value
  return {
    total: rows.length,
    working: rows.filter((r) => r.status.includes('\uc791\uc5c5 \uc911')).length,
    done: rows.filter((r) => r.status.includes('\ud1f4\uadfc \uc644\ub8cc')).length,
  }
})

const deleteAttendance = (id, event) => {
  event.stopPropagation()
  if (confirm(T.deleteConfirm)) {
    attendanceList.value = attendanceList.value.filter((a) => a.id !== id)
    alert(T.deleted)
  }
}

const showEditDrawer = ref(false)
const editForm = ref({
  id: null,
  affiliationType: '',
  clockIn: '',
  clockOut: '',
  manDays: '',
  reason: '',
})
const selectedWorkerName = ref('')
const selectedWorkerSite = ref('')

const openEditDrawer = (record) => {
  if (record.isClosed) {
    alert(T.closedWarn)
    return
  }
  selectedWorkerName.value = record.name
  selectedWorkerSite.value = record.site

  editForm.value = {
    id: record.id,
    affiliationType: record.affiliationType,
    clockIn: record.clockIn,
    clockOut: record.clockOut === '-' ? '' : record.clockOut,
    manDays: record.manDays,
    reason: '',
  }
  showEditDrawer.value = true
}

const saveEdit = () => {
  if (!editForm.value.reason.trim()) {
    alert(T.reasonRequired)
    return
  }
  const index = attendanceList.value.findIndex((a) => a.id === editForm.value.id)
  if (index !== -1) {
    const prev = attendanceList.value[index]
    attendanceList.value[index] = {
      ...prev,
      affiliationType: editForm.value.affiliationType,
      clockIn: editForm.value.clockIn,
      clockOut: editForm.value.clockOut || '-',
      manDays: Number(editForm.value.manDays),
      monthTotalMan: prev.monthTotalMan,
      clockHistory: prev.clockHistory,
    }
    alert(T.saved)
    showEditDrawer.value = false
  }
}

function goWorkerProfile(record, event) {
  event.stopPropagation()
  router.push({ name: 'siteWorkerProfile', params: { id: String(record.id) } })
}

const getStatusBadge = (status) => {
  if (status.includes('\ud1f4\uadfc')) return 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/80'
  if (status.includes('\uc791\uc5c5 \uc911')) return 'bg-amber-50 text-amber-800 ring-1 ring-amber-200/80'
  if (status.includes('\uc870\ud1f4') || status.includes('\uacb8\uadfc'))
    return 'bg-rose-50 text-rose-700 ring-1 ring-rose-200/80'
  return 'bg-slate-50 text-slate-600 ring-1 ring-slate-200/80'
}
</script>

<template>
  <div class="space-y-6 pb-10">
    <div
      v-if="!embed"
      class="relative overflow-hidden rounded-2xl border border-forena-100/90 bg-gradient-to-br from-white via-forena-50/50 to-flare-50/30 p-6 shadow-card"
    >
      <div
        class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-flare-400 via-forena-500 to-flare-500"
      />
      <div class="flex flex-wrap items-start gap-4">
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-flare-400 to-flare-600 text-white shadow-md"
        >
          <ScanLine class="h-5 w-5" />
        </span>
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-flare-600">{{ T.kicker }}</p>
          <h2 class="text-gradient-brand text-xl font-bold tracking-tight">{{ T.title }}</h2>
          <p class="mt-2 max-w-3xl text-sm leading-relaxed text-forena-700/80">{{ T.desc }}</p>
          <p class="mt-3 text-[11px] font-medium text-forena-400">{{ T.breadcrumb }}</p>
        </div>
      </div>
    </div>

    <div class="grid gap-4 sm:grid-cols-3">
      <article class="rounded-2xl border border-white/90 bg-white/90 p-5 shadow-card">
        <div class="flex items-center gap-2 text-sm font-semibold text-forena-900">
          <Users class="h-4 w-4 text-flare-600" />
          {{ T.statTotal }}
        </div>
        <p class="mt-3 text-3xl font-light tabular-nums text-forena-900">{{ statCounts.total }}</p>
        <p class="text-xs text-slate-500">{{ T.filterDate }} {{ T.statHint }}</p>
      </article>
      <article class="rounded-2xl border border-white/90 bg-white/90 p-5 shadow-card">
        <div class="flex items-center gap-2 text-sm font-semibold text-forena-900">
          <Clock class="h-4 w-4 text-amber-600" />
          {{ T.statWorking }}
        </div>
        <p class="mt-3 text-3xl font-light tabular-nums text-amber-800">{{ statCounts.working }}</p>
      </article>
      <article class="rounded-2xl border border-white/90 bg-white/90 p-5 shadow-card">
        <div class="flex items-center gap-2 text-sm font-semibold text-forena-900">
          <UserCheck class="h-4 w-4 text-emerald-600" />
          {{ T.statDone }}
        </div>
        <p class="mt-3 text-3xl font-light tabular-nums text-emerald-800">{{ statCounts.done }}</p>
      </article>
    </div>

    <div
      class="rounded-2xl border border-forena-100/90 bg-white/90 p-5 shadow-card backdrop-blur-sm"
    >
      <div class="flex flex-wrap items-end gap-4">
        <div>
          <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{ T.filterDate }}</label>
          <input
            v-model="filters.date"
            type="date"
            class="w-40 rounded-xl border border-forena-200 bg-white px-3 py-2.5 text-sm text-forena-900 outline-none transition focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
          />
        </div>
        <div>
          <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{ T.filterSite }}</label>
          <select
            v-model="filters.siteName"
            class="w-48 rounded-xl border border-forena-200 bg-white px-3 py-2.5 text-sm text-forena-900 outline-none transition focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
          >
            <option value="">{{ T.siteAll }}</option>
            <option v-for="opt in siteOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
          </select>
        </div>
        <div>
          <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{ T.filterAffil }}</label>
          <select
            v-model="filters.affiliationType"
            class="w-44 rounded-xl border border-forena-200 bg-white px-3 py-2.5 text-sm text-forena-900 outline-none transition focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
          >
            <option value="">{{ T.affilAll }}</option>
            <option v-for="opt in affiliationOptions" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>
        </div>
        <div class="relative min-w-[200px] flex-1">
          <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{ T.filterSearch }}</label>
          <Search
            class="pointer-events-none absolute bottom-2.5 left-3 h-4 w-4 text-flare-500/80"
            aria-hidden="true"
          />
          <input
            v-model="filters.searchName"
            type="text"
            :placeholder="T.filterSearchPh"
            class="w-full rounded-xl border border-forena-200 bg-white py-2.5 pr-4 pl-9 text-sm text-forena-900 outline-none transition placeholder:text-slate-400 focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
          />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 shadow-card"
    >
      <div class="overflow-x-auto">
        <table class="w-full min-w-[900px] text-left text-sm whitespace-nowrap">
          <thead
            class="border-b border-forena-100 bg-forena-50/60 text-[11px] font-bold uppercase tracking-wider text-forena-500"
          >
            <tr>
              <th class="px-6 py-4 font-semibold">{{ T.colContact }}</th>
              <th class="px-6 py-4 font-semibold">{{ T.colEmergency }}</th>
              <th class="px-6 py-4 font-semibold">{{ T.colAffil }}</th>
              <th class="px-6 py-4 font-semibold">{{ T.colTime }}</th>
              <th class="px-6 py-4 font-semibold">{{ T.colMan }}</th>
              <th class="px-6 py-4 text-center font-semibold">{{ T.colStatus }}</th>
              <th class="px-6 py-4 text-center font-semibold">{{ T.colDetail }}</th>
              <th class="px-6 py-4 text-center font-semibold">{{ T.colDel }}</th>
            </tr>
          </thead>
          <tbody class="text-forena-800">
            <tr v-if="filteredAttendance.length === 0">
              <td colspan="8" class="px-6 py-14 text-center text-sm text-slate-400">{{ T.empty }}</td>
            </tr>
            <tr
              v-else
              v-for="record in filteredAttendance"
              :key="record.id"
              class="cursor-pointer border-b border-forena-50 transition hover:bg-flare-50/40"
              @click="openEditDrawer(record)"
            >
              <td class="px-6 py-4">
                <div class="font-semibold text-forena-900">{{ record.name }}</div>
                <div class="text-[11px] text-slate-500">{{ record.phone }}</div>
              </td>
              <td class="px-6 py-4 text-xs font-medium text-rose-600/90">{{ record.emergency }}</td>
              <td class="px-6 py-4">
                <div class="text-xs font-semibold text-forena-800">{{ record.affiliationType }}</div>
                <div class="text-[11px] text-slate-500">{{ record.site }}</div>
              </td>
              <td class="px-6 py-4 font-mono text-xs">
                <span class="font-semibold text-flare-700">{{ record.clockIn }}</span>
                <span class="text-slate-400"> — </span>
                <span class="text-slate-600">{{ record.clockOut }}</span>
              </td>
              <td class="px-6 py-4 font-semibold tabular-nums text-forena-900">
                {{ record.manDays }} {{ T.manSuffix }}
              </td>
              <td class="px-6 py-4 text-center">
                <span
                  class="inline-flex rounded-lg px-2.5 py-1 text-[10px] font-bold"
                  :class="getStatusBadge(record.status)"
                  >{{ record.status }}</span
                >
                <span v-if="record.isClosed" class="mt-1 block text-[9px] font-bold text-slate-400">{{
                  T.closedTag
                }}</span>
              </td>
              <td class="px-6 py-4 text-center">
                <button
                  type="button"
                  class="inline-flex items-center gap-1.5 rounded-lg border border-forena-200 bg-white px-3 py-1.5 text-[11px] font-bold text-forena-700 shadow-sm transition hover:border-flare-300 hover:bg-flare-50/50"
                  :title="T.colDetail"
                  @click="(e) => goWorkerProfile(record, e)"
                >
                  <Eye class="h-3.5 w-3.5" />
                  {{ T.colDetail }}
                </button>
              </td>
              <td class="px-6 py-4 text-center">
                <button
                  type="button"
                  class="inline-flex rounded-lg p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                  :title="T.colDel"
                  @click="(e) => deleteAttendance(record.id, e)"
                >
                  <Trash2 class="h-4 w-4" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="showEditDrawer"
        class="fixed inset-0 z-50 flex justify-end bg-forena-900/20 backdrop-blur-[2px]"
        @click.self="showEditDrawer = false"
      >
        <aside
          class="flex h-full w-full max-w-md flex-col border-l border-forena-100 bg-white shadow-2xl animate-[slideIn_0.25s_ease-out]"
          @click.stop
        >
          <div
            class="flex items-center justify-between border-b border-forena-100 bg-forena-50/50 px-5 py-4"
          >
            <h2 class="text-lg font-bold text-forena-900">{{ T.drawerTitle }}</h2>
            <button
              type="button"
              class="rounded-lg border border-forena-200 bg-white p-2 text-forena-400 transition hover:text-forena-700"
              @click="showEditDrawer = false"
            >
              <X class="h-4 w-4" />
            </button>
          </div>

          <div class="flex-1 space-y-6 overflow-y-auto p-6 text-sm">
            <div class="rounded-xl border border-forena-100 bg-white p-4 shadow-sm">
              <p class="mb-1 text-[11px] font-bold uppercase tracking-wide text-forena-400">
                {{ T.drawerWorker }}
              </p>
              <p class="text-lg font-bold text-forena-900">
                {{ selectedWorkerName }}
                <span class="ml-1 text-xs font-normal text-slate-500">| {{ selectedWorkerSite }}</span>
              </p>
            </div>

            <div class="space-y-4">
              <div>
                <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{ T.affilChange }}</label>
                <select
                  v-model="editForm.affiliationType"
                  class="w-full rounded-xl border border-forena-200 bg-white px-3 py-2.5 outline-none focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
                >
                  <option v-for="opt in editAffiliationOptions" :key="opt.value" :value="opt.value">
                    {{ opt.label }}
                  </option>
                </select>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{ T.clockIn }}</label>
                  <input
                    v-model="editForm.clockIn"
                    type="time"
                    class="w-full rounded-xl border border-forena-200 px-3 py-2.5 outline-none focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
                  />
                </div>
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{ T.clockOut }}</label>
                  <input
                    v-model="editForm.clockOut"
                    type="time"
                    class="w-full rounded-xl border border-forena-200 px-3 py-2.5 outline-none focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
                  />
                </div>
              </div>

              <div>
                <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{ T.manDays }}</label>
                <input
                  v-model="editForm.manDays"
                  type="number"
                  step="0.5"
                  min="0"
                  class="w-full rounded-xl border border-forena-200 px-3 py-2.5 outline-none focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
                />
              </div>

              <div class="rounded-xl border border-rose-100 bg-rose-50/40 p-4">
                <h3 class="mb-2 flex items-center gap-2 text-[11px] font-bold text-rose-700">
                  <AlertTriangle class="h-3.5 w-3.5 shrink-0" />
                  {{ T.reasonTitle }}
                </h3>
                <textarea
                  v-model="editForm.reason"
                  rows="3"
                  :placeholder="T.reasonPh"
                  class="w-full resize-none rounded-lg border border-rose-200/80 bg-white p-3 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-400/15"
                />
              </div>
            </div>
          </div>

          <div class="flex shrink-0 justify-end gap-3 border-t border-forena-100 bg-forena-50/30 px-6 py-4">
            <button
              type="button"
              class="rounded-xl border border-forena-200 bg-white px-5 py-2.5 text-sm font-bold text-forena-600 transition hover:bg-forena-50"
              @click="showEditDrawer = false"
            >
              {{ T.cancel }}
            </button>
            <button
              type="button"
              class="rounded-xl bg-gradient-to-r from-forena-700 to-forena-900 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:from-forena-800 hover:to-forena-950"
              @click="saveEdit"
            >
              {{ T.save }}
            </button>
          </div>
        </aside>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
