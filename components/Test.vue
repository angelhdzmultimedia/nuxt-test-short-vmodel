<script lang="ts" setup>
const props = defineProps<{ modelValue: string }>()
</script>

<template>
  <div><b>Test:</b>{{ props.modelValue }}</div>
</template>
