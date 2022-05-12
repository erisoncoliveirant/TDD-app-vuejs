<template>
  <form @submit.prevent="$emit('submitted', username)">
    <el-input
      placeholder="Pesquise o usuário"
      v-model="username"
      class="search-form__input"
      required
    >
      <el-button
        class="search-form__button"
        native-type="submit"
        slot="append"
        icon="el-icon-search"
      />
    </el-input>
  </form>
</template>

<script>
export default {
  name: 'VUserSearchForm',
  data () {
    return {
      username: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
