<script setup>
import { Users } from 'lucide-vue-next'
import AttendanceListView from '@/views/AttendanceManagement/AttendanceListView.vue'

const T = {
  pageTitle: '\uc791\uc5c5\uc790 \uad00\ub9ac',
  kicker: '\uc778\uc0ac',
  heroDesc:
    '\ub4f1\ub85d\ub41c \uc791\uc5c5\uc790\uc758 \ucd9c\uc785/\uadfc\ud0dc \ubc0f \uc77c\uc77c \ud604\ud669\uc744 \uc870\ud68c\ud558\uace0 \ubcf4\uc815\ud569\ub2c8\ub2e4.',
  sectionAttendance: '\ucd9c\uc785 / \uadfc\ud0dc \ud604\ud669',
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
      <div class="flex items-start gap-3">
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-flare-400 to-flare-600 text-white shadow-md"
        >
          <Users class="h-5 w-5" />
        </span>
        <div>
          <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-flare-600">{{ T.kicker }}</p>
          <h1 class="text-gradient-brand text-xl font-bold tracking-tight">{{ T.pageTitle }}</h1>
          <p class="mt-2 max-w-3xl text-sm leading-relaxed text-forena-700/80">{{ T.heroDesc }}</p>
        </div>
      </div>
    </div>

    <div>
      <h2 class="mb-3 text-sm font-bold text-forena-900">{{ T.sectionAttendance }}</h2>
      <AttendanceListView embed />
    </div>
  </div>
</template>
