<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  UserPlus,
  Search,
  FileSpreadsheet,
  Plus,
  X,
  UploadCloud,
  AlertTriangle,
  Save,
  Eye,
} from 'lucide-vue-next'

const router = useRouter()

const T = {
  kicker: '\uc778\uc0ac',
  pageTitle: '\uc791\uc5c5\uc790 \uc778\ub825 \uc628\ubcf4\ub529',
  heroDesc:
    '\uc2e0\uaddc \uc778\ub825 \uc628\ubcf4\ub529, \uc548\uc804\uad50\uc721 \xb7 \ud544\uc218 \uc11c\ub958, \ud22c\uc785 \uac00\ub2a5 \uc5ec\ubd80\ub97c \ud55c \ud654\uba74\uc5d0\uc11c \uad00\ub9ac\ud569\ub2c8\ub2e4.',
  searchPh: '\uc774\ub984, \uc5f0\ub77d\ucc98, \uc9c1\uc885 \uac80\uc0c9',
  partnerAll: '\uc804\uccb4 \ud611\ub825\uc0ac',
  excelBulk: '\uc5d1\uc140 \uc77c\uad04 \ub4f1\ub85d',
  newWorker: '\uc2e0\uaddc \uc791\uc5c5\uc790 \ub4f1\ub85d',
  tabAll: '\uc804\uccb4',
  tabDeploy: '\ud22c\uc785 \uac00\ub2a5',
  tabReview: '\uac80\ud1a0 \uc911',
  tabNoDoc: '\uc11c\ub958 \ubbf8\uc81c\ucd9c',
  tabLimit: '\ud22c\uc785 \uc81c\ud55c',
  colName: '\uc774\ub984 / \uc5f0\ub77d\ucc98',
  colAffil: '\uc18c\uc18d / \uc9c1\uc885',
  colSafety: '\uc548\uc804\uad50\uc721',
  colDocs: '\ud544\uc218 \uc11c\ub958',
  colStatus: '\ud604\uc7ac \uc0c1\ud0dc',
  colDetail: '\uc0c1\uc138\ubcf4\uae30',
  empty: '\uc870\uac74\uc5d0 \ub9de\ub294 \uc791\uc5c5\uc790\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.',
  excelSoon: '\uc5d1\uc140 \uc77c\uad04 \ub4f1\ub85d \uae30\ub2a5\uc744 \uc900\ube44 \uc911\uc785\ub2c8\ub2e4.',
  modalTitle: '\uc2e0\uaddc \uc791\uc5c5\uc790 \uc628\ubcf4\ub529 \ub4f1\ub85d',
  secBasic: '1. \uae30\ubcf8 \uc778\uc801 \uc0ac\ud56d',
  secAffil: '2. \uc18c\uc18d \ubc0f \uc11c\ub958 \uc81c\ucd9c',
  labelName: '\uc774\ub984',
  phName: '\uc774\ub984 \uc785\ub825',
  labelBlood: '\ud608\uc561\ud615',
  labelPhone: '\ubcf8\uc778 \uc5f0\ub77d\ucc98',
  phPhone: '010-0000-0000',
  labelEmergency: '\ube44\uc0c1 \uc5f0\ub77d\ub9dd',
  phEmergency: '\uac00\uc871 \ub4f1 \ube44\uc0c1\uc5f0\ub77d\ucc98',
  labelPartner: '\uc18c\uc18d \ud611\ub825\uc0ac',
  phPartner: '\uc120\ud0dd (\ub610\ub294 \uc9c1\uc601)',
  labelJob: '\ub2f4\ub2f9 \uacf5\uc885/\uc9c1\uc885',
  phJob: '\uc608: \ud615\ud2c0, \ubcf4\ud1b5\uc778\ubd80',
  labelUpload: '\uc548\uc804\uad50\uc721 \uc774\uc218 \ubc0f \uc2e0\ubd84\uc99d (\ud544\uc218 \uc11c\ub958)',
  uploadHint: '\ud074\ub9ad\ud558\uac70\ub098 \ud30c\uc77c\uc744 \ub4dc\ub798\uadf8\ud558\uc5ec \uc5c5\ub85c\ub4dc',
  uploadFormats: 'PDF, JPG, PNG \ud615\uc2dd \uc9c0\uc6d0 (\ucd5c\ub300 10MB)',
  chkEdu: '\uae30\ucd08\uc548\uc804\ubcf4\uac74\uad50\uc721 \uc774\uc218 \uc5ec\ubd80\ub97c \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4.',
  cancel: '\ucde8\uc18c',
  submit: '\ub4f1\ub85d \ubc0f \uc11c\ub958 \uac80\ud1a0 \uc694\uccad',
  alertRequired: '\ud544\uc218 \ud56d\ubaa9\uc744 \ubaa8\ub450 \uc785\ub825\ud558\uace0, \uad50\uc721 \uc774\uc218 \ud655\uc778\uc5d0 \uccb4\ud06c\ud574\uc8fc\uc138\uc694.',
  alertOk: '\uc628\ubcf4\ub529 \ub4f1\ub85d \uc694\uccad\uc774 \uc811\uc218\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uac80\ud1a0 \uc911 \uc0c1\ud0dc\ub85c \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
}

const partnerFilterOptions = [
  { value: '', label: T.partnerAll },
  { value: '\ud0dc\uc591\uac74\uc124', label: '\ud0dc\uc591\uac74\uc124' },
  { value: '\uc6b0\uc8fc\uc0b0\uc5c5', label: '\uc6b0\uc8fc\uc0b0\uc5c5' },
  { value: '\uac1c\uc778', label: '\uac1c\uc778' },
]

const bloodOptions = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

const searchQuery = ref('')
const partnerFilter = ref('')
const statusTab = ref('all')

const workers = ref([
  {
    id: 1,
    name: '\uae40\ub3d9\uc11d',
    phone: '010-1234-5678',
    company: '\ud0dc\uc591\uac74\uc124',
    job: '\ud615\ud2c0\ubaa9\uc218',
    safety: { text: '\uc774\uc218\uc644\ub8cc', tone: 'success' },
    docs: { text: '\uc644\ub8cc', tone: 'neutral' },
    status: { text: '\ud22c\uc785 \uac00\ub2a5', tone: 'success' },
    statusKey: 'deployable',
  },
  {
    id: 2,
    name: '\uc774\ub9cc\uc218',
    phone: '010-9876-5432',
    company: '\uc6b0\uc8fc\uc0b0\uc5c5',
    job: '\ucca0\uadfc\uacf5',
    safety: { text: '\ubbf8\uc774\uc218', tone: 'danger' },
    docs: { text: '\uac80\ud1a0 \uc911', tone: 'warning' },
    status: { text: '\uac80\ud1a0 \uc911', tone: 'info' },
    statusKey: 'review',
  },
  {
    id: 3,
    name: '\ubc15\uc9c0\ud6c8',
    phone: '010-5555-4444',
    company: '\uac1c\uc778',
    job: '\ubcf4\ud1b5\uc778\ubd80',
    safety: { text: '\uc774\uc218\uc644\ub8cc', tone: 'success' },
    docs: { text: '\ubbf8\uc81c\ucd9c', tone: 'warning' },
    status: { text: '\uc11c\ub958 \ubbf8\uc81c\ucd9c', tone: 'warning' },
    statusKey: 'nodoc',
  },
  {
    id: 4,
    name: '\ucd5c\uc6a9\ud638',
    phone: '010-1111-2222',
    company: '\ud0dc\uc591\uac74\uc124',
    job: '\ube44\uacc4\uacf5',
    safety: { text: '\uc774\uc218\uc644\ub8cc', tone: 'success' },
    docs: { text: '\uc644\ub8cc', tone: 'neutral' },
    status: { text: '\ud22c\uc785 \uc81c\ud55c', tone: 'danger' },
    statusKey: 'limit',
  },
])

const filteredWorkers = computed(() => {
  let list = workers.value
  if (partnerFilter.value) {
    list = list.filter((w) => w.company === partnerFilter.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim()
    const qn = q.replace(/-/g, '')
    list = list.filter(
      (w) =>
        w.name.includes(q) ||
        w.phone.replace(/-/g, '').includes(qn) ||
        w.job.includes(q) ||
        w.company.includes(q),
    )
  }
  if (statusTab.value === 'deployable') list = list.filter((w) => w.statusKey === 'deployable')
  if (statusTab.value === 'review') list = list.filter((w) => w.statusKey === 'review')
  if (statusTab.value === 'nodoc') list = list.filter((w) => w.statusKey === 'nodoc')
  if (statusTab.value === 'limit') list = list.filter((w) => w.statusKey === 'limit')
  return list
})

const tabCounts = computed(() => {
  const base = workers.value.filter((w) => {
    if (partnerFilter.value && w.company !== partnerFilter.value) return false
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.trim()
      const qn = q.replace(/-/g, '')
      if (
        !w.name.includes(q) &&
        !w.phone.replace(/-/g, '').includes(qn) &&
        !w.job.includes(q) &&
        !w.company.includes(q)
      ) {
        return false
      }
    }
    return true
  })
  return {
    all: base.length,
    deployable: base.filter((w) => w.statusKey === 'deployable').length,
    review: base.filter((w) => w.statusKey === 'review').length,
    nodoc: base.filter((w) => w.statusKey === 'nodoc').length,
    limit: base.filter((w) => w.statusKey === 'limit').length,
  }
})

const statusTabs = computed(() => [
  { key: 'all', label: `${T.tabAll} (${tabCounts.value.all})` },
  { key: 'deployable', label: `${T.tabDeploy} (${tabCounts.value.deployable})` },
  { key: 'review', label: `${T.tabReview} (${tabCounts.value.review})` },
  { key: 'nodoc', label: `${T.tabNoDoc} (${tabCounts.value.nodoc})` },
  { key: 'limit', label: `${T.tabLimit} (${tabCounts.value.limit})` },
])

function badgeToneClass(tone) {
  if (tone === 'success') return 'bg-emerald-50 text-emerald-800 ring-emerald-200/80'
  if (tone === 'danger') return 'bg-rose-50 text-rose-800 ring-rose-200/80'
  if (tone === 'warning') return 'bg-amber-50 text-amber-900 ring-amber-200/80'
  if (tone === 'info') return 'bg-sky-50 text-sky-800 ring-sky-200/80'
  return 'bg-slate-100 text-slate-700 ring-slate-200/80'
}

function initialFromName(name) {
  return name ? name.charAt(0) : '?'
}

function onExcelBulk() {
  window.alert(T.excelSoon)
}

const showOnboardModal = ref(false)
const onboardForm = ref({
  name: '',
  bloodType: 'A+',
  phone: '',
  emergency: '',
  partner: '',
  job: '',
  confirmEducation: false,
})
const onboardFileName = ref('')

function openOnboardModal() {
  showOnboardModal.value = true
  onboardFileName.value = ''
}

function closeOnboardModal() {
  showOnboardModal.value = false
}

function resetOnboardForm() {
  onboardForm.value = {
    name: '',
    bloodType: 'A+',
    phone: '',
    emergency: '',
    partner: '',
    job: '',
    confirmEducation: false,
  }
  onboardFileName.value = ''
}

function onOnboardFileChange(e) {
  const f = e.target.files?.[0]
  onboardFileName.value = f ? f.name : ''
}

function goWorkerProfile(w, event) {
  event.stopPropagation()
  router.push({ name: 'siteWorkerProfile', params: { id: String(w.id) } })
}

function submitOnboard() {
  const f = onboardForm.value
  if (!f.name.trim() || !f.phone.trim() || !f.emergency.trim() || !f.partner || !f.job.trim()) {
    window.alert(T.alertRequired)
    return
  }
  if (!f.confirmEducation) {
    window.alert(T.alertRequired)
    return
  }
  const companyLabel =
    f.partner === 'direct'
      ? '\uc9c1\uc601'
      : partnerFilterOptions.find((p) => p.value === f.partner)?.label ?? f.partner
  const nextId = Math.max(0, ...workers.value.map((w) => w.id)) + 1
  workers.value = [
    ...workers.value,
    {
      id: nextId,
      name: f.name.trim(),
      phone: f.phone.trim(),
      company: companyLabel,
      job: f.job.trim(),
      safety: { text: '\uc774\uc218\uc644\ub8cc', tone: 'success' },
      docs: { text: '\uac80\ud1a0 \uc911', tone: 'warning' },
      status: { text: '\uac80\ud1a0 \uc911', tone: 'info' },
      statusKey: 'review',
    },
  ]
  window.alert(T.alertOk)
  closeOnboardModal()
  resetOnboardForm()
}
</script>

<template>
  <div class="space-y-6 pb-10">
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
            <UserPlus class="h-5 w-5" />
          </span>
          <div>
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-flare-600">{{ T.kicker }}</p>
            <h1 class="text-xl font-bold tracking-tight text-forena-900">{{ T.pageTitle }}</h1>
            <p class="mt-2 max-w-3xl text-sm leading-relaxed text-forena-700/80">{{ T.heroDesc }}</p>
          </div>
        </div>
        <div
          class="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[320px] lg:max-w-xl lg:flex-1 lg:flex-row lg:flex-wrap lg:items-center lg:justify-end"
        >
          <div class="relative min-w-0 flex-1 lg:min-w-[200px]">
            <Search
              class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-flare-500/80"
            />
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="T.searchPh"
              class="w-full rounded-xl border border-forena-200 bg-white py-2.5 pr-4 pl-9 text-sm text-forena-900 outline-none transition placeholder:text-slate-400 focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
            />
          </div>
          <select
            v-model="partnerFilter"
            class="w-full shrink-0 rounded-xl border border-forena-200 bg-white px-3 py-2.5 text-sm font-semibold text-forena-900 lg:w-40"
          >
            <option v-for="opt in partnerFilterOptions" :key="opt.value || 'all'" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>
          <div class="flex flex-wrap gap-2">
            <button
              type="button"
              class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:from-emerald-700 hover:to-emerald-800 sm:flex-initial"
              @click="onExcelBulk"
            >
              <FileSpreadsheet class="h-4 w-4" />
              {{ T.excelBulk }}
            </button>
            <button
              type="button"
              class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-forena-800 bg-forena-900 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-forena-800 sm:flex-initial"
              @click="openOnboardModal"
            >
              <Plus class="h-4 w-4" />
              {{ T.newWorker }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 shadow-card"
    >
      <div class="border-b border-forena-100 bg-forena-50/40 px-4 py-3 sm:px-5">
        <div
          class="flex flex-wrap gap-1 rounded-xl bg-forena-100/50 p-1 ring-1 ring-forena-200/60"
          role="tablist"
        >
          <button
            v-for="tab in statusTabs"
            :key="tab.key"
            type="button"
            role="tab"
            :aria-selected="statusTab === tab.key"
            class="min-w-0 shrink-0 rounded-lg px-3 py-2 text-center text-xs font-semibold transition sm:px-4 sm:text-sm"
            :class="
              statusTab === tab.key
                ? 'bg-white text-forena-900 shadow-sm ring-1 ring-forena-200/80'
                : 'text-slate-600 hover:bg-white/70 hover:text-forena-900'
            "
            @click="statusTab = tab.key"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full min-w-[900px] text-left text-sm">
          <thead
            class="border-b border-forena-100 bg-forena-50/60 text-[11px] font-bold uppercase tracking-wider text-forena-500"
          >
            <tr>
              <th class="px-5 py-3.5 font-semibold whitespace-nowrap">{{ T.colName }}</th>
              <th class="px-5 py-3.5 font-semibold whitespace-nowrap">{{ T.colAffil }}</th>
              <th class="px-5 py-3.5 text-center font-semibold whitespace-nowrap">{{ T.colSafety }}</th>
              <th class="px-5 py-3.5 text-center font-semibold whitespace-nowrap">{{ T.colDocs }}</th>
              <th class="px-5 py-3.5 text-center font-semibold whitespace-nowrap">{{ T.colStatus }}</th>
              <th class="px-5 py-3.5 text-center font-semibold whitespace-nowrap">{{ T.colDetail }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-forena-50 text-forena-800">
            <tr v-if="filteredWorkers.length === 0">
              <td colspan="6" class="px-5 py-14 text-center text-sm text-slate-400">{{ T.empty }}</td>
            </tr>
            <tr
              v-for="w in filteredWorkers"
              :key="w.id"
              class="transition hover:bg-flare-50/40"
            >
              <td class="px-5 py-4 whitespace-nowrap">
                <div class="flex items-center gap-3">
                  <span
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forena-600 to-forena-800 text-sm font-bold text-white shadow-sm"
                  >
                    {{ initialFromName(w.name) }}
                  </span>
                  <div>
                    <p class="font-semibold text-forena-900">{{ w.name }}</p>
                    <p class="text-[11px] text-slate-500">{{ w.phone }}</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-4 whitespace-nowrap">
                <p class="font-medium text-forena-900">{{ w.company }}</p>
                <p class="text-xs font-semibold text-flare-700">{{ w.job }}</p>
              </td>
              <td class="px-5 py-4 text-center whitespace-nowrap">
                <span
                  class="inline-flex rounded-lg px-2.5 py-1 text-[10px] font-bold ring-1"
                  :class="badgeToneClass(w.safety.tone)"
                >
                  {{ w.safety.text }}
                </span>
              </td>
              <td class="px-5 py-4 text-center whitespace-nowrap">
                <span
                  class="inline-flex rounded-lg px-2.5 py-1 text-[10px] font-bold ring-1"
                  :class="badgeToneClass(w.docs.tone)"
                >
                  {{ w.docs.text }}
                </span>
              </td>
              <td class="px-5 py-4 text-center whitespace-nowrap">
                <span
                  class="inline-flex rounded-lg px-2.5 py-1 text-[10px] font-bold ring-1"
                  :class="badgeToneClass(w.status.tone)"
                >
                  {{ w.status.text }}
                </span>
              </td>
              <td class="px-5 py-4 text-center whitespace-nowrap">
                <button
                  type="button"
                  class="inline-flex items-center gap-1.5 rounded-lg border border-forena-200 bg-white px-3 py-1.5 text-[11px] font-bold text-forena-700 shadow-sm transition hover:border-flare-300 hover:bg-flare-50/50"
                  :title="T.colDetail"
                  @click="(e) => goWorkerProfile(w, e)"
                >
                  <Eye class="h-3.5 w-3.5" />
                  {{ T.colDetail }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="showOnboardModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-forena-900/40 p-4 backdrop-blur-[2px]"
        @click.self="closeOnboardModal"
      >
        <div
          class="flex max-h-[min(92vh,880px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-forena-100 bg-white shadow-2xl"
          @click.stop
        >
          <div
            class="flex shrink-0 items-center justify-between border-b border-forena-100 bg-forena-50/50 px-5 py-4"
          >
            <h2 class="text-base font-bold text-forena-900 sm:text-lg">{{ T.modalTitle }}</h2>
            <button
              type="button"
              class="rounded-xl border border-forena-200 bg-white p-2 text-forena-500 transition hover:bg-forena-50 hover:text-forena-800"
              @click="closeOnboardModal"
            >
              <X class="h-5 w-5" />
            </button>
          </div>

          <div class="scrollbar-hide min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
            <div class="grid gap-8 md:grid-cols-2">
              <div class="space-y-4">
                <h3 class="text-xs font-bold uppercase tracking-wide text-forena-500">{{ T.secBasic }}</h3>
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-600">{{ T.labelName }}</label>
                  <input
                    v-model="onboardForm.name"
                    type="text"
                    class="w-full rounded-xl border border-forena-200 bg-forena-50/30 px-3 py-2.5 text-sm text-forena-900 outline-none transition focus:border-flare-400 focus:bg-white focus:ring-2 focus:ring-flare-400/20"
                    :placeholder="T.phName"
                  />
                </div>
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-600">{{ T.labelBlood }}</label>
                  <select
                    v-model="onboardForm.bloodType"
                    class="w-full rounded-xl border border-forena-200 bg-forena-50/30 px-3 py-2.5 text-sm font-semibold text-forena-900 outline-none focus:border-flare-400 focus:bg-white focus:ring-2 focus:ring-flare-400/20"
                  >
                    <option v-for="b in bloodOptions" :key="b" :value="b">{{ b }}</option>
                  </select>
                </div>
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-600">{{ T.labelPhone }}</label>
                  <input
                    v-model="onboardForm.phone"
                    type="tel"
                    class="w-full rounded-xl border border-forena-200 bg-forena-50/30 px-3 py-2.5 text-sm text-forena-900 outline-none transition focus:border-flare-400 focus:bg-white focus:ring-2 focus:ring-flare-400/20"
                    :placeholder="T.phPhone"
                  />
                </div>
                <div>
                  <label class="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold text-forena-600">
                    <AlertTriangle class="h-3.5 w-3.5 text-rose-500" />
                    {{ T.labelEmergency }}
                  </label>
                  <input
                    v-model="onboardForm.emergency"
                    type="tel"
                    class="w-full rounded-xl border border-forena-200 bg-forena-50/30 px-3 py-2.5 text-sm text-forena-900 outline-none transition focus:border-flare-400 focus:bg-white focus:ring-2 focus:ring-flare-400/20"
                    :placeholder="T.phEmergency"
                  />
                </div>
              </div>

              <div class="space-y-4">
                <h3 class="text-xs font-bold uppercase tracking-wide text-forena-500">{{ T.secAffil }}</h3>
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-600">{{ T.labelPartner }}</label>
                  <select
                    v-model="onboardForm.partner"
                    class="w-full rounded-xl border border-forena-200 bg-forena-50/30 px-3 py-2.5 text-sm font-semibold text-forena-900 outline-none focus:border-flare-400 focus:bg-white focus:ring-2 focus:ring-flare-400/20"
                  >
                    <option value="">{{ T.phPartner }}</option>
                    <option value="\ud0dc\uc591\uac74\uc124">\ud0dc\uc591\uac74\uc124</option>
                    <option value="\uc6b0\uc8fc\uc0b0\uc5c5">\uc6b0\uc8fc\uc0b0\uc5c5</option>
                    <option value="\uac1c\uc778">\uac1c\uc778</option>
                    <option value="direct">\uc9c1\uc601</option>
                  </select>
                </div>
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-600">{{ T.labelJob }}</label>
                  <input
                    v-model="onboardForm.job"
                    type="text"
                    class="w-full rounded-xl border border-forena-200 bg-forena-50/30 px-3 py-2.5 text-sm text-forena-900 outline-none transition focus:border-flare-400 focus:bg-white focus:ring-2 focus:ring-flare-400/20"
                    :placeholder="T.phJob"
                  />
                </div>
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-600">{{ T.labelUpload }}</label>
                  <label
                    class="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-flare-300/80 bg-flare-50/40 px-4 py-8 transition hover:border-flare-500 hover:bg-flare-50/70"
                  >
                    <UploadCloud class="h-8 w-8 text-flare-600" />
                    <span class="text-center text-xs font-semibold text-forena-800">{{ T.uploadHint }}</span>
                    <span class="text-[10px] text-slate-500">{{ T.uploadFormats }}</span>
                    <span v-if="onboardFileName" class="text-[10px] font-medium text-flare-700">{{
                      onboardFileName
                    }}</span>
                    <input type="file" class="sr-only" accept=".pdf,.jpg,.jpeg,.png" @change="onOnboardFileChange" />
                  </label>
                </div>
                <label
                  class="flex cursor-pointer items-start gap-3 rounded-xl border border-forena-100 bg-white p-4 shadow-sm"
                >
                  <input
                    v-model="onboardForm.confirmEducation"
                    type="checkbox"
                    class="mt-0.5 h-4 w-4 shrink-0 rounded border-forena-300 text-flare-600 focus:ring-flare-500"
                  />
                  <span class="text-xs leading-relaxed text-forena-800">{{ T.chkEdu }}</span>
                </label>
              </div>
            </div>
          </div>

          <div
            class="flex shrink-0 flex-wrap items-center justify-end gap-2 border-t border-forena-100 bg-forena-50/30 px-5 py-4"
          >
            <button
              type="button"
              class="rounded-xl px-4 py-2.5 text-sm font-bold text-forena-600 transition hover:bg-forena-100"
              @click="closeOnboardModal"
            >
              {{ T.cancel }}
            </button>
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-flare-500 to-forena-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:from-flare-600 hover:to-forena-700"
              @click="submitOnboard"
            >
              <Save class="h-4 w-4" />
              {{ T.submit }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
