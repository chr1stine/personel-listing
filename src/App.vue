<script setup>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Results from './components/Results.vue'
import UserDetail from './components/UserDetail.vue'
</script>

<template>
  <div class="container">
    <Header />

    <main class="box rounded border-2 shadowed">
      <div class="box__sidebar">
        <Search />
        <Results />
      </div>

      <div class="box__user">
        <UserDetail />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 3em;
  height: 100vh;
}
.box {
  background-color: #fdfdfd;
  min-height: 70%;

  display: flex;

  * {
    padding: 1.5em;
  }

  &__sidebar {
    width: 30%;
  }
  &__user {
    width: 70%;
  }
}
</style>
