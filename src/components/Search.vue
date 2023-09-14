<script>
export default {
  data() {
    return {
      tempName: ''
    }
  },
  watch: {
    tempName(newValue) {
      this.$store.dispatch('updateSearchString', newValue)
    }
  }
}
</script>

<template>
  <div>
    <p class="bold-text">Поиск сотрудников</p>
    <input
      v-model="tempName"
      class="rounded--small border-1 secondary-text"
      type="text"
      placeholder="Введите id или имя"
    />
  </div>
</template>

<style scoped>
input {
  background-color: #ffffff;
  padding: 1em;
}

input:focus {
  outline: none;
}
</style>
