<template>
  <h1>Odette (ANSI) Barcode Parser</h1>
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