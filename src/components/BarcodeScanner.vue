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
          <details>
            <summary><b>{{ '[' + ai.identifier + '] ' + ai.title }}</b></summary>
            <small>{{ ai.desc }}</small>
          </details>
          <p v-if="ai.processed">{{ ai.processed }}</p>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { type AIList } from '../types/ApplicationIdentifierType'
import { BarcodeParser } from '../uses/BarcodeParser'
import { BarcodeFormatter } from '../uses/BarcodeFormatter'
import { Odette } from '../uses/Parser.Odette'
import { GS1 } from '../uses/Parser.GS1'

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
      this.parsedBarcode = <AIList>{}
      this.formattedBarcode = ""
      // Identify format and parse barcode
      if (new RegExp(/^\[\)>\x1e06\x1d.*\x1e\x04$/).test(decodedText)) {
        this.parsedBarcode = BarcodeParser(decodedText, Odette)
      } else if (new RegExp(/^\]d2.*/).test(decodedText)) {
        this.parsedBarcode = BarcodeParser(decodedText, GS1)
      }
      // Render our non-human-readable chacters for actual humans to see!
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