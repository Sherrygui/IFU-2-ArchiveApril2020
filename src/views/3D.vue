<template>
  <div class="3D-container">
   <Banner
      :title="$t('modeling.banner.title')"
      :buttonText="$t('modeling.banner.buttonText')"
      :background="bannerImage"
      :bannerList="bannerList"
    />
    <section class="part-1">
        <div class="img">
            <img :src="infoImage" alt="">
        </div>
        <div class="container">
            <h2 style="padding: 0 0 20px 28px">{{ $t('modeling.introduce.title') }}</h2>
            <Introduction :text="$t('modeling.introduce.text')" :image="lang === 'zh' ? aiIntroImage1 : aiIntroImage2" />
        </div>
    </section>
    <div class="part-2">
        <section class="container">
            <h2>{{ $t('modeling.info.title') }}</h2>
            <Information
            :image="infoImage"
            :leftContent="leftContent"
            :rightContent="rightContent"/>
        </section>
    </div>
    <section class="container part-3">
      <h2>{{ $t('modeling.content.title') }}</h2>
      <Content :text="text" :contentList="contentList"/>
    </section>
  </div>
</template>
<script>
import Banner from '@/components/Banner.vue';
// import bannerImage from '@/assets/course/3D_banner.png';
import bannerImage from '@/assets/course/ai_banner.png';
import aiIntroImage1 from '@/assets/course/part-1.png';
import aiIntroImage2 from '@/assets/course/part-2.png';
import Introduction from '@/course/Introduction.vue';
import Information from '@/course/Information.vue';
import infoImage from '@/assets/course/3d.png';
import one from '@/assets/course/d1.png';
import Content from '@/course/Content.vue';
import two from '@/assets/course/d2.png';
import three from '@/assets/course/d3.png';
import four from '@/assets/course/d4.png';
import five from '@/assets/course/d5.png';
import { mapState } from 'vuex'

export default {
    name: 'The3D',
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
            text: 'Our 3D Modeling + Design camps prepare students with the skills they will need working in a professional 3D modeling, animation, and design environment. The 3D Modeling & Animation Academy is the perfect choice for a student looking to dive-in into creating and animating 3D models. You’ll learn how to use Autodesk Maya to model your own character in the first week and animate pre-rigged characters into a short sequence the next.\n\nThe Teen Experience: Since 2002, Digital Media Academy has been encouraging and inspiring teens to become the next generation of developers, animators, filmmakers, photographers, designers, and engineers. In addition to developing teens’ interests and passions for the latest in new tech, our camps foster personal growth, confidence, and independence; preparing students for life beyond high school and college.',
            contentList: [{
                text: '界面和摄像机使用简介对象交互的基础知识\n 多边形基本体\n 使用平移，旋转和缩放操纵器\n 对象模式与组件模式\n 纹理，光照和渲染简介\n 组件材料，添加纹理和放置灯光\n 高级建模技术与标准基本的 UV，纹理贴图知识\n 基本角色建模\n 高级 UV 纹理布局',
                image: one,
                title: '第一部分',
                className: 'one',
            }, {
                text: '介绍如何使用 Mudbox 进行雕塑和绘画\n 在 Mudbox 软件中对盒子模型对象进行雕刻\n 使用 Arnold 渲染器和 aiStandardSurface 着色器进行打光和渲染\n 规划结课课题\n 为结课课题收集参考资料，创建对象\n 学生将开始处理所有次要或背景对象\n 模型的清理和打磨纹理以及照明',
                image: two,
                title: '第二部分',
                className: 'two',
            }, {
                text: '完成最终渲染\n 提交工作和共享资源\n 界面和摄像机使用加深\n 加深Maya 用户界面主要加深\n 加深Maya 用户界面主要加深\n 如何创建多边形基本体，使用“平移”，“旋转”和“缩放”操纵器\n 自定义窗口布局：演示如何自定义和编排 Maya 中的多个可用窗口\n 练习如何设置关键帧，控制插值，并传达重量和时间等信息',
                image: three,
                title: '第三部分',
                className: 'three',
            }, {
                text: '木偶角色简介?\n 准备好开始制作绑定动画\n 姿势动画：了解什么样的姿势是优秀的姿势\n 使用 5 个姿势讲述一个故事\n 学生将测试他们有效地塑造角色并融合这些姿势的能力\n 角色集：如何设置关键帧\n 高级版用五个姿势讲故事或制作一个循环\n 如何拍摄有效的参考镜头\n 如何规划结课课题：前期制作\n 结课课题准备',
                image: four,
                title: '第四部分',
                className: 'four',
            }, {
                text: '新场景：学生将使用新场景核对表以确保制作成功?\n 完成结课课题\n 添加道具和风景\n 打磨关键姿势\n 创建细分多张（小原画）\n 完成动画制作\n 使用或移除道具\n 渲染或动画预览\n 创建演示短片\n 总结，提问和演示\n 参加展示日',
                image: five,
                title: '第五部分',
                className: 'five',
            }],
        };
    },
    computed: {
        ...mapState('lang', ['lang']),
        bannerList() {
            return [{
                name: this.$t('modeling.banner.name1'),
                text: this.$t('modeling.banner.text1'),
            }, {
                name: this.$t('modeling.banner.name2'),
                text: this.$t('modeling.banner.text2'),
            }, {
                name: this.$t('modeling.banner.name3'),
                text: this.$t('modeling.banner.text3'),
            }, {
                name: this.$t('modeling.banner.name4'),
                text: this.$t('modeling.banner.text4'),
            }, {
                name: this.$t('modeling.banner.name5'),
                text: this.$t('modeling.banner.text5'),
            }, {
                name: this.$t('modeling.banner.name6'),
                text: this.$t('modeling.banner.text6'),
            }]
        },
        leftContent() {
            return [{
                text: this.$t('modeling.info.leftContent.text1'),
            }, {
                text: this.$t('modeling.info.leftContent.text2'),
            }, {
                text: this.$t('modeling.info.leftContent.text3'),
            }, {
                text: this.$t('modeling.info.leftContent.text4'),
            }, {
                text: this.$t('modeling.info.leftContent.text5'),
            }]
        },
        rightContent() {
            return [{
                text: this.$t('modeling.info.rightContent.text1'),
            }, {
                text: this.$t('modeling.info.rightContent.text2'),
            }, {
                text: this.$t('modeling.info.rightContent.text3'),
            }, {
                text: this.$t('modeling.info.rightContent.text4'),
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
    background-image: url('../assets/bg.png');
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
        padding: 30px;
    }
}
</style>
