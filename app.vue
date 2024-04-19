<script setup lang="ts">
const scores = ref<Score[]>([
  { points: 20, frequency: 1 }
])

</script>

<template>
  <div class="w-screen h-screen dark:bg-blue-900 flex flex-col p-4">
    <div class="flex-grow grid place-items-center">
      <Dartboard :scores="scores"
        class="h-full" />
    </div>

    <div class="overflow-auto dark:text-white max-h-1/4">
      {{ scores }}
    </div>

  </div>
</template>
