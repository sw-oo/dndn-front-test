<script setup>
import { UserPlus } from 'lucide-vue-next'

const T = {
  pageTitle: '\uc791\uc5c5\uc790 \uc628\ubcf4\ub529',
  onboardKicker: '\uc778\uc0ac',
  onboardDesc:
    '\uc2e0\uaddc \uc791\uc5c5\uc790 \ub4f1\ub85d, \uad50\uc721 \uc774\uc218, \uc790\uaca9 \uac80\ud1a0 \ub4f1 \uc628\ubcf4\ub529 \uc808\ucc28\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4. \uc0c1\uc138 \uc6f9 \ud3fc \uc5f0\ub3d9\uc740 \ucd94\ud6c4 \uc9c0\uc6d0 \uc608\uc815\uc785\ub2c8\ub2e4.',
  soonNote:
    '\uc2e4\uc81c \ucd9c\uc785/\uadfc\ud0dc \ud604\ud669\uc740 \uba54\ub274\uc758 \u201c\uc791\uc5c5\uc790 \uad00\ub9ac\u201d\uc5d0\uc11c \ud655\uc778\xb7\ubcf4\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
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
          <UserPlus class="h-5 w-5" />
        </span>
        <div>
          <p class="text-[10px] font-bold uppercase tracking-[0.14em] text-flare-600">{{ T.onboardKicker }}</p>
          <h1 class="text-gradient-brand text-xl font-bold tracking-tight">{{ T.pageTitle }}</h1>
          <p class="mt-2 max-w-3xl text-sm leading-relaxed text-forena-700/80">{{ T.onboardDesc }}</p>
        </div>
      </div>
    </div>

    <p
      class="rounded-2xl border border-dashed border-forena-200 bg-white/90 px-5 py-4 text-sm leading-relaxed text-slate-600 shadow-card"
    >
      {{ T.soonNote }}
    </p>
  </div>
</template>
