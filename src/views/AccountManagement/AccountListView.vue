<script setup>
import { ref } from 'vue'

const AUTH_SUPER = '\ucd5c\uace0 \uad00\ub9ac\uc790'
const AUTH_SITE_LEAD = '\ucd1d \ucc45\uc784\uc790'

const UI = {
  title: '\uacc4\uc815 \uad00\ub9ac',
  subtitlePrefix: '\uad8c\ud55c\uc740 ',
  subtitleMid: '\uc640 ',
  subtitleSuffix: ' \ub450 \uac00\uc9c0\ub9cc \ubd80\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
  newAccount: '+ \uc0c8 \uacc4\uc815 \uc0dd\uc131',
  colName: '\uc774\ub984',
  colEmail: '\uc774\uba54\uc77c (ID)',
  colSite: '\ub2f4\ub2f9 \ud604\uc7a5',
  colAuth: '\uad8c\ud55c',
  colManage: '\uad00\ub9ac',
  edit: '\uc218\uc815',
  del: '\uc0ad\uc81c',
  cancel: '\ucde8\uc18c',
  saveEdit: '\uc218\uc815 \uc0ac\ud56d \uc800\uc7a5',
  saveCreate: '\uacc4\uc815 \uc0dd\uc131 \uc644\ub8cc',
}

const showDrawer = ref(false)
const isEdit = ref(false)

const form = ref({ name: '', email: '', password: '', site: '', auth: '' })
const accounts = ref([
  {
    id: 1,
    name: '\uae40\ucca0\uc218',
    email: 'chulsu@conwork.com',
    site: '-',
    auth: AUTH_SUPER,
  },
  {
    id: 2,
    name: '\uc774\uc601\ud76c',
    email: 'young@conwork.com',
    site: '\ud310\uad50 \ub370\uc774\ud130\uc13c\ud130',
    auth: AUTH_SITE_LEAD,
  },
])

const openAdd = () => {
  isEdit.value = false
  form.value = { name: '', email: '', password: '', site: '', auth: AUTH_SITE_LEAD }
  showDrawer.value = true
}
const openEdit = (item) => {
  isEdit.value = true
  form.value = { ...item, password: '****' }
  showDrawer.value = true
}
const save = () => {
  showDrawer.value = false
  alert(isEdit.value ? '\uacc4\uc815\uc774 \uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4.' : '\uacc4\uc815\uc774 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.')
}
const deleteAccount = (id) => {
  if (confirm('\uc774 \uacc4\uc815\uc744 \uc644\uc804\ud788 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?'))
    alert('\uc0ad\uc81c \uc644\ub8cc')
}

function onAuthChange() {
  if (form.value.auth === AUTH_SUPER) form.value.site = '-'
}
</script>

<template>
  <div class="relative flex h-full flex-col pb-10 font-sans text-[#2D3748]">
    <div class="mb-6 flex items-end justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">{{ UI.title }}</h1>
               <p class="mt-1 text-sm text-gray-400">
          {{ UI.subtitlePrefix }}{{ AUTH_SUPER }}{{ UI.subtitleMid }}{{ AUTH_SITE_LEAD }}{{ UI.subtitleSuffix }}
        </p>
      </div>
      <button
        type="button"
        class="rounded-lg bg-[#546272] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#43505e]"
        @click="openAdd"
      >
        {{ UI.newAccount }}
      </button>
    </div>

    <div class="flex-1 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table class="w-full table-fixed text-left text-sm whitespace-nowrap">
        <thead class="border-b border-gray-100 bg-gray-50/50 text-xs font-bold uppercase text-gray-400">
          <tr>
            <th class="px-6 py-4">{{ UI.colName }}</th>
            <th class="px-6 py-4">{{ UI.colEmail }}</th>
            <th class="px-6 py-4">{{ UI.colSite }}</th>
            <th class="px-6 py-4">{{ UI.colAuth }}</th>
            <th class="px-6 py-4 text-center">{{ UI.colManage }}</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr
            v-for="acc in accounts"
            :key="acc.id"
            class="border-b border-gray-50 hover:bg-gray-50"
          >
            <td class="px-6 py-4 font-bold text-gray-900">{{ acc.name }}</td>
            <td class="px-6 py-4">{{ acc.email }}</td>
            <td class="px-6 py-4">{{ acc.site }}</td>
            <td class="px-6 py-4">
              <span class="rounded bg-blue-50 px-2 py-1 text-[11px] font-bold text-blue-600">{{
                acc.auth
              }}</span>
            </td>
            <td class="flex justify-center gap-2 px-6 py-4 text-center">
              <button
                type="button"
                class="rounded border border-gray-200 px-3 py-1 text-xs font-bold hover:bg-gray-50"
                @click="openEdit(acc)"
              >
                {{ UI.edit }}
              </button>
              <button
                type="button"
                class="rounded bg-red-50 px-3 py-1 text-xs font-bold text-red-500 hover:bg-red-100"
                @click="deleteAccount(acc.id)"
              >
                {{ UI.del }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <aside
      v-if="showDrawer"
      class="fixed inset-y-0 right-0 z-50 flex w-[400px] animate-[slideIn_0.3s_ease-out] flex-col border-l border-gray-100 bg-white shadow-2xl"
    >
      <div class="flex justify-between border-b border-gray-100 p-5">
        <h2 class="text-lg font-bold">
          {{
            isEdit
              ? '\uacc4\uc815 \uc815\ubcf4 \uc218\uc815'
              : '\uc2e0\uaddc \uacc4\uc815 \uc0dd\uc131'
          }}
        </h2>
        <button type="button" class="text-lg font-bold leading-none text-gray-400" @click="showDrawer = false">
          &times;
        </button>
      </div>
      <div class="flex-1 space-y-5 overflow-y-auto p-6 text-sm">
        <div>
          <label class="mb-1 block text-[11px] font-bold text-gray-500">\ub2f4\ub2f9\uc790 \uc774\ub984</label>
          <input v-model="form.name" type="text" class="w-full rounded-lg border p-2.5" />
        </div>
        <div>
          <label class="mb-1 block text-[11px] font-bold text-gray-500">\uc774\uba54\uc77c (\uc544\uc774\ub514)</label>
          <input v-model="form.email" type="email" class="w-full rounded-lg border p-2.5" />
        </div>
        <div>
          <label class="mb-1 block text-[11px] font-bold text-gray-500">{{
            isEdit ? '\uc0c8 \ube44\ubc00\ubc88\ud638 (\uc120\ud0dd)' : '\uc784\uc2dc \ube44\ubc00\ubc88\ud638 \ud560\ub2f9'
          }}</label>
          <input v-model="form.password" type="password" class="w-full rounded-lg border p-2.5" />
        </div>

        <div v-if="form.auth !== AUTH_SUPER" class="border-t border-gray-100 pt-2">
          <label class="mb-1 block text-[11px] font-bold text-gray-500">\ub2f4\ub2f9 \ud604\uc7a5 \uc9c0\uc815</label>
          <select v-model="form.site" class="w-full rounded-lg border bg-white p-2.5 text-gray-700">
            <option value="\uac15\ub0a8\uad6c \uc7ac\uac74\ucd95 A\uacf5\uad6c">
              \uac15\ub0a8\uad6c \uc7ac\uac74\ucd95 A\uacf5\uad6c
            </option>
            <option value="\ud310\uad50 \ub370\uc774\ud130\uc13c\ud130">\ud310\uad50 \ub370\uc774\ud130\uc13c\ud130</option>
          </select>
        </div>
        <div>
          <label class="mb-1 block text-[11px] font-bold text-gray-500">\uad8c\ud55c</label>
          <select
            v-model="form.auth"
            class="w-full rounded-lg border bg-white p-2.5 text-gray-700"
            @change="onAuthChange"
          >
            <option :value="AUTH_SUPER">{{ AUTH_SUPER }}</option>
            <option :value="AUTH_SITE_LEAD">{{ AUTH_SITE_LEAD }}</option>
          </select>
        </div>
      </div>
      <div class="flex gap-2 border-t border-gray-100 bg-gray-50 p-6">
        <button
          type="button"
          class="flex-1 rounded-lg border bg-white py-2.5 font-bold text-gray-600"
          @click="showDrawer = false"
        >
          {{ UI.cancel }}
        </button>
        <button
          type="button"
          class="flex-1 rounded-lg bg-[#546272] py-2.5 font-bold text-white"
          @click="save"
        >
          {{ isEdit ? UI.saveEdit : UI.saveCreate }}
        </button>
      </div>
    </aside>
  </div>
</template>
