<template>
  <div class="ai-container">
   <Banner
      :title="$t('AI.banner.title')"
      :buttonText="$t('AI.banner.buttonText')"
      :background="bannerImage"
      :bannerList="bannerList"
    />
    <section class="part-1">
        <div class="img">
            <img :src="infoImage" alt="">
        </div>
        <div class="container">
            <h2 style="padding: 0 0 20px 28px">{{ $t('AI.introduce.title') }}</h2>
            <Introduction :text="$t('AI.introduce.text')" :image="lang === 'zh' ? aiIntroImage1 : aiIntroImage2" />
        </div>
    </section>
    <div class="part-2">
        <section class="container">
            <h2>{{ $t('AI.info.title') }}</h2>
            <Information
            :image="infoImage"
            :leftContent="leftContent"
            :rightContent="rightContent"/>
        </section>
        
    </div>
    <div class="part-3">
        <section class="container">
            <h2>{{ $t('AI.content.title') }}</h2>
            <Content :text="text" :contentList="contentList"/>
        </section>
    </div>
  </div>
</template>
<script>
import Banner from '@/components/Banner.vue';
import bannerImage from '@/assets/course/ai_banner.png';
import aiIntroImage1 from '@/assets/course/part-1.png';
import aiIntroImage2 from '@/assets/course/part-2.png';
import Introduction from '@/course/Introduction.vue';
import Information from '@/course/Information.vue';
import infoImage from '@/assets/course/ai.png';
import one from '@/assets/course/a1.png';
import Content from '@/course/Content.vue';
import two from '@/assets/course/a2.png';
import three from '@/assets/course/a3.png';
import four from '@/assets/course/a4.png';
import five from '@/assets/course/a5.png';
import { mapState } from 'vuex'
export default {
    name: 'AI',
    components: {
        Banner,
        Introduction,
        Information,
        Content,
    },
    data() {
        return {
            bannerImage,
            aiIntroImage1,
            aiIntroImage2,
            infoImage,
            text: 'Computer programming code runs your devices and the world. Our Programming courses prepare students with the skills they need to develop their own apps and games in languages such as C#, Java, and Swift. In the AI and Machine Learning course, students will take a deep dive into the complex algorithms that are making computers smarter than ever. Use neural nets to finally beat that game you’ve never been able to or improve projects using computer vision to find patterns. No programming experience is required, but a strong understanding of algebra and comfort with mathematics is highly recommended.\n\nThe Teen Experience: Since 2002, Digital Media Academy has been encouraging and inspiring teens to become the next generation of developers, animators, filmmakers, photographers, designers and engineers. In addition to developing teens’ interests and passions for the latest in new tech, our camps foster personal growth, confidence, and independence; preparing students for life beyond high school and college.',
            contentList: [{
                text: '探索人工智能：什么是人工智能，它是如何工作的，它对我们有什么影响?\n 训练你的第一个机器学习模型\n 使用条件语句和循环语句进行编程\n Python 语言进行编程的基础:条件和循环\n 编程时列表和表格的使用\n 使用模型建造一个简单的聊天机器人',
                image: one,
                title: '第一部分',
                className: 'one'
            }, {
                text: '基于数据集构建预测器\n 神经网络的建立与训练\n 测试与评估预测结果\n 设计可自动进行游戏的程序的基础知识\n 通过随机方法（random play）生成样本数据集\n 训练模型并生成新的样本数据',
                image: two,
                title: '第二部分',
                className: 'two'
            }, {
                text: '确定第一周的结课课题范围?\n 获取、整理并准备所有数据\n 探索人工智能的更多应用:图像和自然语言处理\n 深入研究并调整示例项目，选择另一个主题重新进行训练\n 探索神经网络和深度学习的原理',
                image: three,
                title: '第三部分',
                className: 'three'
            }, {
                text: '探索图像识别的基础和应用?\n MNIST 数据集简介以及数字分类器的构建\n 将字体分类器适用于传统图像分类器\n 探索 Tensorflow 的高级功能\n Tensorflow 的可视化和 Tensorflow 分析',
                image: four,
                title: '第四部分',
                className: 'four'
            }, {
                text: '使用迁移学习和图像识别技术来玩游戏?\n 使用网络摄像机收集数据\n 探索 AI 工具并设定课题目标\n 为结课课题开发模型并进行训练\n 测试，迭代和设计后续步骤以改进结果',
                image: five,
                title: '第五部分',
                className: 'five'
            }],
        };
    },
    computed: {
        ...mapState('lang', ['lang']),
        bannerList() {
            return [{
                name: this.$t('AI.banner.name1'),
                text: this.$t('AI.banner.text1'),
            }, {
                name: this.$t('AI.banner.name2'),
                text: this.$t('AI.banner.text2'),
            }, {
                name: this.$t('AI.banner.name3'),
                text: this.$t('AI.banner.text3'),
            }, {
                name: this.$t('AI.banner.name4'),
                text: this.$t('AI.banner.text4'),
            }, {
                name: this.$t('AI.banner.name5'),
                text: this.$t('AI.banner.text5'),
            }, {
                name: this.$t('AI.banner.name6'),
                text: this.$t('AI.banner.text6'),
            }]
        },
        leftContent() {
            return [{
                text: this.$t('AI.info.leftContent.text1'),
            }, {
                text: this.$t('AI.info.leftContent.text2'),
            }, {
                text: this.$t('AI.info.leftContent.text3'),
            }, {
                text: this.$t('AI.info.leftContent.text4'),
            }]
        },
        rightContent() {
            return [{
                text: this.$t('AI.info.rightContent.text1'),
            }, {
                text: this.$t('AI.info.rightContent.text2'),
            }, {
                text: this.$t('AI.info.rightContent.text3'),
            }, {
                text: this.$t('AI.info.rightContent.text4'),
            }, {
                text: this.$t('AI.info.rightContent.text5'),
            }, {
                text: this.$t('AI.info.rightContent.text6'),
            }, {
                text: this.$t('AI.info.rightContent.text7'),
            }]
        }
    },
    created() {
        this.$i18n.locale = this.lang;
    }
};
</script>
<style lang="scss" scoped>
section{
    padding: 0;
}
h2{
    margin: 0;
}
.part-1{
    padding-top: 70px;
    .img{
        display: none;
    }
}
.container{
  max-width: 1180px;
  margin: 0 auto;
}
.part-2{
    padding-top: 180px;
    padding-bottom: 170px;
    background: url('../assets/bg.png') no-repeat;
    background-size: cover;
    position: relative;
}
</style>
<style lang="scss" scoped>
@media(max-width: 1024px) {
    .part-1{
        .img{
            display: block;
            img{
                width: 100%;
            }
            border-bottom: 15px solid #FE4C31;
        }
        .container{
            padding-top: 50px;
        }
    }
    .part-2{
        padding: 80px 30px;
    }
    .part-3{
        padding: 30px !important;
    }
}
</style>
