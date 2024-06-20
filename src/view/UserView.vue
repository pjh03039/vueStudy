<template>
    <div class="container">
        <h2>User Profile</h2>
        <!--사용자 정보-->
        <user-profile>
            <div slot="username">{{ fetchedUserList.id }}</div>
            <span slot="time">{{ 'Joined' + fetchedUserList.created }}</span>
            <span slot="karma">{{ fetchedUserList.karma }}</span>
        </user-profile>
        <!--사용자 정보-->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue';
export default {
    components: {
        UserProfile,
    },
    computed: {
        ...mapGetters(['fetchedUserList']),
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_USERLIST', itemId);
    },
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
}

.fa-user {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}
</style>