<script>
export default {
  props: ['user'],
  methods: {
    async select() {
      this.$store.dispatch('selectNewId', { id: this.user.id })
    }
  },
  computed: {
    selected() {
      return this.$store.state.selectedId === this.user.id
    }
  }
}
</script>

<template>
  <div @click="select" class="container shadowed border-1 rounded">
    <img src="src/assets/profile.png" class="profile-pic" />
    <div class="captions-container" :class="{ selected }">
      <span class="bold-text">{{ user.username }}</span>
      <span class="secondary-text">{{ user.email }}</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 70px;
  background-color: #ffffff;
  width: 100%;
  overflow: hidden;
}
.profile-pic {
  width: 70px;
  border: none;
}
.captions-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2em;
  padding-left: 1em;
  flex: 1;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;

  * {
    max-width: 70%;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.selected {
  background-color: #e9ecef;
}
</style>
