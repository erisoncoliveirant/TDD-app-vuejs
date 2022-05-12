<template>
  <div>
    <VUserSearchForm
      @submitted="searchUser"
    />
    <VUserProfile :user="user" />
  </div>
</template>

<script>
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
import { mapState } from 'vuex'

export default {
  name: 'UserView',
  components: {
    VUserSearchForm,
    VUserProfile
  },
  methods: {
    searchUser (username) {
      this.$store.dispatch('SEARCH_USER', { username })
    }
  },
  computed: {
    ...mapState({
      user: 'user'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
