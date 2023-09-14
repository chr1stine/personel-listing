<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      loading: null,
      error: null
    }
  },
  computed: {
    ...mapState({
      id: (state) => state.selectedId
    }),
    ...mapState({
      user: (state) => state.user
    })
  },
  watch: {
    id(id) {
      if (id) {
        this.loading = true
        this.$store
          .dispatch('loadUser', id)
          .catch((err) => {
            this.error = err
          })
          .finally(() => {
            this.loading = false
          })
      }
    }
  }
}
</script>

<template>
  <div class="user" :class="{ placeholder: !user }">
    <p v-if="loading" class="above-all">зарузка</p>
    <p v-else-if="error" class="above-all">ошибка: {{ error }}</p>
    <p v-else-if="!user" class="placeholder-text">
      Выберите сотрудника, чтобы посмотреть его профиль
    </p>
    <div v-else class="container">
      <img class="profile-pic border-3 rounded" src="src/assets/profile.png" />
      <div class="info">
        <p class="bold-text">{{ user.name }}</p>
        <p>
          <span class="bold-text"> email: </span>
          <span class="secondary-text"> {{ user.email }} </span>
        </p>
        <p>
          <span class="bold-text"> phone: </span>
          <span class="secondary-text"> {{ user.phone }} </span>
        </p>
        <p class="bold-text">О себе:</p>
        <p class="secondary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user {
  background-color: transparent;
}
.placeholder {
  background-color: white;
  border-left: #E0E0E0 solid 1px;
  width: 100%;
  height: 100%;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  gap: 2em;
}

.profile-pic {
  flex: 1;
  object-fit: contain;
  height: 100%;
  background-color: white;
}

.info {
  flex: 1;
}
</style>
