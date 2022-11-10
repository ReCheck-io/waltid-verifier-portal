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

<style lang="scss" scoped>
.nav-link {
  @apply pt-6 pb-[22px] -mb-px text-base font-normal text-gray-base border-b-4 border-transparent hover:text-gray-dark hover:border-b-4 hover:border-dark transition-all ease-in;

  &.nuxt-link-exact-active {
    @apply text-gray-dark border-dark;
  }
}
</style>
