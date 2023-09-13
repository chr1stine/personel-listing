<script>
export default {
    data() {
        return {}
    }
}
</script>

<template>
    <div>
        <p class="bold-text">Поиск сотрудников</p>
        <input class="rounded--small border-1 secondary-text" type="text" placeholder="Введите id или имя">
    </div>
</template>

<style scoped>
    input {
        background-color: #FFFFFF;
        padding: 1em;
    }

    input:focus {
        outline: none;
    }
</style>