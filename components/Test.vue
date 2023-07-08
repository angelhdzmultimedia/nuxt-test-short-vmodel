<script lang="ts" setup>
const props = defineProps<{ name: string }>()
</script>

<template>
  <div><b>Test:</b>{{ props.name }}</div>
</template>
