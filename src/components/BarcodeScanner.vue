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
  <a @click="pasteButton()" class="paste">📋</a>
  <a v-if="serialSupported" @click="webSerialUserConnect()" class="serial">🔌</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Html5QrcodeScanner } from "@taluks/html5-qrcode";
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
    serialSupported: false,
    port: <SerialPort>{},
    open: false,
    serialOutput: "",
  }),
  async mounted() {
    window.addEventListener("keypress", this.watchKeys);
    window.addEventListener("paste", this.watchPaste);
    if ("serial" in navigator) {
      this.serialSupported = true
      navigator.serial.addEventListener("connect", (event) => {
        console.log("a serial port with permission were connected", event);
        this.webSerialAutoFind;
      });
      navigator.serial.addEventListener("disconnect", (event) => {
        console.log("a serial port with permission were disconnected", event);
        if (this.port === (event.target as any) && this.open) {
          this.port.close();
        }
      });
    }
    this.webSerialAutoFind();
    const config = {
      fps: this.fps ? this.fps : 10,
      qrbox: this.qrbox ? this.qrbox : 250,
      supportedScanTypes: [],
    };
    const html5QrcodeScanner = new Html5QrcodeScanner(
      "qr-code-full-region",
      config,
      false,
    );
    html5QrcodeScanner.render(this.parseBarcode, undefined);
  },
  methods: {
    async webSerialAutoFind() {
      if (this.open) {
        await this.port.close();
      }
      const usbVendorId = parseInt(localStorage.getItem("usbVendorId") ?? "");
      const usbProductId = parseInt(localStorage.getItem("usbProductId") ?? "");
      if (!usbVendorId || !usbProductId) {
        return;
      }
      const ports = await navigator.serial.getPorts();
      const port = ports.find((p: any) => {
        const info = p.getInfo();
        return (
          info.usbVendorId === usbVendorId && info.usbProductId === usbProductId
        );
      });
      if (port) {
        this.port = port;
        this.webSerialOpenRead();
      }
    },
    async webSerialUserConnect() {
      if ("serial" in navigator) {
        if (this.open) {
          await this.port.close();
        }
        this.port = await navigator.serial.requestPort();
        const portInfo = this.port.getInfo();
        localStorage.setItem("usbVendorId", portInfo.usbVendorId + "");
        localStorage.setItem("usbProductId", portInfo.usbProductId + "");
        this.webSerialOpenRead();
      } else {
        console.log("Browser does not support webserial");
      }
    },
    async webSerialOpenRead() {
      await this.port.open({ baudRate: 9600 });
      this.open = true;
      console.log("Device connected:" + JSON.stringify(this.port.getInfo()));
      if (this.port.readable) {
        const reader = this.port.readable.getReader();
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) {
              break;
            }
            this.serialOutput = this.serialOutput + value.reduce(
              (acc: string, ele: number) => acc + String.fromCharCode(ele),
              "",
            );
            if (value.includes(13)) {
              this.parseBarcode(this.serialOutput);
              this.serialOutput = ""
            }
          }
        } catch (error) {
          reader.releaseLock();
          console.log(error);
        } finally {
          reader.releaseLock();
        }
      }
    },
    async parseBarcode(decodedText: string) {
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
    async watchKeys(ev: KeyboardEvent) {
      if (ev.code == "Escape") {
        this.parsedBarcode = [];
        this.formattedBarcode = "";
        return;
      }
      let scannedBarcode = await ScannerOrKeyboardInput(ev);
      if (ev.code == "Enter") {
        this.parseBarcode(scannedBarcode);
      }
    },
    watchPaste(ev: ClipboardEvent) {
      if (ev.isTrusted) {
        let clipboardText = ev.clipboardData?.getData("text");
        if (typeof clipboardText === "string") {
          this.parseBarcode(clipboardText);
        }
      }
    },
    async pasteButton() {
      let clipboard = await navigator.clipboard.readText();
      this.parseBarcode(clipboard);
    },
  },
});
</script>
