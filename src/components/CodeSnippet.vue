<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <iframe
    :src="src"
    style="
      width: 100%;
      height: 483px;
      border: 0;
      transform: scale(1);
      overflow: hidden;
    "
    sandbox="allow-scripts allow-same-origin"
  >
  </iframe>
</template>
