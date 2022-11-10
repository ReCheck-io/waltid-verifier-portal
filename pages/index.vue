<template>
  <div class="flex flex-col w-full h-full">
    <Navbar />
    <main class="mt-8 w-full h-full flex flex-col items-center">
      <h2 class="mb-8 text-2xl text-gray-dark">
        Scan QR Code to verify Credential
      </h2>

      <BaseButton @click="isScanning = true" v-if="!isScanning">
        Start Scanning
      </BaseButton>

      <div class="mb-12 max-w-[800px]" v-if="isScanning">
        <QrcodeStream @decode="onDecode" @init="onInit"></QrcodeStream>
      </div>

      <ScanResultView
        class="my-8"
        v-if="!isScanning && decodedCredential"
        :credential="decodedCredential" />
    </main>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import ScanResultView from '../components/ScanResultView.vue'
import BaseButton from '../components/common/BaseButton.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    ScanResultView,
    QrcodeStream,
    BaseButton,
    Navbar,
  },

  data() {
    return {
      currentYear: new Date().getFullYear(),

      isScanning: false,
      decodedCredential: null,

      vidSchemaUri:
        'https://api.preprod.ebsi.eu/trusted-schemas-registry/v1/schemas/0xb77f8516a965631b4f197ad54c65a9e2f9936ebfb76bae4906d33744dbcc60ba',
      bidSchemaUri:
        'https://raw.githubusercontent.com/walt-id/waltid-ssikit-vclib/master/src/test/resources/schemas/EuropeanBankIdentity.json',
    }
  },

  methods: {
    async onInit(promise) {
      try {
        await promise
      } catch (e) {
        console.error(e)
      }
    },

    async onDecode(content) {
      if (content) {
        this.isScanning = false
        const tempData = JSON.parse(content, null, 4)
        if (tempData && tempData.type && tempData.credentialSubject) {
          this.decodedCredential = tempData
        }
      }
    },
  },

  async asyncData({ $axios }) {
    const wallets = await $axios.$get('/verifier-api/wallets/list')
    return { wallets }
  },
}
</script>
