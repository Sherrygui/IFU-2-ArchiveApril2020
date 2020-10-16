export const SET_LANG = 'SET_LANG'
const store = {
    namespaced: true,
    state: {
        lang: localStorage.getItem('lang') || 'zh' // 一开始是否缺少默认值？暂时加了一个前面为 null 时默认返回中文
    },
    actions: {
        setLang({commit}, lang) {
            commit('SET_LANG', lang)
        }
    },
    mutations: {
        [SET_LANG] (state, data) {
            state.lang  = data
        }
    }
}
export default store