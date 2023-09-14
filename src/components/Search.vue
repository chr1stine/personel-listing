<script>
export default {
  data() {
    return {
      tempName: '',
      thottling: null
    }
  },
  watch: {
    tempName(newValue) {
      if (this.throttling) {
        return
      }
      this.$store.dispatch('updateSearchString', newValue)
      this.throttling = true
      setTimeout(() => {
        this.throttling = false
        this.$store.dispatch('updateSearchString', newValue)
      }, 1000)
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
