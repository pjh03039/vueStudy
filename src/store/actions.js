import { fetchList, fetchUser, fetchItem } from "./../api/index.js"

export default {
    async FETCH_LIST(context, routerName) {
        const res = await fetchList(routerName);
        context.commit('SET_LIST', res.data);
    },
    async FETCH_USERLIST(context, id) {
        const res = await fetchUser(id);
        context.commit('SET_USERLIST', res.data);
    },
    async FETCH_ITEMLIST(context, id) {
        const res = await fetchItem(id);
        context.commit('SET_ITEMLIST', res.data);
    },
}