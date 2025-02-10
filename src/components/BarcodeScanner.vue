<template>
  <div id="parse">
    <p v-html="formattedBarcode" style="grid-column: span 2;"></p>
    <div>
      <div id="qr-code-full-region"></div>
    </div>
    <div>
      <template v-for="(ai) in parsedBarcode" :key="ai.identifier">
        <template v-if="ai.value">
          <h2>{{ ai.value }}</h2>
          <p><b>{{ '[' + ai.identifier + '] ' + ai.title }}</b></p>
          <p v-if="ai.processed">{{ ai.processed }}</p>
          <p><small>{{ ai.desc }}</small></p>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { type AIList } from '../types/ApplicationIdentifierType'
import { BarcodeParser, BarcodeParserReset } from '../uses/BarcodeParser'
import { BarcodeFormatter } from '../uses/BarcodeFormatter'

export default defineComponent({
  name: 'Barcodes',
  props: {
    qrbox: Number,
    fps: Number,
    supportedScanTypes: Array,
  },
  data: () => ({
    parsedBarcode: <AIList>{},
    formattedBarcode: '',
  }),
  mounted() {
    const config = {
      fps: this.fps ? this.fps : 10,
      qrbox: this.qrbox ? this.qrbox : 250,
      supportedScanTypes: [],
    }
    const html5QrcodeScanner = new Html5QrcodeScanner('qr-code-full-region', config, false);
    html5QrcodeScanner.render(this.onScanSuccess, undefined);
  },
  methods: {
    onScanSuccess (decodedText: string) {
      // reset results
      this.parsedBarcode = BarcodeParserReset()
      this.formattedBarcode = ""
      // parse barcode
      this.parsedBarcode = BarcodeParser(decodedText)
      this.formattedBarcode = BarcodeFormatter(decodedText)
    }
  }
})
</script>

<style scoped>
  div#parse {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 1em;
  }
</style>