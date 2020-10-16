<template>
    <header>
        <div class="header-inner">
            <img class="desktop" src="../assets/header_title.png" />
            <img class="mobile" src="../assets/header/logo_mobile.png" />
            <p class="mobile">INTERNATIONAL FAMILY UNION</p>
            <p class="mobile">国际家长汇</p>
            <div class="header-menu">
                <router-link class="router-link" to="/" exact>{{ $t('header.home') }}</router-link>
                <router-link class="router-link" to="/about">{{ $t('header.about') }}</router-link>
                <div class="service">
                    <a :class="isServicePath ? 'router-link-active' : ''" @click="toggleServiceMenu">
                        {{ $t('header.service') }}
                        <div class="arrow desktop" />
                        <div class="close-arrow mobile" v-if="showServiceMenu" />
                        <div class="open-arrow mobile" v-else />
                    </a>
                    <div class="service-menu desktop">
                        <div class="service-menu-separator" />
                        <div class="service-menu-inner">
                            <router-link class="router-link" to="/totoro">{{ $t('header.totoro') }}</router-link>
                            <router-link class="router-link" to="/isic">{{ $t('header.isic') }}</router-link>
                            <router-link class="router-link" to="/dma">{{ $t('header.dma') }}</router-link>
                        </div>
                    </div>
                </div>
                <div class="service-menu-mobile mobile" v-if="showServiceMenu">
                    <router-link to="/totoro">{{ $t('header.totoro') }}</router-link>
                    <router-link to="/isic">{{ $t('header.isic') }}</router-link>
                    <router-link to="/dma">{{ $t('header.dma') }}</router-link>
                </div>
                <router-link class="router-link" to="/contact">{{ $t('header.contact') }}</router-link>
                <router-link class="router-link" to="/donation">{{ $t('header.donation') }}</router-link>
                <div class="desktop">
                    <span :class="activeLang('zh')" @click="changeLang('zh')">中文</span>
                    <span> / </span>
                    <span :class="activeLang('en')" @click="changeLang('en')">EN</span>
                </div>
                <div class="mobile change-lang">
                    <div :class="activeLang('zh')" @click="changeLang('zh')">中文</div>
                    <div :class="activeLang('en')" @click="changeLang('en')">EN</div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Header',
    data() {
        return {
            showServiceMenu: false,
        };
    },
    computed: {
        currentPath() {
            return this.$route.path;
        },
        isServicePath() {
            return (this.currentPath === '/totoro' || this.currentPath === '/isic' || this.currentPath === '/dma');
        },
    },
    methods: {
        ...mapActions('lang', ['setLang']),
        changeLang(lang) {
            localStorage.setItem('lang', lang)
            this.setLang(localStorage.getItem('lang'))
            this.$i18n.locale = lang;
            document.title = this.$t(`router.${this.$route.name}`);
        },
        toggleServiceMenu() {
            this.showServiceMenu = !this.showServiceMenu;
        },
        activeLang(lang) {
            return (this.$i18n.locale === lang) ? 'active' : '';
        }
    },
    watch: {
        $route(to, from) {
            this.showServiceMenu = false;
        }
    },
};
</script>

<style scoped>
header {
    width: 100%;
    border-bottom: 1px solid #E8E9ED;
}

.header-inner {
    width: 100%;
    height: 111px;
    margin: auto;
    padding: 0px 130px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-menu {
    width: 44%;
    display: flex;
    justify-content: space-around;
}

.service {
    position: relative;
}

.service-menu {
    display: none;
    position: absolute;
}

.service-menu-separator {
    height: 51px;
    position: relative;
    left: -100px;
}

.service-menu-inner {
    width: 259px;
    height: 167px;
    left: -100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    background-color: #DDF2FD;
}

.service:hover .service-menu {
    display: block;
}

.arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 8px solid #202020;
    transform: rotateZ(180deg);
}

.service:hover .arrow {
    transform: rotateZ(-90deg);
}

a {
    height: 33px;
    text-decoration: none;
    color: #202020;
}

.router-link:hover {
    box-sizing: border-box;
    border-bottom: 3px solid #54BEF5;
}

.router-link-active {
    color: #54BEF5;
}

.desktop .active {
    color: #54BEF5;
}

span{
    cursor: pointer;
}
</style>

<style scoped>
/* Mobile style */
@media (max-width: 1024px) {
    .header-inner {
        flex-direction: column;
        padding: 0px;
        width: 100%;
        height: 100%;
    }

    .header-menu {
        width: 100%;
        height: 100%;
        text-align: center;
        display: block;
    }

    .router-link:hover {
        border-bottom: none;
    }

    .service-menu-mobile {
        background: #DDF2FD;
    }

    .service,
    a {
        display: block;
        width: 100%;
        text-align: center;
        line-height: 54px;
        height: 54px;
    }

    .service-menu {
        left: 50px;
    }

    .open-arrow,
    .close-arrow {
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 8px solid #202020;
    }

    .open-arrow {
        transform: rotateZ(180deg);
    }

    .close-arrow {
        transform: rotateZ(-90deg);
    }

    .router-link-active {
        color: black;
        background: #A9DEFA;
        border-bottom: none;
    }

    .change-lang {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .change-lang div {
        width: 50%;
        height: 54px;
        line-height: 54px;
        text-align: center;
    }

    .change-lang .active {
        background: #DDF2FD;
    }
}
</style>
