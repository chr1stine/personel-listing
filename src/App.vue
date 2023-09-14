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
      <div>
        <Search />
        <Results />
      </div>

      <UserDetail />
    </main>
  </div>
</template>

<style scoped>
.container {
  margin: 3em;
  height: 100vh;
}
.box {
  background-color: #ffffff;
  background-color: #fdfdfd;
  min-height: 70%;

  display: flex;

  * {
    padding: 1.5em;
  }
}
</style>
