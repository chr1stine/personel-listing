<script>
import UserThumbnail from './UserThumbnail.vue';

export default {
    data() {
        return {
            searching: false,
            found: false
        };
    },
    components: { UserThumbnail }
}
</script>

<template>
    <div>
        <p class="bold-text">Результаты</p>
        <p v-if="!searching" class="secondary-text">Начните поиск</p>
        <div v-else>
            <p v-if="!found" class="secondary-text">Ничего не найдено</p>
            <ul v-else>
                <li>
                    <div>
                        <UserThumbnail />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>