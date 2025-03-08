<template>
    <p
        v-html="formattedBarcode"
        style="grid-column: span 2; word-wrap: break-word"
    ></p>
    <div id="qr-code">
        <div id="qr-code-full-region"></div>
    </div>
    <div id="result">
        <h2
            v-if="formattedBarcode && Object.keys(parsedBarcode).length <= 0"
            v-html="formattedBarcode"
            style="grid-column: span 2"
        ></h2>
        <template v-for="ai in parsedBarcode" :key="ai.identifier">
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
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Html5QrcodeScanner } from "html5-qrcode";
import { type AIList } from "../types/ApplicationIdentifierType";
import { BarcodeParser } from "../uses/BarcodeParser";
import { BarcodeFormatter } from "../uses/BarcodeFormatter";
import { Odette } from "../uses/ApplicationIdentifiers.Odette";
import { GS1 } from "../uses/ApplicationIdentifiers.GS1";

export default defineComponent({
    name: "Barcodes",
    props: {
        qrbox: Number,
        fps: Number,
        supportedScanTypes: Array,
    },
    data: () => ({
        parsedBarcode: <AIList>{},
        formattedBarcode: "",
    }),
    mounted() {
        // this.onScanSuccess('[)>061YBEN3YYAFAI22YHELLO765YWORLDQ0002014MYAFAI10ZPART77ZPART47ZPACK')
        // this.onScanSuccess('[)>06PHK83 03666 AA14K567+87656718LABCDEF1T4082822BKLT6429D24110612117H44 145 536 300022KHELLO WORLD9H1234567898765HABCDEF+JHZPART3ZPART10ZPART77ZPART')
        // this.onScanSuccess('[)>06PHK83 03666 AA1T4082822BKLT6429D241106121112E11BBBBBB999.9UUZPART')
        // this.onScanSuccess('[)>0624B1234555LCV230WEGBD241106121112E11BBBBBB999.9UUZPART')
        // this.onScanSuccess('[)>0627Q100.328Q100.329Q100.330Q100.331QGBP4Q12.4550PHK83 03666 AA+311NHello world!.1T408282227D20241112202412015BHELLO8D202501261732146BKLT642923D20241106ZPART')
        // this.onScanSuccess(']d200123456789123456789')
        // this.onScanSuccess('00123456789123456789')
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
        html5QrcodeScanner.render(this.onScanSuccess, undefined);
    },
    methods: {
        onScanSuccess(decodedText: string) {
            // reset results
            this.parsedBarcode = <AIList>{};
            this.formattedBarcode = "";
            // Identify format and parse barcode
            if (new RegExp(/^\[\)>\x1e06\x1d.*\x1e\x04$/).test(decodedText)) {
                this.parsedBarcode = BarcodeParser(decodedText, Odette);
            } else if (new RegExp(/^\]d2.*/).test(decodedText)) {
                this.parsedBarcode = BarcodeParser(decodedText, GS1);
            } else {
                // Use Odette as default
                this.parsedBarcode = BarcodeParser(decodedText, Odette);
            }
            // Render our non-human-readable chacters for actual humans to see!
            this.formattedBarcode = BarcodeFormatter(decodedText);
        },
    },
});
</script>
