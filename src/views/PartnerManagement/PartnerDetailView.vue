<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  ChevronLeft,
  Building2,
  Phone,
  FileText,
  Image as ImageIcon,
  Download,
  MapPin,
  Star,
} from 'lucide-vue-next'

const router = useRouter()

const partner = ref({
  name: '\ud0dc\uc591\uac74\uc124',
  repName: '\uae40\ud0dc\uc591',
  contact: '010-1111-2222',
  workersCount: 145,
  period: '2025.01.01 ~ 2025.12.31',
  status: '\uacc4\uc57d \uc720\uc9c0',
})

const workers = ref([
  {
    id: 1,
    name: '\uae40\ub3d9\uc11d',
    phone: '010-1234-5678',
    docStatus: '\uc644\ub8cc',
    status: '\ucd9c\uadfc \uc804',
  },
  {
    id: 2,
    name: '\uc774\ubaa9\uc218',
    phone: '010-9876-5432',
    docStatus: '\uc644\ub8cc',
    status: '\ucd9c\uadfc \uc644\ub8cc',
  },
  {
    id: 3,
    name: '\ubc15\uc9c0\ud6c8',
    phone: '010-2345-6789',
    docStatus: '\uc644\ub8cc',
    status: '\ucd9c\uadfc \uc644\ub8cc',
  },
  {
    id: 4,
    name: '\ucd5c\uc218\uc5f0',
    phone: '010-3456-7890',
    docStatus: '\uc9c4\ud589\uc911',
    status: '\ucd9c\uadfc \uc804',
  },
  {
    id: 5,
    name: '\uc815\ud574\uc131',
    phone: '010-4567-8901',
    docStatus: '\uc644\ub8cc',
    status: '\ucd9c\uadfc \uc644\ub8cc',
  },
  {
    id: 6,
    name: '\uc548\uc601\uc9c4',
    phone: '010-5678-9012',
    docStatus: '\uc644\ub8cc',
    status: '\ucd9c\uadfc \uc804',
  },
  {
    id: 7,
    name: '\uc870\ubbfc\uc7ac',
    phone: '010-6789-0123',
    docStatus: '\ub300\uae30',
    status: '\ucd9c\uadfc \uc804',
  },
  {
    id: 8,
    name: '\ud55c\uc9c0\uc6d0',
    phone: '010-7890-1234',
    docStatus: '\uc644\ub8cc',
    status: '\ucd9c\uadfc \uc644\ub8cc',
  },
  {
    id: 9,
    name: '\uc784\uc131\ud638',
    phone: '010-8901-2345',
    docStatus: '\uc644\ub8cc',
    status: '\ucd9c\uadfc \uc644\ub8cc',
  },
  {
    id: 10,
    name: '\uae40\ub098\uc5f0',
    phone: '010-9012-3456',
    docStatus: '\uc9c4\ud589\uc911',
    status: '\ucd9c\uadfc \uc804',
  },
])

const deployedSites = ref([
  {
    id: 1,
    name: 'A\uad6c\uc5ed \xb7 \uac15\ub0a8 \uc7ac\uac74\ucd95',
    current: 45,
    status: '\uc6b4\uc601 \uc911',
  },
  {
    id: 2,
    name: 'B\uad6c\uc5ed \xb7 \ud310\uad50 \ub370\uc774\ud130\uc13c\ud130',
    current: 20,
    status: '\uc6b4\uc601 \uc911',
  },
])

const contractFiles = ref([
  {
    id: 1,
    name: '2025\ub144\ub3c4_\ud558\ub3c4\uae09\uacc4\uc57d\uc11c.pdf',
    size: '2.4MB',
    date: '2025.01.05',
  },
  {
    id: 2,
    name: '\uc0ac\uc5c5\uc790\ub4f1\ub85d\uc99d_\uc0ac\ubcf8.jpg',
    size: '1.1MB',
    date: '2024.12.28',
  },
])

const evaluation = ref({
  grade: 'A',
  score: 92,
  lastDate: '2025.03.15',
  summary:
    '\ud488\uc9c8 \ubc0f \uc77c\uc815 \uc900\uc218\ub294 \uc6b0\uc218\ud558\ub098, \uc548\uc804 \uad50\uc721 \uc774\uc218 \uc720\ub3c4 \ubcf4\uc644\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.',
  items: [
    { label: '\ud488\uc9c8', score: 95 },
    { label: '\uc548\uc804', score: 88 },
    { label: '\uc77c\uc815', score: 91 },
    { label: '\uc18c\ud1b5', score: 94 },
  ],
})

const T = {
  kicker: '\ud611\ub825\uc0ac \uc0c1\uc138',
  badgeCustom: '\ub9de\ucda4 \ud611\ub825\uc0ac',
  summaryCard: '\uc694\uc57d',
  rep: '\ub300\ud45c\uc790',
  contact: '\uc5f0\ub77d\ucc98',
  workers: '\ub4f1\ub85d \uadfc\ub85c\uc790',
  contractState: '\uacc4\uc57d',
  period: '\uacc4\uc57d \uae30\uac04',
  contractDocs: '\uacc4\uc57d \uc11c\ub958',
  fileList: '\ucca8\ubd80 \ud30c\uc77c',
  workerList: '\uc18c\uc18d \uadfc\ub85c\uc790',
  workerTotal: '\ucd1d',
  colName: '\uc774\ub984',
  colPhone: '\uc5f0\ub77d\ucc98',
  colDoc: '\uad50\uc721/\uc11c\ub958',
  colStatus: '\uc0c1\ud0dc',
  deployed: '\ud22c\uc785 \uad6c\uc5ed',
  deployingLine1: '\ud604\uc7ac',
  deployingLine2: '\ubc30\uce58 \uc911',
  evalSection: '\ud611\ub825\uc0ac \ud3c9\uac00',
  evalGrade: '\ub4f1\uae09',
  evalScore: '\ucd1c\uc810',
  evalLast: '\ucd5c\uadfc \ud3c9\uac00',
  evalItems: '\ud56d\ubaa9',
  evalSummary: '\uc694\uc57d',
  person: '\uba85',
  dot: '\xb7',
}

const goBack = () => router.push('/hr/partners')

const statusBadgeClass = (s) => {
  if (s === '\uacc4\uc57d \uc720\uc9c0')
    return 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/80'
  if (s === '\uc815\uc9c0') return 'bg-amber-50 text-amber-800 ring-1 ring-amber-200/80'
  return 'bg-slate-100 text-slate-600 ring-1 ring-slate-200/80'
}

const workerStatusClass = (s) => {
  if (s.includes('\uc644\ub8cc')) return 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/70'
  return 'bg-slate-50 text-slate-600 ring-1 ring-slate-200/70'
}
</script>

<template>
  <div class="space-y-6 pb-10">
    <!-- Hero -->
    <div
      class="relative overflow-hidden rounded-2xl border border-forena-100/90 bg-gradient-to-br from-white via-forena-50/40 to-flare-50/20 shadow-card"
    >
      <div
        class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-flare-400 via-forena-500 to-flare-500"
      />
      <div class="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
        <div class="flex min-w-0 flex-1 items-start gap-3 sm:items-center">
          <button
            type="button"
            class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-forena-200/80 bg-white text-forena-700 shadow-sm transition hover:bg-forena-50 sm:mt-0"
            @click="goBack"
          >
            <ChevronLeft class="h-5 w-5" />
          </button>
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-flare-400 to-forena-700 text-lg font-bold text-white shadow-md"
          >
            {{ partner.name.charAt(0) }}
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-[10px] font-bold uppercase tracking-[0.12em] text-flare-600">
              {{ T.kicker }}
            </p>
            <div class="mt-1 flex flex-wrap items-center gap-2">
              <h1
                class="flex min-w-0 items-center gap-2 text-lg font-bold tracking-tight text-forena-900 sm:text-xl"
              >
                <Building2 class="h-5 w-5 shrink-0 text-flare-600 sm:h-6 sm:w-6" />
                <span class="truncate">{{ partner.name }}</span>
              </h1>
              <span
                class="inline-flex shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold"
                :class="statusBadgeClass(partner.status)"
              >
                {{ partner.status }}
              </span>
            </div>
            <p class="mt-1 text-[11px] text-slate-500">{{ T.badgeCustom }}</p>
          </div>
        </div>
        <div
          class="flex shrink-0 flex-wrap gap-2 border-t border-forena-100/80 pt-4 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0"
        >
          <div
            class="rounded-xl border border-forena-100 bg-white/80 px-3 py-2 text-center shadow-sm sm:min-w-[5.5rem]"
          >
            <p class="text-[10px] font-bold uppercase tracking-wide text-forena-400">
              {{ T.workers }}
            </p>
            <p class="mt-0.5 text-lg font-bold tabular-nums text-forena-900">
              {{ partner.workersCount }}{{ T.person }}
            </p>
          </div>
          <div
            class="min-w-0 flex-1 rounded-xl border border-forena-100 bg-white/80 px-3 py-2 shadow-sm sm:min-w-[10rem] sm:flex-initial"
          >
            <p class="text-[10px] font-bold uppercase tracking-wide text-forena-400">
              {{ T.period }}
            </p>
            <p class="mt-0.5 truncate text-sm font-semibold text-forena-800">
              {{ partner.period }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main + sidebar -->
    <div class="grid gap-6 lg:grid-cols-12 lg:items-start">
      <div class="min-w-0 lg:col-span-7 xl:col-span-8">
        <div
          class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 shadow-card"
        >
          <div
            class="flex flex-wrap items-center justify-between gap-2 border-b border-forena-100 bg-forena-50/50 px-4 py-3 sm:px-5"
          >
            <h2 class="text-sm font-bold text-forena-900">
              {{ T.workerList }}
              <span class="font-normal text-slate-500"
                >({{ T.workerTotal }} {{ workers.length }}{{ T.person }})</span
              >
            </h2>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full min-w-[420px] text-left text-sm">
              <thead
                class="border-b border-forena-100 bg-white text-[11px] font-bold uppercase tracking-wide text-forena-500"
              >
                <tr>
                  <th class="px-4 py-3 font-semibold sm:px-5">{{ T.colName }}</th>
                  <th class="px-4 py-3 font-semibold sm:px-5">{{ T.colPhone }}</th>
                  <th class="px-4 py-3 text-center font-semibold sm:px-5">{{ T.colDoc }}</th>
                  <th class="px-4 py-3 text-center font-semibold sm:px-5">{{ T.colStatus }}</th>
                </tr>
              </thead>
              <tbody class="text-forena-800">
                <tr
                  v-for="w in workers"
                  :key="w.id"
                  class="border-b border-forena-50 transition hover:bg-flare-50/20 last:border-0"
                >
                  <td class="px-4 py-3.5 font-semibold sm:px-5">{{ w.name }}</td>
                  <td class="px-4 py-3.5 tabular-nums text-slate-600 sm:px-5">{{ w.phone }}</td>
                  <td class="px-4 py-3.5 text-center text-xs font-medium text-emerald-700 sm:px-5">
                    {{ w.docStatus }}
                  </td>
                  <td class="px-4 py-3.5 text-center sm:px-5">
                    <span
                      class="inline-flex rounded-lg px-2 py-1 text-[10px] font-bold"
                      :class="workerStatusClass(w.status)"
                      >{{ w.status }}</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="flex flex-col gap-5 lg:col-span-5 xl:col-span-4">
        <div
          class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 p-4 shadow-card sm:p-5"
        >
          <h3 class="text-xs font-bold uppercase tracking-wide text-forena-500">
            {{ T.summaryCard }}
          </h3>
          <dl class="mt-3 space-y-3 text-sm">
            <div class="flex justify-between gap-3">
              <dt class="text-slate-500">{{ T.rep }}</dt>
              <dd class="font-semibold text-forena-900">{{ partner.repName }}</dd>
            </div>
            <div class="flex justify-between gap-3">
              <dt class="flex items-center gap-1 text-slate-500">
                <Phone class="h-3.5 w-3.5 shrink-0 opacity-70" /> {{ T.contact }}
              </dt>
              <dd class="font-semibold tabular-nums text-forena-900">{{ partner.contact }}</dd>
            </div>
            <div class="flex justify-between gap-3 border-t border-forena-50 pt-3">
              <dt class="text-slate-500">{{ T.contractState }}</dt>
              <dd>
                <span
                  class="inline-flex rounded-lg px-2 py-0.5 text-[10px] font-bold"
                  :class="statusBadgeClass(partner.status)"
                >
                  {{ partner.status }}
                </span>
              </dd>
            </div>
          </dl>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div
            class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 p-4 shadow-card sm:p-5"
          >
            <h3 class="flex items-center gap-2 text-sm font-bold text-forena-900">
              <MapPin class="h-4 w-4 shrink-0 text-flare-600" />
              {{ T.deployed }}
            </h3>
            <ul class="mt-3 space-y-2">
              <li
                v-for="site in deployedSites"
                :key="site.id"
                class="rounded-xl border border-forena-100 bg-forena-50/40 p-2.5"
              >
                <p class="text-xs font-bold leading-snug text-forena-900">{{ site.name }}</p>
                <p class="mt-1 text-[10px] text-slate-600">
                  {{ T.deployingLine1 }} {{ site.current }}{{ T.person }} {{ T.deployingLine2 }}
                </p>
                <span
                  class="mt-1.5 inline-flex rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700 ring-1 ring-emerald-200/60"
                  >{{ site.status }}</span
                >
              </li>
            </ul>
          </div>

          <div
            class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 p-4 shadow-card sm:p-5"
          >
            <h3 class="flex items-center gap-2 text-sm font-bold text-forena-900">
              <Star class="h-4 w-4 shrink-0 text-amber-500" />
              {{ T.evalSection }}
            </h3>
            <div
              class="mt-3 flex items-start justify-between gap-3 rounded-xl bg-gradient-to-br from-amber-50/80 to-flare-50/40 px-3 py-2.5 ring-1 ring-amber-100/60"
            >
              <div>
                <p class="text-[10px] font-bold text-forena-500">{{ T.evalGrade }}</p>
                <p class="text-2xl font-bold tabular-nums text-forena-900">
                  {{ evaluation.grade }}
                </p>
              </div>
              <div class="text-right">
                <p class="text-[10px] font-bold text-forena-500">{{ T.evalScore }}</p>
                <p class="text-lg font-bold tabular-nums text-flare-700">
                  {{ evaluation.score }}점
                </p>
              </div>
            </div>
            <p class="mt-2 text-[10px] text-slate-500">
              {{ T.evalLast }} · {{ evaluation.lastDate }}
            </p>
            <p class="mt-3 text-[10px] font-bold uppercase tracking-wide text-forena-500">
              {{ T.evalItems }}
            </p>
            <div class="mt-2 grid grid-cols-2 gap-1.5">
              <div
                v-for="(it, idx) in evaluation.items"
                :key="idx"
                class="flex items-center justify-between gap-1 rounded-lg border border-forena-100 bg-forena-50/30 px-2 py-1.5 text-[11px]"
              >
                <span class="truncate text-forena-700">{{ it.label }}</span>
                <span class="shrink-0 font-bold tabular-nums text-forena-900">{{ it.score }}</span>
              </div>
            </div>
            <p class="mt-3 text-[10px] font-bold uppercase tracking-wide text-forena-500">
              {{ T.evalSummary }}
            </p>
            <p class="mt-1 text-xs leading-relaxed text-slate-600">{{ evaluation.summary }}</p>
          </div>
        </div>

        <div
          class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 p-4 shadow-card sm:p-5"
        >
          <h3 class="flex items-center gap-2 text-sm font-bold text-forena-900">
            <FileText class="h-4 w-4 text-flare-600" />
            {{ T.contractDocs }}
          </h3>
          <p class="mt-1 text-[10px] text-slate-500">{{ T.fileList }}</p>
          <ul class="mt-3 space-y-2">
            <li
              v-for="file in contractFiles"
              :key="file.id"
              class="flex items-center justify-between gap-2 rounded-xl border border-forena-100 bg-forena-50/30 px-3 py-2"
            >
              <div class="flex min-w-0 items-center gap-2">
                <FileText v-if="file.name.includes('pdf')" class="h-4 w-4 shrink-0 text-rose-500" />
                <ImageIcon v-else class="h-4 w-4 shrink-0 text-sky-600" />
                <div class="min-w-0">
                  <p class="truncate text-xs font-semibold text-forena-900">{{ file.name }}</p>
                  <p class="text-[10px] text-slate-500">
                    {{ file.size }} {{ T.dot }} {{ file.date }}
                  </p>
                </div>
              </div>
              <button
                type="button"
                class="shrink-0 rounded-lg p-1.5 text-forena-500 transition hover:bg-white hover:text-forena-800"
              >
                <Download class="h-4 w-4" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
