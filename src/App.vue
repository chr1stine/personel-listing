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
}
.box {
  background-color: #fdfdfd;
  height: 70vh;

  display: flex;

  * {
    padding: 1.5em;
  }

  &__sidebar {
    width: 30%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  &__user {
    width: 70%;
  }
}
</style>
