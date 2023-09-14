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
  <div>
    <p class="bold-text">Результаты</p>
    <div>
      <p v-if="loading" class="above-all">зарузка</p>
      <p v-else-if="error" class="above-all">ошибка: {{ this.error }}</p>
      <p v-else-if="!searching" class="secondary-text">Начните поиск</p>
      <div v-else>
        <p v-if="this.users.length === 0" class="secondary-text">Ничего не найдено</p>
        <ul v-else class="list" v-for="user in users" :key="user.id">
          <li>
            <UserThumbnail :user="user" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
