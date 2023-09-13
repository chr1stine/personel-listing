<script>
import Search from '../components/Search.vue';
import Results from '../components/Results.vue';
import User from '../components/User.vue';
</script>

<template>
    <main class="box rounded border-2 shadowed">
        <div class="sidebar">
            <Search />
            <Results />
        </div>
        
        <User />
    </main>
</template>

<style scoped>
.box {
    background-color: #FFFFFF;
    background-color: #FDFDFD;
    min-height: 70%;

    display: flex;

    * {
        padding: 1.5em;
    }
}
</style>