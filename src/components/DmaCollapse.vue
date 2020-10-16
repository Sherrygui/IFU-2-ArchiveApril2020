<template>
    <div class="collapse">
        <div class="header" @click="toggle" :style="{ background: `${backgroundColor}` }">
            <div class="arrow" :class="show ? 'arrow-up' : 'arrow-down' "></div>
            <div :class="lang === 'zh' ? 'title-zh' : 'title-en'" class="title-en">{{ title }}</div>
        </div>
        <div v-if="show || screenWidth > 1024" class="container">
            <slot class="test"/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Collapse',
    props: {
        title: String,
        backgroundColor: String,
        defaultShow: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapState('lang', ['lang']),
        lang() {
            // return localStorage.getItem("lang");
            return ('zh'); // 现在默认中文
        }
    },
    data() {
        return {
            show: this.defaultShow,
            screenWidth: document.body.clientWidth,
        };
    },
    methods: {
        toggle() {
            this.show = !this.show;
        },
    },
};
</script>

<style scoped>
.collapse{
    width: 100%;
}
.header {
    width: 100%;
    min-height: 85px;
    float: right;
    font-size: 24px;
    display: none;
    color: #fff;
}
.arrow-down {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #fff;
}
.arrow{
    display: inline-block;
    margin-right: 20px;
}
.arrow-up{
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-top: 10px solid #fff;
}
.title-en{
    display: inline-block;
    margin-right: 30px;
}
.test{
    padding-top: 100px;
}
</style>
<style lang="scss" scoped>
@media(max-width: 1024px) {
    .collapse{
        min-height: 85px;
    }
    .header{
        width: 100%;
        min-height: 85px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 24px;
        color: #fff;
        float: inherit;
    }
    .title-en{
        font-size: 18px;
        text-align: right;
        white-space: pre-line;
    }
}
</style>
