<template>
  <BarcodeScanner />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BarcodeScanner from './components/BarcodeScanner.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarcodeScanner
  }
})
</script>