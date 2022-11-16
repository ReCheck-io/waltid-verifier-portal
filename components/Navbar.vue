<template>
  <header
    class="bg-white py-4 px-10 w-full flex items-center space-x-16 border-b-[1px] border-gray-light/25">
    <EbsiLogo size="small" />
  </header>
</template>

<script>
import EbsiLogo from './EbsiLogo.vue'

export default {
  name: 'Navbar',

  components: { EbsiLogo },
}
</script>
