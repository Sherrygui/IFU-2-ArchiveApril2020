<template>
  <div class="dma-container">
    <Banner
      class="dma-banner"
      :title="$t('dma.banner.title')"
      :description="$t('dma.banner.description')"
      :buttonText="$t('dma.banner.buttonText')"
      :background="bannerImage"
      :buttonOnClick="() => $router.push('contact')"
    />
    <Tab
        :list="tabList"
    />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Button from '@/components/Button.vue';
import Tab from '@/components/Tab.vue';
import bannerImage from '@/assets/dma/dma_banner.png';
import Summer from '@/tabs/dma/summer.vue';
import Other from '@/tabs/dma/other.vue';

export default {
    name: 'Dma',
    components: {
        Banner,
        Tab,
    },
    data() {
        return {
            bannerImage,
        };
    },
    computed: {
        lang() {
            return localStorage.getItem("lang");
            //return ('zh'); // 现在默认中文
        },
        tabList() {
            return [
                // {
                //     title: 'IFU X DMA 夏校',
                //     content: Summer,
                //     color: '#C9D74A',
                // }, 
                {
                    title: this.$t('dma.banner.tabContent'),
                    content: Other,
                    color: '#F96291',
                    defaultShow: true,
                }
            ]
        },
    },
    methods: {
        navigateToQuestion() {
            this.$router.push('question');
        },
    },
    created() {
        this.$i18n.locale = this.lang
    }
};
</script>

<style lang="scss" scoped>
.dma-container{
    // font-family: PingFang SC;
}
.dma-banner {
    // color: white;
}
</style>
