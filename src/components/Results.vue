<script>
import UserThumbnail from './UserThumbnail.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      loading: null,
      error: null
    }
  },
  computed: {
    ...mapState({
      searching: (state) => state.searchString
    }),
    ...mapGetters({
      users: 'getRelevantUsers'
    })
  },
  mounted() {
    this.loading = true
    this.$store
      .dispatch('loadUsers')
      .catch((err) => {
        this.error = err
      })
      .finally(() => {
        this.loading = false
      })
  },
  components: { UserThumbnail }
}
</script>

<template>
  <div class="scroll-wrapper">
    <p class="bold-text">Результаты</p>
    <div class="scroll-wrapper">
      <p v-if="loading" class="above-all"><span class="loader"></span></p>
      <p v-else-if="error" class="above-all">ошибка: {{ this.error }}</p>
      <p v-else-if="!searching" class="secondary-text">Начните поиск</p>
      <div class="scroll-wrapper" v-else>
        <p v-if="this.users.length === 0" class="secondary-text">Ничего не найдено</p>
        <ul v-else class="list">
          <li v-for="user in users" :key="user.id">
            <UserThumbnail :user="user" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-wrapper {
  height: 100%;
  overflow-y: hidden;
  padding-bottom: 2em;
}
.list {
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1em;
  overflow-y: scroll;
}
li:last-child {
  margin-bottom: 2em;
}
</style>
