import { mapGetters } from 'vuex';

export default {
    async created() {
        // this.$store.dispatch("FETCH_LIST", this.$route.name);
    },
    computed: {
        ...mapGetters({
            newsList: 'fetchedList'
        })
    },
    
}