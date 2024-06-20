import ListItem from './../components/ListView.vue';
import bus from '@/utils/bus.js';

export default function CreateListView(name) {
    return {
        name,
        created() {
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name);
        },
        mounted() {
            bus.$emit('end:spinner');
        },
        render(h) {
            return h(ListItem);
        },
    }
}