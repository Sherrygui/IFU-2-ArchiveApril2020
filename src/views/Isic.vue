<template>
    <div class="isic">
        <Banner
            :title="$t('isic.banner.title')"
            :description="$t('isic.banner.description')"
            :buttonText="$t('isic.banner.buttonText')"
            :background="bannerImage"
            externalLink="https://www.wjx.top/jq/48243970.aspx"
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
import bannerImage from '@/assets/isic/banner.png';
import IsicMember from '@/tabs/isic/IsicMember.vue';
import RegularMember from '@/tabs/isic/RegularMember.vue';

export default {
    name: 'Isic',
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
        tabList() {
            return ([{
                title: this.$t('isic.tabList.regularMember'),
                content: RegularMember,
                color: '#C9D74A',
                defaultShow: true,
            }, {
                title: this.$t('isic.tabList.ifuIsicMember'),
                content: IsicMember,
                color: '#F96291',
            }])
        },
    },
};
</script>
