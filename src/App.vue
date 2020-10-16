<template>
    <div id="app">
        <div id="app-inner">
            <Header />
            <router-view />
            <Footer />
        </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
    watch: {
        $route() {
            document.title = this.$t(`router.${this.$route.name}`);
        }
    },
    created() {
        document.title = this.$t(`router.${this.$route.name}`);
    },
    mounted() {
        this.$router.afterEach((to, from, next) => {
            window.scrollTo(0, 0)
        })
    },
};
</script>

<style lang="scss" scoped>
/* Global Style Variables */

// Colors
$teal: #34BBC9;
$darkpink: #F96191;
$lightpnk: #FFC2D6;
$purple: #CC8ABD;
$green: #C9D74A;
$orange: #FDA63B;
$darkblue: #54BEF5;
$lightblue: #A9DEFA;
$red: #FE4C31;
</style>

<style>
#app {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 0.5px;
    color: #202020;
    font-size: 16px;
}

#app-inner {
    max-width: 1440px;
    margin: auto;
}

section {
    margin: 0 auto;
    /* padding: 120px 130px; */
    padding: 80px 130px;
}

section h2 {
    font-weight: normal;
}

/* Responsive Design */
.desktop {
    display: block;
}

.mobile {
    display: none;
}

@media (max-width: 1024px) {
    #app {
        font-size: 14px;
    }
    
    .desktop {
        display: none !important;
    }

    .mobile {
        display: block;
    }

    section {
        padding: 15px 30px;
    }

    section > h2 {
        font-size: 23px;
    }
}
</style>
