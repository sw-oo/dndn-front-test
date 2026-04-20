<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  Handshake,
  Search,
  Download,
  Plus,
  X,
  FileText,
  Loader2,
  Building2,
  AlertTriangle,
  CircleCheck,
} from 'lucide-vue-next'

const router = useRouter()

const T = {
  kicker: '\ud611\ub825 \ub124\ud2b8\uc6cc\ud06c',
  title: '\ud611\ub825\uc0ac \uad00\ub9ac',
  desc: '\ud611\ub825\uc0ac \uc815\ubcf4, \uacc4\uc57d \uae30\uac04, \ud3c9\uac00\ub97c \ud55c \ud654\uba74\uc5d0\uc11c \uc870\ud68c\ud558\uace0 \uc2e0\uaddc \ub4f1\ub85d\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4.',
  searchPh: '\ud611\ub825\uc0ac\uba85, \uacf5\uc885 \uac80\uc0c9',
  excel: '\uc5d1\uc140 \ub2e4\uc6b4\ub85c\ub4dc',
  register: '\uc2e0\uaddc \ud611\ub825\uc0ac \ub4f1\ub85d',
  statTotal: '\ucd1d \ud611\ub825\uc0ac',
  statActive: '\uacc4\uc57d \uc720\uc9c0',
  statExpiring: '\ub9cc\ub8cc \uc608\uc815',
  statExpiringHint: '30\uc77c \uc774\ub0b4',
  unit: '\uac1c\uc0ac',
  tabAll: '\uc804\uccb4',
  tabActive: '\uacc4\uc57d \uc720\uc9c0',
  tabExpiring: '\ub9cc\ub8cc \uc608\uc815',
  tabEnded: '\uacc4\uc57d \uc885\ub8cc',
  colName: '\ud611\ub825\uc0ac\uba85',
  colTrade: '\uacf5\uc885 / \ub300\ud45c\uc790',
  colPeriod: '\uacc4\uc57d \uae30\uac04',
  colEval: '\ud3c9\uac00',
  empty: '\uc870\uac74\uc5d0 \ub9de\ub294 \ud611\ub825\uc0ac\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.',
  drawerTitle: '\uc2e0\uaddc \ud611\ub825\uc0ac \ub4f1\ub85d',
  aiTitle: 'AI \uacc4\uc57d\uc11c \uc790\ub3d9 \ubd84\uc11d',
  aiHint: 'PDF \ub610\ub294 \uc774\ubbf8\uc9c0 \ud30c\uc77c \uc5c5\ub85c\ub4dc',
  aiLoading: '\ubb38\uc11c \ubd84\uc11d \uc911...',
  labelName: '\ud611\ub825\uc0ac\uba85 *',
  labelBiz: '\uc0ac\uc5c5\uc790 \ubc88\ud638',
  labelRep: '\ub300\ud45c\uc790\uba85',
  labelContact: '\uc5f0\ub77d\ucc98',
  labelTrade: '\ub2f4\ub2f9 \uacf5\uc885 *',
  labelUnit: '\uacc4\uc57d \ub2e8\uac00 (\uc6d0)',
  labelStart: '\uacc4\uc57d \uc2dc\uc791\uc77c *',
  labelEnd: '\uacc4\uc57d \uc885\ub8cc\uc77c *',
  submit: '\ub4f1\ub85d \uc644\ub8cc',
  alertFields: '\ud544\uc218 \uc815\ubcf4\ub97c \ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694.',
  alertAi:
    'AI \ubb38\uc11c \uc778\uc2dd\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ucd94\ucd9c\ub41c \ub370\uc774\ud130\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.',
  alertOk: '\ud611\ub825\uc0ac\uac00 \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
  alertExcel:
    '\ud611\ub825\uc0ac \ub9ac\uc2a4\ud2b8 \uc5d1\uc140 \ub2e4\uc6b4\ub85c\ub4dc\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4.',
}

const showRegisterDrawer = ref(false)
const searchQuery = ref('')
const currentTab = ref(T.tabAll)
const tabs = [T.tabAll, T.tabActive, T.tabExpiring, T.tabEnded]
const isParsing = ref(false)

const newPartner = ref({
  name: '',
  bizNumber: '',
  repName: '',
  trade: '',
  contact: '',
  startDate: '',
  endDate: '',
  unitPrice: '',
})

const partners = ref([
  {
    name: '\ud0dc\uc591\uac74\uc124',
    repName: '\uae40\ud0dc\uc591',
    trade: '\ud615\ud2c0',
    workers: 45,
    unitPrice: '250,000',
    period: '2024.01.01 ~ 2025.12.31',
    status: '\uacc4\uc57d \uc720\uc9c0',
    evaluation: 'A \xb7 92\uc810',
  },
  {
    name: '\uc6b0\uc8fc\uc0b0\uc5c5',
    repName: '\ubc15\uc6b0\uc8fc',
    trade: '\ucca0\uadfc',
    workers: 32,
    unitPrice: '260,000',
    period: '2023.05.01 ~ 2024.05.15',
    status: '\ub9cc\ub8cc \uc608\uc815',
    evaluation: 'B+ \xb7 81\uc810',
  },
  {
    name: '\uc81c\uc77c\ud658\uacbd',
    repName: '\uc774\ud658\uacbd',
    trade: '\ube44\uacc4',
    workers: 18,
    unitPrice: '230,000',
    period: '2024.03.01 ~ 2026.02.28',
    status: '\uacc4\uc57d \uc720\uc9c0',
    evaluation: 'A \xb7 89\uc810',
  },
])

const summary = computed(() => ({
  total: partners.value.length,
  active: partners.value.filter((p) => p.status === '\uacc4\uc57d \uc720\uc9c0').length,
  expiring: partners.value.filter((p) => p.status === '\ub9cc\ub8cc \uc608\uc815').length,
}))

const filteredPartners = computed(() => {
  let result = partners.value

  if (currentTab.value !== T.tabAll) {
    result = result.filter((p) => p.status === currentTab.value)
  }

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.trade.toLowerCase().includes(q) ||
        p.repName.toLowerCase().includes(q),
    )
  }

  return result.sort((a, b) =>
    a.status === '\ub9cc\ub8cc \uc608\uc815' && b.status !== '\ub9cc\ub8cc \uc608\uc815' ? -1 : 1,
  )
})

const goToDetail = (id) => {
  router.push(`/hr/partners/${id}`)
}

const downloadExcel = () => {
  alert(T.alertExcel)
}

const handleFileUpload = (e) => {
  if (!e.target.files[0]) return
  isParsing.value = true

  setTimeout(() => {
    newPartner.value = {
      name: '\uc2a4\ub9c8\ud2b8\uc548\uc804(\uc8fc)',
      bizNumber: '123-45-67890',
      repName: '\ucd5c\uc2a4\ub9c8\ud2b8',
      trade: '\uc804\uae30',
      contact: '010-9999-8888',
      startDate: '2024-05-01',
      endDate: '2025-04-30',
      unitPrice: '240,000',
    }
    isParsing.value = false
    alert(T.alertAi)
  }, 1500)
}

const registerPartner = () => {
  if (
    !newPartner.value.name ||
    !newPartner.value.trade ||
    !newPartner.value.startDate ||
    !newPartner.value.endDate
  ) {
    alert(T.alertFields)
    return
  }
  partners.value.unshift({
    id: `PTN-00${partners.value.length + 1}`,
    name: newPartner.value.name,
    repName: newPartner.value.repName,
    trade: newPartner.value.trade,
    contact: newPartner.value.contact,
    workers: 0,
    unitPrice: newPartner.value.unitPrice,
    period: `${newPartner.value.startDate.replace(/-/g, '.')} ~ ${newPartner.value.endDate.replace(/-/g, '.')}`,
    status: '\uacc4\uc57d \uc720\uc9c0',
    evaluation: '-',
  })

  alert(T.alertOk)
  showRegisterDrawer.value = false

  newPartner.value = {
    name: '',
    bizNumber: '',
    repName: '',
    trade: '',
    contact: '',
    startDate: '',
    endDate: '',
    unitPrice: '',
  }
}

const statusBadgeClass = (status) => {
  if (status === '\ub9cc\ub8cc \uc608\uc815')
    return 'bg-rose-50 text-rose-700 ring-1 ring-rose-200/80'
  if (status === '\uacc4\uc57d \uc885\ub8cc')
    return 'bg-slate-100 text-slate-600 ring-1 ring-slate-200/80'
  return 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/80'
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
      <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div class="flex flex-wrap items-start gap-4">
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-flare-400 to-flare-600 text-white shadow-md"
          >
            <Handshake class="h-5 w-5" />
          </span>
          <div>
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-flare-600">
              {{ T.kicker }}
            </p>
            <h2 class="text-gradient-brand text-xl font-bold tracking-tight">{{ T.title }}</h2>
            <p class="mt-2 max-w-2xl text-sm leading-relaxed text-forena-700/80">{{ T.desc }}</p>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-2 sm:justify-end">
          <div class="relative min-w-[220px] flex-1 sm:flex-initial">
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
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-xl border border-forena-200 bg-white px-4 py-2.5 text-sm font-bold text-forena-700 shadow-sm transition hover:bg-forena-50"
            @click="downloadExcel"
          >
            <Download class="h-4 w-4 text-flare-600" />
            {{ T.excel }}
          </button>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-forena-700 to-forena-900 px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:from-forena-800 hover:to-forena-950"
            @click="showRegisterDrawer = true"
          >
            <Plus class="h-4 w-4" />
            {{ T.register }}
          </button>
        </div>
      </div>
    </div>

    <div class="grid gap-4 sm:grid-cols-3">
      <article class="rounded-2xl border border-white/90 bg-white/90 p-5 shadow-card">
        <div class="flex items-center gap-2 text-sm font-semibold text-forena-900">
          <Building2 class="h-4 w-4 text-flare-600" />
          {{ T.statTotal }}
        </div>
        <p class="mt-3 text-3xl font-light tabular-nums text-forena-900">
          {{ summary.total
          }}<span class="ml-1 text-sm font-normal text-slate-500">{{ T.unit }}</span>
        </p>
      </article>
      <article class="rounded-2xl border border-white/90 bg-white/90 p-5 shadow-card">
        <div class="flex items-center gap-2 text-sm font-semibold text-forena-900">
          <CircleCheck class="h-4 w-4 text-emerald-600" />
          {{ T.statActive }}
        </div>
        <p class="mt-3 text-3xl font-light tabular-nums text-emerald-800">
          {{ summary.active
          }}<span class="ml-1 text-sm font-normal text-emerald-600/80">{{ T.unit }}</span>
        </p>
      </article>
      <article
        class="rounded-2xl border border-rose-100/90 bg-gradient-to-br from-rose-50/40 to-white p-5 shadow-card"
      >
        <div class="flex items-center gap-2 text-sm font-semibold text-rose-800">
          <AlertTriangle class="h-4 w-4 shrink-0" />
          {{ T.statExpiring }}
        </div>
        <div class="mt-3 flex items-end justify-between gap-2">
          <p class="text-3xl font-light tabular-nums text-rose-700">
            {{ summary.expiring
            }}<span class="ml-1 text-sm font-normal text-rose-500">{{ T.unit }}</span>
          </p>
          <span class="rounded-lg bg-rose-100 px-2 py-1 text-[10px] font-bold text-rose-700">{{
            T.statExpiringHint
          }}</span>
        </div>
      </article>
    </div>

    <div
      class="flex flex-col overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 shadow-card"
    >
      <div
        class="flex flex-col gap-3 border-b border-forena-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex gap-1 overflow-x-auto pb-1 sm:pb-0">
          <button
            v-for="tab in tabs"
            :key="tab"
            type="button"
            class="relative shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition"
            :class="
              currentTab === tab
                ? 'bg-flare-50 font-bold text-forena-900 ring-1 ring-flare-200/80'
                : 'text-slate-500 hover:bg-forena-50/80 hover:text-forena-800'
            "
            @click="currentTab = tab"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full min-w-[640px] text-left text-sm whitespace-nowrap">
          <thead
            class="border-b border-forena-100 bg-forena-50/60 text-[11px] font-bold uppercase tracking-wider text-forena-500"
          >
            <tr>
              <th class="px-6 py-4 font-semibold">{{ T.colName }}</th>
              <th class="px-6 py-4 font-semibold">{{ T.colTrade }}</th>
              <th class="px-6 py-4 font-semibold">{{ T.colPeriod }}</th>
              <th class="px-6 py-4 text-center font-semibold">{{ T.colEval }}</th>
            </tr>
          </thead>
          <tbody class="text-forena-800">
            <tr v-if="filteredPartners.length === 0">
              <td colspan="4" class="px-6 py-14 text-center text-sm text-slate-400">
                {{ T.empty }}
              </td>
            </tr>
            <tr
              v-else
              v-for="partner in filteredPartners"
              :key="partner.id"
              class="cursor-pointer border-b border-forena-50 transition hover:bg-flare-50/40"
              @click="goToDetail(partner.id)"
            >
              <td class="px-6 py-4">
                <div class="font-semibold text-forena-900">{{ partner.name }}</div>
                <div class="text-[11px] text-slate-500">{{ partner.id }}</div>
              </td>
              <td class="px-6 py-4">
                <span class="font-semibold text-forena-800">{{ partner.trade }}</span>
                <span class="ml-2 text-xs text-slate-500">| {{ partner.repName }}</span>
              </td>
              <td class="px-6 py-4 text-xs text-slate-600">{{ partner.period }}</td>
              <td class="px-6 py-4 text-center">
                <span
                  class="inline-flex rounded-lg bg-flare-50 px-2.5 py-1 text-[11px] font-bold text-forena-800 ring-1 ring-flare-200/70"
                >
                  {{ partner.evaluation }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="showRegisterDrawer"
        class="fixed inset-0 z-50 flex justify-end bg-forena-900/20 backdrop-blur-[2px]"
        @click.self="showRegisterDrawer = false"
      >
        <aside
          class="flex h-full w-full max-w-md flex-col border-l border-forena-100 bg-white shadow-2xl animate-[drawerIn_0.25s_ease-out]"
          @click.stop
        >
          <div
            class="flex items-center justify-between border-b border-forena-100 bg-forena-50/50 px-5 py-4"
          >
            <h2 class="text-lg font-bold text-forena-900">{{ T.drawerTitle }}</h2>
            <button
              type="button"
              class="rounded-lg border border-forena-200 bg-white p-2 text-forena-400 transition hover:text-forena-700"
              @click="showRegisterDrawer = false"
            >
              <X class="h-4 w-4" />
            </button>
          </div>

          <div class="scrollbar-hide flex-1 space-y-6 overflow-y-auto p-6 text-sm">
            <div
              class="relative rounded-xl border-2 border-dashed border-forena-200 p-6 text-center transition hover:border-flare-400/60"
              :class="{ 'pointer-events-none opacity-60': isParsing }"
            >
              <input
                type="file"
                class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                accept=".pdf,image/*"
                @change="handleFileUpload"
              />
              <template v-if="!isParsing">
                <FileText class="mx-auto mb-2 h-8 w-8 text-flare-600" />
                <p class="font-bold text-forena-900">{{ T.aiTitle }}</p>
                <p class="mt-1 text-[11px] text-slate-500">{{ T.aiHint }}</p>
              </template>
              <div v-else class="py-2">
                <Loader2 class="mx-auto mb-2 h-7 w-7 animate-spin text-forena-700" />
                <p class="text-xs font-bold text-forena-800">{{ T.aiLoading }}</p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{
                    T.labelName
                  }}</label>
                  <input
                    v-model="newPartner.name"
                    type="text"
                    class="w-full rounded-xl border border-forena-200 px-3 py-2.5 outline-none focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
                  />
                </div>
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{
                    T.labelBiz
                  }}</label>
                  <input
                    v-model="newPartner.bizNumber"
                    type="text"
                    class="w-full rounded-xl border border-forena-200 px-3 py-2.5 outline-none focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
                  />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{
                    T.labelRep
                  }}</label>
                  <input
                    v-model="newPartner.repName"
                    type="text"
                    class="w-full rounded-xl border border-forena-200 px-3 py-2.5 outline-none focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
                  />
                </div>
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{
                    T.labelContact
                  }}</label>
                  <input
                    v-model="newPartner.contact"
                    type="text"
                    class="w-full rounded-xl border border-forena-200 px-3 py-2.5 outline-none focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
                  />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{
                    T.labelTrade
                  }}</label>
                  <input
                    v-model="newPartner.trade"
                    type="text"
                    class="w-full rounded-xl border border-forena-200 px-3 py-2.5 outline-none focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
                  />
                </div>
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{
                    T.labelUnit
                  }}</label>
                  <input
                    v-model="newPartner.unitPrice"
                    type="text"
                    class="w-full rounded-xl border border-forena-200 px-3 py-2.5 outline-none focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
                  />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{
                    T.labelStart
                  }}</label>
                  <input
                    v-model="newPartner.startDate"
                    type="date"
                    class="w-full rounded-xl border border-forena-200 px-3 py-2.5 outline-none focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
                  />
                </div>
                <div>
                  <label class="mb-1.5 block text-[11px] font-bold text-forena-500">{{
                    T.labelEnd
                  }}</label>
                  <input
                    v-model="newPartner.endDate"
                    type="date"
                    class="w-full rounded-xl border border-forena-200 px-3 py-2.5 outline-none focus:border-flare-400 focus:ring-2 focus:ring-flare-400/20"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              class="w-full rounded-xl bg-gradient-to-r from-forena-700 to-forena-900 py-3 text-sm font-bold text-white shadow-md transition hover:from-forena-800 hover:to-forena-950"
              @click="registerPartner"
            >
              {{ T.submit }}
            </button>
          </div>
        </aside>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
@keyframes drawerIn {
  from {
    transform: translateX(100%);
    opacity: 0.96;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
