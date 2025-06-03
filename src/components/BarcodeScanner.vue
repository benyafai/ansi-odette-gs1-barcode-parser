<template>
  <p v-html="formattedBarcode"></p>
  <div id="qr-code">
    <div id="qr-code-full-region"></div>
  </div>
  <div id="result">
    <h2
      v-if="formattedBarcode && Object.keys(parsedBarcode).length <= 0"
      v-html="formattedBarcode"
    ></h2>
    <template v-for="res in parsedBarcode">
      <template v-for="ai in res" :key="ai.identifier">
        <template v-if="ai.value">
          <h2>{{ ai.value }}</h2>
          <p v-if="ai.processed">{{ ai.processed }}</p>
          <details>
            <summary>
              <b>{{ "[" + ai.identifier + "] " + ai.title }}</b>
            </summary>
            <small>{{ ai.desc }}</small>
          </details>
        </template>
      </template>
    </template>
  </div>
  <a @click="paste()" class="paste">📋</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Html5QrcodeScanner } from "html5-qrcode";
import { type AIList } from "../types/ApplicationIdentifierType";
import { BarcodeParser } from "../uses/BarcodeParser";
import { BarcodeFormatter } from "../uses/BarcodeFormatter";
import { ANSIOdette } from "../uses/ApplicationIdentifiers.ANSI.Odette";
import { GS1 } from "../uses/ApplicationIdentifiers.GS1";
import { ScannerOrKeyboardInput } from "../uses/ScannerOrKeyboardInput";

type Results = AIList[];

export default defineComponent({
  name: "Barcodes",
  props: {
    qrbox: Number,
    fps: Number,
    supportedScanTypes: Array,
  },
  data: () => ({
    parsedBarcode: <Results>[],
    formattedBarcode: "",
  }),
  mounted() {
    window.addEventListener("keydown", this.watchKeys);
    const html5QrcodeScanner = new Html5QrcodeScanner(
      "qr-code-full-region",
      {
        fps: this.fps ?? 10,
        qrbox: this.qrbox ?? 250,
        supportedScanTypes: this.supportedScanTypes ?? [],
      },
      false
    );
    html5QrcodeScanner.render(this.onScanSuccess, undefined);
  },
  methods: {
    async onScanSuccess(decodedText: string) {
      // reset results
      this.parsedBarcode = [];
      this.formattedBarcode = "";
      // Identify format and parse barcode
      let ansiOdetteResults = await BarcodeParser(decodedText, ANSIOdette);
      let gs1Results = await BarcodeParser(decodedText, GS1);
      if (Object.keys(ansiOdetteResults).length > 0) {
        this.parsedBarcode = ansiOdetteResults;
      } else if (Object.keys(gs1Results).length > 0) {
        this.parsedBarcode = gs1Results;
      }
      // Render our non-human-readable chacters for actual humans to see!
      this.formattedBarcode = BarcodeFormatter(decodedText);
    },
    watchKeys(ev: KeyboardEvent) {
      if (ev.code == "Escape") {
        this.parsedBarcode = [];
        this.formattedBarcode = "";
        return;
      }
      let scannedBarcode = ScannerOrKeyboardInput(ev);
      if (ev.code == "Enter") {
        this.onScanSuccess(scannedBarcode);
      }
    },
    async paste() {
      let clipboard = await navigator.clipboard.readText();
      this.onScanSuccess(clipboard);
    },
  },
});
</script>
