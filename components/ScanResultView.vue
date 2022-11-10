<template>
  <div class="mx-auto w-full max-w-4xl px-4">
    <!-- VerifiableId -->
    <div class="overflow-hidden bg-white shadow rounded-[9px]">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Credential Information
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details.</p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div
            v-for="s in scheme"
            :key="s[0]"
            class="bg-white even:bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">{{ s[0] }}</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {{ credential.credentialSubject[s[1]] }}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div v-if="credential.verification_result" role="alert">
      <strong>The verification was successful</strong>
      Verification Policies
      <br />
      {{ JSON.stringify(credential.verification_result.policyResults) }}
    </div>
    <div v-if="credential.verification_result" role="alert">
      <strong>The verification failed</strong>
      Verification Policies
      <br />
      {{ JSON.stringify(credential.verification_result.policyResults) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScanResultView',

  props: ['credential'],

  data() {
    return {
      scheme: [
        ['Family Name', 'familyName'],
        ['First Name', 'firstName'],
        ['Date Of Birth', 'dateOfBirth'],
        ['Personal Identifier', 'personalIdentifier'],
        ['Name At Birth', 'nameAndFamilyNameAtBirth'],
        ['Place Of Birth', 'placeOfBirth'],
        ['Current Address', 'currentAddress'],
        ['Gender', 'gender'],
      ],
    }
  },

  mounted() {
    console.log(this.credential)
  },
}
</script>
