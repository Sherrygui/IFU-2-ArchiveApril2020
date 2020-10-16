<template>
    <div>
        <Banner
            title="常见问题"
            buttonText="联系我们"
            :image='bannerImage'
        />
        <Tab
            :list="tabList"
        />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Tab from '@/components/Tab.vue';
import Course from '@/tabs/question/Course.vue';
import Life from '@/tabs/question/Life.vue';
import More from '@/tabs/question/More.vue';
import bannerImage from '@/assets/question/faq.png';


export default {
    name: 'Question',
    components: {
        Banner,
        Tab,
    },
    data() {
        return {
            bannerImage,
            tabList: [{
                title: '课程与师资',
                color: '#34BBC9',
                content: Course,
            }, {
                title: '生活与医疗',
                color: '#C9D74A',
                content: Life,

            }, {
                title: '更多问题',
                color: '#F96291',
                content: More,
            }],
        };
    },
};
</script>
