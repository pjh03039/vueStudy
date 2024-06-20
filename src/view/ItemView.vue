<template>
    <div>
        <section>
            <!--사용자 정보-->
            <div class="user-container">
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${fetchedItemList.user}`">
                        {{ fetchedItemList.user }}
                    </router-link>
                    <div class="time">
                        <template>{{ fetchedItemList.time_ago }}</template>
                    </div>
                    <span>{{ fetchedItemList.karma }}</span>
                </div>
            </div>
            <!--사용자 정보-->
            <section>
                <h2>{{ fetchedItemList.title }}</h2>
            </section>
            <section>
                <!--질문 댓글-->
                <div v-html="fetchedItemList.content">

                </div>
            </section>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['fetchedItemList'])
    },
    created() {
        this.$store.dispatch('FETCH_ITEMLIST',this.$route.params.id);
    },
}
</script>

<style scoped>
.home {
    padding: 0 1.8rem;
}

.header-container {
    padding-top: 1rem;
}

.user-container {
    display: flex;
    align-items: center;
}

.fa-user-circle {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}

h3 {
    margin-bottom: 0.5rem;
    margin-left: 0.2rem;
}

.content {
    border: ridge;
    padding: 0.5rem;
}
</style>