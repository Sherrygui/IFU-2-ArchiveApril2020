import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import zh from './lang/zh';
import en from './lang/en';
import store from './store'
import 'aos/dist/aos.css';

Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
    fallbackLocale: 'zh',
    locale: 'zh',
    messages: {
        zh,
        en,
    }
});

new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
}).$mount('#app');
