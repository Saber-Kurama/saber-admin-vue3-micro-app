<script setup lang="ts">
  import { ref } from 'vue';

  const zoom = ref('small');
  const zoomChange = () => {
    zoom.value = zoom.value === 'big' ? 'small' : 'big';
    document.documentElement.style.fontSize = `${zoom.value === 'big' ? 16 : 14.5}px`;
  };
</script>

<template>
  <a-button type="text" shape="circle" size="small" @click="zoomChange">
    {{ zoom === 'big' ? '大字' : '标准' }}
  </a-button>
</template>
