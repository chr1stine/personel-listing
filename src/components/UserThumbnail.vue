<script>
    export default {
        data() {
            return {
                selected: false
            }
        }
    }
</script>

<template>
    <div class="container shadowed border-1 rounded">
        <img src="src/assets/profile.png" class="profile-pic">
        <div class="captions-container" :class="{selected}">
            <span class="bold-text">Caption</span>
            <span class="secondary-text">Sub-caption</span>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    height: 70px;
    background-color: #FFFFFF;
    width: 100%;
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
}
.selected {
    background-color: #e9ecef;
}
</style>