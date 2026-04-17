<script setup>
import { ref } from 'vue'
import {
  ClipboardList,
  FileText,
  Download,
  Plus,
  CalendarClock,
  X,
  BookOpen,
  Users,
  ImagePlus,
  Trash2,
  Upload,
} from 'lucide-vue-next'

const T = {
  kicker: '\uc77c\uc815',
  pageTitle: '\uc791\uc5c5 \uc9c0\uc2dc',
  desc:
    '\uc791\uc5c5 \uc9c0\uc2dc\uc11c\uc640 TBM \uc77c\uc9c0\ub97c \ub3d9\uc77c \ud654\uba74\uc5d0\uc11c \uc791\uc131\xb7\uad00\ub9ac\ud569\ub2c8\ub2e4.',
  tabOrder: '\uc791\uc5c5 \uc9c0\uc2dc\uc11c',
  tabTbm: 'TBM \uc77c\uc9c0',
  newDoc: '\uc9c0\uc2dc\uc11c \uc791\uc131',
  newTbm: '\uc77c\uc9c0 \uc0dd\uc131',
  colDoc: '\ubb38\uc11c\ubc88\ud638 / \uc81c\ubaa9',
  colSite: '\ud604\uc7a5',
  colTrade: '\uacf5\uc885',
  colDate: '\ucc98\ub9ac\uae30\ud55c',
  colTbm: 'TBM',
  colStatus: '\uc0c1\ud0dc',
  colFile: '\ud30c\uc77c',
  dl: '\ub2e4\uc6b4\ub85c\ub4dc',
  modalOrderTitle: '\uc791\uc5c5 \uc9c0\uc2dc\uc11c \uc791\uc131',
  modalTbmTitle: 'TBM \uc77c\uc9c0 \uc0dd\uc131',
  cancel: '\ucde8\uc18c',
  save: '\uc800\uc7a5',
  fSite: '\ud604\uc7a5\uba85',
  fPartner: '\ud611\ub825\ud68c\uc0ac\uba85',
  fTrade: '\uacf5\uc885',
  fDue: '\ucc98\ub9ac\uae30\ud55c',
  fTitle: '\uc81c\ubaa9',
  fInstr: '\uc9c0\uc2dc\uc0ac\ud56d',
  fAction: '\uc870\uce58\ub0b4\uc6a9',
  fEquip: '\uc790\uc7ac \ubc0f \uc7a5\ube44 (\uc911\uc7a5\ube44\ub9cc)',
  fSafety: '\uc548\uc804\uc0ac\ud56d',
  fContact: '\uc5f0\ub77d\ucc98',
  fAgent: '\ud604\uc7a5\ub300\ub9ac\uc778',
  phSite: '\uc791\uc5c5\uc774 \uc9c4\ud589\ub418\ub294 \uc7a5\uc18c \ub610\ub294 \ud504\ub85c\uc81d\ud2b8\uba85',
  phPartner: '\ud611\ub825\ud68c\uc0ac \uba85\uce6d',
  phTrade: '\uc608: \uac74\uc124, \uc804\uae30\uacf5\uc0ac, \uc124\ube44\uc720\uc9c0\ubcf4\uc218',
  phTitle: '\uc791\uc5c5 \uc694\uc57d',
  phInstr: '\uc138\ubd80 \uc9c0\uc2dc, \uc218\ud589 \ub0b4\uc6a9, \uc8fc\uc758\uc0ac\ud56d',
  phAction: '\ub300\uc751/\uac1c\uc120 \uc870\uce58',
  phEquip: '\uc911\uc7a5\ube44 \uba85\uce6d \ubc0f \uc218\ub7c9',
  phSafety: '\uc548\uc804 \uaddc\uc815 \ubc0f \uc808\ucc28',
  phContact: '\ub2f4\ub2f9\uc790 \uc5f0\ub77d\ucc98',
  phAgent: '\uc2b9\uc778\xb7\ud655\uc778 \ub300\uc0c1 \ubc0f \uc5ed\ud560',
  tbmDate: '\uc0dd\uc131 \ub0a0\uc9dc',
  tbmName: 'TBM \uc77c\uc9c0 \uba85',
  tbmTrade: '\uacf5\uc885',
  tbmAuthor: '\uc791\uc131\uc790\uba85',
  tbmPhotos: '\ud604\uc7a5 \uc0ac\uc9c4',
  tbmAttend: 'TBM \ucc38\uc11d\uc790',
  phTbmName: '\uc77c\uc9c0 \uc81c\ubaa9',
  phTbmAttend: '\ucc38\uc11d\uc790 \uc131\uba85 (\uc904\ubc14\uafc8 \uac00\ub2a5)',
  addPhotos: '\uc0ac\uc9c4 \ucd94\uac00',
  colTbmName: '\uc77c\uc9c0 \uba85',
  colTbmAuthor: '\uc791\uc131\uc790',
  colTbmAttend: '\ucc38\uc11d',
  emptyTbm: '\ub4f1\ub85d\ub41c TBM \uc77c\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.',
  extraSection: '\ucd94\uac00 \uc0ac\ud56d',
  remove: '\uc0ad\uc81c',
  fDocUpload: '\uc9c0\uc2dc\uc11c \ubb38\uc11c (\ud30c\uc77c)',
  required: '\ud544\uc218',
  docPick: '\ud30c\uc77c \uc120\ud0dd',
  docClear: '\uc81c\uac70',
  docHint: 'PDF, Word, HWP \ub4f1 \uacf5\uc2dd \ubb38\uc11c\ub97c \ucca8\ubd80\ud574 \uc8fc\uc138\uc694.',
  docRequiredMsg: '\uc9c0\uc2dc\uc11c \ubb38\uc11c\ub97c \ucca8\ubd80\ud574 \uc8fc\uc138\uc694.',
}

const innerTab = ref('order')
const showOrderModal = ref(false)
const showTbmModal = ref(false)

const emptyOrderForm = () => ({
  siteName: '',
  partnerName: '',
  trade: '',
  dueDate: '',
  title: '',
  instructions: '',
  actions: '',
  equipment: '',
  safety: '',
  contacts: '',
  siteAgent: '',
})

const orderForm = ref(emptyOrderForm())

const emptyTbmForm = () => ({
  createdDate: '',
  journalName: '',
  trade: '',
  authorName: '',
  attendees: '',
  previews: [],
})

const tbmForm = ref(emptyTbmForm())
const tbmFileInput = ref(null)

const orderDocInput = ref(null)
const orderAttachedFile = ref(null)
const orderDocError = ref(false)

const instructions = ref([
  {
    id: 'WI-2025-014',
    title: '\uc9c0\ud558 \ucf58\ud06c\ub9ac\ud2b8 \ud0c0\uc124 \uc791\uc5c5 \uc9c0\uc2dc',
    site: '\uac15\ub0a8\uad6c \uc7ac\uac74\ucd95 A\uacf5\uad6c',
    workType: '\ud0c0\uc124 / \uc591\uc0dd',
    author: '\uc548\uc804\uad00\ub9ac\uc790',
    date: '2025-04-12',
    dueDate: '2025-04-20',
    status: '\ubc30\ud3ec \uc644\ub8cc',
    tbm: '2025-04-13 07:30',
  },
  {
    id: 'WI-2025-013',
    title: '\uace8\uc870 \ube44\uacc4 \ud574\uccb4 \uc21c\uc11c \ubc0f \uc8fc\uc758\uc0ac\ud56d',
    site: '\uac15\ub0a8\uad6c \uc7ac\uac74\ucd95 A\uacf5\uad6c',
    workType: '\ube44\uacc4 / \ud574\uccb4',
    author: '\ud604\uc7a5\uc18c\uc7a5',
    date: '2025-04-10',
    dueDate: '2025-04-18',
    status: '\uac80\ud1a0 \uc911',
    tbm: '2025-04-11 07:30',
  },
  {
    id: 'WI-2025-012',
    title: '\uc804\uae30 \ubc30\uc120 \uc77c\uc77c \uc704\ud5d8\uc131 \ud3c9\uac00 (2\ub3d9)',
    site: '\ud310\uad50 \ub370\uc774\ud130\uc13c\ud130',
    workType: '\uc804\uae30',
    author: '\uc804\uae30\uc18c\uc7a5',
    date: '2025-04-08',
    dueDate: '2025-04-15',
    status: '\uc791\uc131 \uc644\ub8cc',
    tbm: '2025-04-09 07:00',
  },
])

const tbmLogs = ref([
  {
    id: 'TBM-2025-041',
    journalName: '4\uc6d4 2\uc8fc \uc548\uc804 TBM',
    trade: '\uacf5\ud1b5',
    authorName: '\uc548\uc804\uad00\ub9ac\uc790',
    createdDate: '2025-04-14',
    attendees: '\uae40\ub3d9\uc11d, \uc774\ubaa9\uc218, \ubc15\ubc18\uc7a5',
    photos: [],
  },
])

const statusClass = (s) => {
  if (s.includes('\ubc30\ud3ec')) return 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/80'
  if (s.includes('\uac80\ud1a0')) return 'bg-amber-50 text-amber-800 ring-1 ring-amber-200/80'
  return 'bg-slate-50 text-slate-600 ring-1 ring-slate-200/80'
}

function openOrderModal() {
  orderForm.value = emptyOrderForm()
  orderAttachedFile.value = null
  orderDocError.value = false
  showOrderModal.value = true
}

function onOrderDocChange(ev) {
  const input = ev.target
  const f = input.files && input.files[0]
  if (f) {
    orderAttachedFile.value = { name: f.name, size: f.size }
    orderDocError.value = false
  }
  input.value = ''
}

function clearOrderDoc() {
  orderAttachedFile.value = null
}

function closeOrderModal() {
  showOrderModal.value = false
}

function submitOrder() {
  if (!orderAttachedFile.value) {
    orderDocError.value = true
    return
  }
  orderDocError.value = false
  const f = orderForm.value
  const id = `WI-${new Date().getFullYear()}-${String(instructions.value.length + 1).padStart(3, '0')}`
  instructions.value.unshift({
    id,
    title: f.title || '(\uc81c\ubaa9 \uc5c6\uc74c)',
    site: f.siteName,
    workType: f.trade,
    author: '\ucd1d \ucc45\uc784\uc790',
    date: new Date().toISOString().slice(0, 10),
    dueDate: f.dueDate,
    status: '\uc791\uc131 \uc644\ub8cc',
    tbm: '-',
    attachmentName: orderAttachedFile.value.name,
    detail: { ...f, attachmentName: orderAttachedFile.value.name },
  })
  closeOrderModal()
}

function openTbmModal() {
  tbmForm.value = emptyTbmForm()
  tbmForm.value.createdDate = new Date().toISOString().slice(0, 10)
  showTbmModal.value = true
}

function closeTbmModal() {
  showTbmModal.value = false
}

function onTbmFiles(ev) {
  const input = ev.target
  const files = input.files ? [...input.files] : []
  for (const file of files) {
    if (!file.type.startsWith('image/')) continue
    const reader = new FileReader()
    reader.onload = () => {
      tbmForm.value.previews.push({ url: reader.result, name: file.name })
    }
    reader.readAsDataURL(file)
  }
  input.value = ''
}

function removePreview(i) {
  tbmForm.value.previews.splice(i, 1)
}

function submitTbm() {
  const f = tbmForm.value
  const id = `TBM-${new Date().getFullYear()}-${String(tbmLogs.value.length + 1).padStart(3, '0')}`
  tbmLogs.value.unshift({
    id,
    journalName: f.journalName || 'TBM \uc77c\uc9c0',
    trade: f.trade,
    authorName: f.authorName,
    createdDate: f.createdDate,
    attendees: f.attendees,
    photos: f.previews.map((p) => ({ url: p.url, name: p.name })),
  })
  closeTbmModal()
}

function downloadRow(id) {
  window.alert('PDF ' + id + ' (\ub370\ubaa8)')
}

function deleteTbm(id) {
  tbmLogs.value = tbmLogs.value.filter((x) => x.id !== id)
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
      <div class="flex flex-col gap-4">
        <div class="flex items-start gap-3">
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-flare-400 to-flare-600 text-white shadow-md"
          >
            <ClipboardList class="h-5 w-5" />
          </span>
          <div>
            <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-flare-600">{{ T.kicker }}</p>
            <h1 class="text-gradient-brand text-xl font-bold tracking-tight">{{ T.pageTitle }}</h1>
            <p class="mt-2 max-w-2xl text-sm leading-relaxed text-forena-700/80">{{ T.desc }}</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-2 rounded-2xl border border-forena-100/80 bg-white/80 p-1.5 shadow-sm">
          <button
            type="button"
            class="rounded-xl px-4 py-2 text-sm font-bold transition"
            :class="
              innerTab === 'order'
                ? 'bg-gradient-to-r from-forena-700 to-forena-900 text-white shadow-md'
                : 'text-forena-600 hover:bg-forena-50'
            "
            @click="innerTab = 'order'"
          >
            {{ T.tabOrder }}
          </button>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition"
            :class="
              innerTab === 'tbm'
                ? 'bg-gradient-to-r from-forena-700 to-forena-900 text-white shadow-md'
                : 'text-forena-600 hover:bg-forena-50'
            "
            @click="innerTab = 'tbm'"
          >
            <BookOpen class="h-4 w-4" />
            {{ T.tabTbm }}
          </button>
        </div>
      </div>
    </div>

    <!-- 작업 지시서 -->
    <template v-if="innerTab === 'order'">
      <div class="flex justify-end">
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-forena-700 to-forena-900 px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:from-forena-800 hover:to-forena-950"
          @click="openOrderModal"
        >
          <Plus class="h-4 w-4" />
          {{ T.newDoc }}
        </button>
      </div>

      <div class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 shadow-card">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[900px] text-left text-sm">
            <thead
              class="border-b border-forena-100 bg-forena-50/70 text-[11px] font-bold uppercase tracking-wider text-forena-500"
            >
              <tr>
                <th class="px-5 py-4 font-semibold">{{ T.colDoc }}</th>
                <th class="px-5 py-4 font-semibold">{{ T.colSite }}</th>
                <th class="px-5 py-4 font-semibold">{{ T.colTrade }}</th>
                <th class="px-5 py-4 font-semibold">{{ T.colDate }}</th>
                <th class="px-5 py-4 font-semibold">{{ T.colTbm }}</th>
                <th class="px-5 py-4 font-semibold">{{ T.colStatus }}</th>
                <th class="px-5 py-4 text-center font-semibold">{{ T.colFile }}</th>
              </tr>
            </thead>
            <tbody class="text-forena-800">
              <tr
                v-for="row in instructions"
                :key="row.id"
                class="border-b border-forena-50 transition hover:bg-flare-50/30"
              >
                <td class="px-5 py-4">
                  <div class="flex items-start gap-2">
                    <FileText class="mt-0.5 h-4 w-4 shrink-0 text-flare-600" />
                    <div>
                      <div class="text-[11px] font-semibold text-slate-500">{{ row.id }}</div>
                      <div class="font-semibold text-forena-900">{{ row.title }}</div>
                      <div class="text-[11px] text-slate-500">{{ row.author }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-4 text-sm">{{ row.site }}</td>
                <td class="px-5 py-4 text-xs font-medium text-forena-700">{{ row.workType }}</td>
                <td class="px-5 py-4 tabular-nums text-slate-600">{{ row.dueDate || row.date }}</td>
                <td class="px-5 py-4">
                  <span class="inline-flex items-center gap-1 text-xs text-forena-700">
                    <CalendarClock class="h-3.5 w-3.5 text-flare-600" />
                    {{ row.tbm }}
                  </span>
                </td>
                <td class="px-5 py-4">
                  <span
                    class="inline-flex rounded-lg px-2.5 py-1 text-[10px] font-bold"
                    :class="statusClass(row.status)"
                  >
                    {{ row.status }}
                  </span>
                </td>
                <td class="px-5 py-4 text-center">
                  <button
                    type="button"
                    class="inline-flex rounded-lg border border-forena-200 bg-white p-2 text-forena-600 transition hover:bg-forena-50 hover:text-forena-900"
                    :title="T.dl"
                    @click="downloadRow(row.id)"
                  >
                    <Download class="h-4 w-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>

    <!-- TBM 일지 -->
    <template v-else>
      <div class="flex justify-end">
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-forena-700 to-forena-900 px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:from-forena-800 hover:to-forena-950"
          @click="openTbmModal"
        >
          <Plus class="h-4 w-4" />
          {{ T.newTbm }}
        </button>
      </div>

      <div v-if="tbmLogs.length === 0" class="rounded-2xl border border-dashed border-forena-200 bg-white/80 py-16 text-center text-sm text-slate-500">
        {{ T.emptyTbm }}
      </div>

      <div v-else class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="log in tbmLogs"
          :key="log.id"
          class="overflow-hidden rounded-2xl border border-forena-100/90 bg-white/95 shadow-card transition hover:shadow-md"
        >
          <div class="border-b border-forena-100 bg-forena-50/50 px-4 py-3">
            <div class="flex items-start justify-between gap-2">
              <div>
                <p class="text-[10px] font-bold text-flare-600">{{ log.id }}</p>
                <h3 class="mt-0.5 font-bold text-forena-900">{{ log.journalName }}</h3>
              </div>
              <button
                type="button"
                class="rounded-lg p-1.5 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                :title="T.remove"
                @click="deleteTbm(log.id)"
              >
                <Trash2 class="h-4 w-4" />
              </button>
            </div>
            <p class="mt-1 text-[11px] text-slate-500 tabular-nums">{{ log.createdDate }}</p>
          </div>
          <div class="space-y-2 px-4 py-3 text-sm">
            <p>
              <span class="text-xs font-bold text-forena-500">{{ T.colTrade }}</span>
              <span class="ml-2 font-medium text-forena-800">{{ log.trade }}</span>
            </p>
            <p>
              <span class="text-xs font-bold text-forena-500">{{ T.colTbmAuthor }}</span>
              <span class="ml-2 font-medium text-forena-800">{{ log.authorName }}</span>
            </p>
            <p class="flex items-start gap-1">
              <Users class="mt-0.5 h-4 w-4 shrink-0 text-flare-600" />
              <span>
                <span class="text-xs font-bold text-forena-500">{{ T.colTbmAttend }}</span>
                <span class="ml-1 text-forena-800">{{ log.attendees }}</span>
              </span>
            </p>
          </div>
          <div v-if="log.photos?.length" class="grid grid-cols-3 gap-1 border-t border-forena-50 p-2">
            <img
              v-for="(p, pi) in log.photos.slice(0, 6)"
              :key="pi"
              :src="p.url"
              :alt="p.name"
              class="aspect-square w-full rounded-lg object-cover ring-1 ring-forena-100"
            />
          </div>
        </article>
      </div>
    </template>

    <!-- Modal: 작업 지시서 -->
    <Teleport to="body">
      <div
        v-if="showOrderModal"
        class="fixed inset-0 z-[100] flex items-end justify-center bg-forena-900/40 p-4 backdrop-blur-sm sm:items-center"
        @click.self="closeOrderModal"
      >
        <div
          class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-forena-100 bg-white shadow-2xl"
        >
          <div class="sticky top-0 z-10 flex items-center justify-between border-b border-forena-100 bg-white px-5 py-4">
            <h2 class="text-lg font-bold text-forena-900">{{ T.modalOrderTitle }}</h2>
            <button
              type="button"
              class="rounded-lg p-2 text-slate-500 transition hover:bg-forena-50 hover:text-forena-900"
              @click="closeOrderModal"
            >
              <X class="h-5 w-5" />
            </button>
          </div>
          <form class="space-y-4 px-5 py-5" @submit.prevent="submitOrder">
            <div
              class="rounded-xl border-2 p-4 transition"
              :class="
                orderDocError
                  ? 'border-rose-300 bg-rose-50/50'
                  : 'border-forena-200 bg-gradient-to-br from-forena-50/80 to-white'
              "
            >
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-xs font-bold text-forena-800">{{ T.fDocUpload }}</span>
                <span class="text-rose-600">*</span>
                <span
                  class="rounded-md bg-rose-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-rose-800"
                >
                  {{ T.required }}
                </span>
              </div>
              <p class="mt-1 text-[11px] text-slate-600">{{ T.docHint }}</p>
              <input
                ref="orderDocInput"
                type="file"
                class="hidden"
                accept=".pdf,.doc,.docx,.hwp,.hwpx,.xls,.xlsx,.ppt,.pptx"
                @change="onOrderDocChange"
              />
              <div class="mt-3 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-xl border border-forena-300 bg-white px-4 py-2.5 text-sm font-bold text-forena-800 shadow-sm transition hover:border-flare-400 hover:bg-flare-50/50"
                  @click="orderDocInput?.click()"
                >
                  <Upload class="h-4 w-4 text-flare-600" />
                  {{ T.docPick }}
                </button>
                <button
                  v-if="orderAttachedFile"
                  type="button"
                  class="text-xs font-bold text-rose-600 underline decoration-rose-300"
                  @click="clearOrderDoc"
                >
                  {{ T.docClear }}
                </button>
              </div>
              <p v-if="orderAttachedFile" class="mt-2 flex items-center gap-2 text-sm font-medium text-forena-900">
                <FileText class="h-4 w-4 shrink-0 text-flare-600" />
                <span class="truncate">{{ orderAttachedFile.name }}</span>
              </p>
              <p v-if="orderDocError" class="mt-2 text-xs font-bold text-rose-600">{{ T.docRequiredMsg }}</p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <label class="block space-y-1">
                <span class="text-xs font-bold text-forena-600">{{ T.fSite }}</span>
                <input
                  v-model="orderForm.siteName"
                  type="text"
                  required
                  class="w-full rounded-xl border border-forena-200 px-3 py-2 text-sm focus:border-flare-400 focus:outline-none focus:ring-2 focus:ring-flare-200/50"
                  :placeholder="T.phSite"
                />
              </label>
              <label class="block space-y-1">
                <span class="text-xs font-bold text-forena-600">{{ T.fPartner }}</span>
                <input
                  v-model="orderForm.partnerName"
                  type="text"
                  class="w-full rounded-xl border border-forena-200 px-3 py-2 text-sm focus:border-flare-400 focus:outline-none focus:ring-2 focus:ring-flare-200/50"
                  :placeholder="T.phPartner"
                />
              </label>
              <label class="block space-y-1">
                <span class="text-xs font-bold text-forena-600">{{ T.fTrade }}</span>
                <input
                  v-model="orderForm.trade"
                  type="text"
                  required
                  class="w-full rounded-xl border border-forena-200 px-3 py-2 text-sm focus:border-flare-400 focus:outline-none focus:ring-2 focus:ring-flare-200/50"
                  :placeholder="T.phTrade"
                />
              </label>
              <label class="block space-y-1">
                <span class="text-xs font-bold text-forena-600">{{ T.fDue }}</span>
                <input
                  v-model="orderForm.dueDate"
                  type="date"
                  required
                  class="w-full rounded-xl border border-forena-200 px-3 py-2 text-sm focus:border-flare-400 focus:outline-none focus:ring-2 focus:ring-flare-200/50"
                />
              </label>
            </div>
            <label class="block space-y-1">
              <span class="text-xs font-bold text-forena-600">{{ T.fTitle }}</span>
              <input
                v-model="orderForm.title"
                type="text"
                required
                class="w-full rounded-xl border border-forena-200 px-3 py-2 text-sm focus:border-flare-400 focus:outline-none focus:ring-2 focus:ring-flare-200/50"
                :placeholder="T.phTitle"
              />
            </label>
            <label class="block space-y-1">
              <span class="text-xs font-bold text-forena-600">{{ T.fInstr }}</span>
              <textarea
                v-model="orderForm.instructions"
                rows="4"
                required
                class="w-full resize-y rounded-xl border border-forena-200 px-3 py-2 text-sm focus:border-flare-400 focus:outline-none focus:ring-2 focus:ring-flare-200/50"
                :placeholder="T.phInstr"
              />
            </label>
            <label class="block space-y-1">
              <span class="text-xs font-bold text-forena-600">{{ T.fAction }}</span>
              <textarea
                v-model="orderForm.actions"
                rows="3"
                class="w-full resize-y rounded-xl border border-forena-200 px-3 py-2 text-sm focus:border-flare-400 focus:outline-none focus:ring-2 focus:ring-flare-200/50"
                :placeholder="T.phAction"
              />
            </label>
            <div class="space-y-4 rounded-xl border border-forena-100 bg-forena-50/40 p-4">
              <p class="text-[11px] font-bold uppercase tracking-wider text-forena-500">{{ T.extraSection }}</p>
              <label class="block space-y-1">
                <span class="text-xs font-bold text-forena-600">{{ T.fEquip }}</span>
                <textarea
                  v-model="orderForm.equipment"
                  rows="2"
                  class="w-full resize-y rounded-xl border border-forena-200 bg-white px-3 py-2 text-sm"
                  :placeholder="T.phEquip"
                />
              </label>
              <label class="block space-y-1">
                <span class="text-xs font-bold text-forena-600">{{ T.fSafety }}</span>
                <textarea
                  v-model="orderForm.safety"
                  rows="2"
                  class="w-full resize-y rounded-xl border border-forena-200 bg-white px-3 py-2 text-sm"
                  :placeholder="T.phSafety"
                />
              </label>
              <label class="block space-y-1">
                <span class="text-xs font-bold text-forena-600">{{ T.fContact }}</span>
                <textarea
                  v-model="orderForm.contacts"
                  rows="2"
                  class="w-full resize-y rounded-xl border border-forena-200 bg-white px-3 py-2 text-sm"
                  :placeholder="T.phContact"
                />
              </label>
              <label class="block space-y-1">
                <span class="text-xs font-bold text-forena-600">{{ T.fAgent }}</span>
                <textarea
                  v-model="orderForm.siteAgent"
                  rows="2"
                  class="w-full resize-y rounded-xl border border-forena-200 bg-white px-3 py-2 text-sm"
                  :placeholder="T.phAgent"
                />
              </label>
            </div>
            <div class="flex justify-end gap-2 border-t border-forena-100 pt-4">
              <button
                type="button"
                class="rounded-xl border border-forena-200 px-4 py-2.5 text-sm font-bold text-forena-700 transition hover:bg-forena-50"
                @click="closeOrderModal"
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

    <!-- Modal: TBM -->
    <Teleport to="body">
      <div
        v-if="showTbmModal"
        class="fixed inset-0 z-[100] flex items-end justify-center bg-forena-900/40 p-4 backdrop-blur-sm sm:items-center"
        @click.self="closeTbmModal"
      >
        <div
          class="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-forena-100 bg-white shadow-2xl"
        >
          <div class="sticky top-0 z-10 flex items-center justify-between border-b border-forena-100 bg-white px-5 py-4">
            <h2 class="text-lg font-bold text-forena-900">{{ T.modalTbmTitle }}</h2>
            <button
              type="button"
              class="rounded-lg p-2 text-slate-500 transition hover:bg-forena-50 hover:text-forena-900"
              @click="closeTbmModal"
            >
              <X class="h-5 w-5" />
            </button>
          </div>
          <form class="space-y-4 px-5 py-5" @submit.prevent="submitTbm">
            <label class="block space-y-1">
              <span class="text-xs font-bold text-forena-600">{{ T.tbmDate }}</span>
              <input
                v-model="tbmForm.createdDate"
                type="date"
                required
                class="w-full rounded-xl border border-forena-200 px-3 py-2 text-sm focus:border-flare-400 focus:outline-none focus:ring-2 focus:ring-flare-200/50"
              />
            </label>
            <label class="block space-y-1">
              <span class="text-xs font-bold text-forena-600">{{ T.tbmName }}</span>
              <input
                v-model="tbmForm.journalName"
                type="text"
                required
                class="w-full rounded-xl border border-forena-200 px-3 py-2 text-sm"
                :placeholder="T.phTbmName"
              />
            </label>
            <div class="grid gap-4 sm:grid-cols-2">
              <label class="block space-y-1">
                <span class="text-xs font-bold text-forena-600">{{ T.tbmTrade }}</span>
                <input
                  v-model="tbmForm.trade"
                  type="text"
                  required
                  class="w-full rounded-xl border border-forena-200 px-3 py-2 text-sm"
                />
              </label>
              <label class="block space-y-1">
                <span class="text-xs font-bold text-forena-600">{{ T.tbmAuthor }}</span>
                <input
                  v-model="tbmForm.authorName"
                  type="text"
                  required
                  class="w-full rounded-xl border border-forena-200 px-3 py-2 text-sm"
                />
              </label>
            </div>
            <label class="block space-y-1">
              <span class="text-xs font-bold text-forena-600">{{ T.tbmAttend }}</span>
              <textarea
                v-model="tbmForm.attendees"
                rows="3"
                required
                class="w-full resize-y rounded-xl border border-forena-200 px-3 py-2 text-sm"
                :placeholder="T.phTbmAttend"
              />
            </label>
            <div class="space-y-2">
              <span class="text-xs font-bold text-forena-600">{{ T.tbmPhotos }}</span>
              <input
                ref="tbmFileInput"
                type="file"
                accept="image/*"
                multiple
                class="hidden"
                @change="onTbmFiles"
              />
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-xl border border-dashed border-forena-300 bg-forena-50/50 px-4 py-3 text-sm font-bold text-forena-700 transition hover:border-flare-400 hover:bg-flare-50/50"
                @click="tbmFileInput?.click()"
              >
                <ImagePlus class="h-4 w-4" />
                {{ T.addPhotos }}
              </button>
              <div v-if="tbmForm.previews.length" class="flex flex-wrap gap-2 pt-1">
                <div v-for="(p, i) in tbmForm.previews" :key="i" class="relative h-20 w-20">
                  <img :src="p.url" :alt="p.name" class="h-full w-full rounded-lg object-cover ring-1 ring-forena-100" />
                  <button
                    type="button"
                    class="absolute -right-1 -top-1 rounded-full bg-rose-500 p-0.5 text-white shadow"
                    @click="removePreview(i)"
                  >
                    <X class="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
            <div class="flex justify-end gap-2 border-t border-forena-100 pt-4">
              <button
                type="button"
                class="rounded-xl border border-forena-200 px-4 py-2.5 text-sm font-bold text-forena-700 transition hover:bg-forena-50"
                @click="closeTbmModal"
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
