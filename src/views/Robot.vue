<template>
  <div class="robot-container">
   <Banner
        :title="$t('robot.banner.title')"
        :buttonText="$t('robot.banner.buttonText')"
        :background="bannerImage"
        :bannerList="bannerList"
    />
    <section class="part-1">
        <div class="img">
            <img :src="infoImage" alt="">
        </div>
        <div class="container">
            <h2 style="padding-left: 28px">{{ $t('robot.introduce.title') }}</h2>
            <Introduction :text="$t('robot.introduce.text')" :image="lang === 'zh' ? aiIntroImage1 : aiIntroImage2" />
        </div>
    </section>
    <div class="part-2">
        <section class="container">
            <h2>{{ $t('robot.info.title') }}</h2>
            <Information
            :image="infoImage"
            :leftContent="leftContent"
            :rightContent="rightContent" />
        </section>
    </div>
    <section class="container" part-3>
        <h2>{{ $t('robot.content.title') }}</h2>
        <Content :text="text" :contentList="contentList" />
    </section>
  </div>
</template>
<script>
import Banner from '@/components/Banner.vue';
import bannerImage from '@/assets/course/robot-banner.png';
import aiIntroImage1 from '@/assets/course/part-1.png';
import aiIntroImage2 from '@/assets/course/part-2.png';
import Introduction from '@/course/Introduction.vue';
import Information from '@/course/Information.vue';
import infoImage from '@/assets/course/robot.png';
import one from '@/assets/course/r1.png';
import Content from '@/course/Content.vue';
import two from '@/assets/course/r2.png';
import three from '@/assets/course/r3.png';
import four from '@/assets/course/r4.png';
import five from '@/assets/course/r5.png';
import { mapState } from 'vuex'

export default {
    name: 'Robot',
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
            text: 'Our Robotics + Engineering courses teach kids the basics of electrical engineering and programming as they design and build robots and gadgets. The Robotics & Engineering Academy immerses students in the fundamentals of mechanical and electrical engineering as they design, build, test, and program their robot to complete various challenges. Students will also harness the power of the internet as they create electrical gadgets that respond to internet data! Not only will students take home Arduino kits to experiment with, but the various projects that students complete can also be used in portfolios for college applications and internships long after camp ends.\n\nThe Teen Experience: Since 2002, Digital Media Academy has been encouraging and inspiring teens to become the next generation of developers, animators, filmmakers, photographers, designers, and engineers. In addition to developing teens’ interests and passions for the latest in new tech, our camps foster personal growth, confidence, and independence; preparing students for life beyond high school and college.',
            contentList: [{
                text: '介绍如何通过 Arduino 软件控制 LED 灯\n 介绍如何通过 Arduino 软件制作 LED 灯光秀\n RedBot 机器人构建挑战\n 直行:探索如何让 RedBot 机器人移动\n 转弯:既然机器人可以向前和向后行驶，学生们就可以让机器人转弯',
                image: one,
                title: '第一部分',
                className: 'one',

            }, {
                text: '使用 RedBot 蜂鸣器制作音乐\n 超声波传感器的障碍物检测\n 线条追踪 IR 传感器\n 伺服电机:什么是伺服电机?\n 介绍伺服电机是如何工作的',
                image: two,
                title: '第二部分',
                className: 'two',

            }, {
                text: '了解什么是传感器融合并开始着手完成结课课题\n 机器人工程的未来发展方向\n 欢迎! Raspberry Pi 简介\n 电子工程概论:使用 Raspberry Pi 进行电子原型设计的基础知识\n Python 编程简介',
                image: three,
                title: '第三部分',
                className: 'three',

            }, {
                text: '将电子工程与编程结合起来制作音乐\n 使用 Python 编码原始旋律\n Twitter 输入/Pi 输出(标签显示和 Twitter 发布)',
                image: four,
                title: '第四部分',
                className: 'four',

            }, {
                text: '连接 USB 摄像头的移动侦测器\n 定格动画制作器\n DIY 制作亚马逊的 Alexa 产品\n 结课课题\n 用电路和 Python 制作钢琴\n RetroPie，电子游戏模拟器\n 使用 Pi 进行语音识别\n 参加展示日',
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
                name: this.$t('robot.banner.name1'),
                text: this.$t('robot.banner.text1'),
            }, {
                name: this.$t('robot.banner.name2'),
                text: this.$t('robot.banner.text2'),
            }, {
                name: this.$t('robot.banner.name3'),
                text: this.$t('robot.banner.text3'),
            }, {
                name: this.$t('robot.banner.name4'),
                text: this.$t('robot.banner.text4'),
            }, {
                name: this.$t('robot.banner.name5'),
                text: this.$t('robot.banner.text5'),
            }, {
                name: this.$t('robot.banner.name6'),
                text: this.$t('robot.banner.text6'),
            }]
        },
        leftContent() {
            return [{
                text: this.$t('robot.info.leftContent.text1'),
            }, {
                text: this.$t('robot.info.leftContent.text2'),
            }, {
                text: this.$t('robot.info.leftContent.text3'),
            }, {
                text: this.$t('robot.info.leftContent.text4'),
            }, {
                text: this.$t('robot.info.leftContent.text5'),
            }]
        },
        rightContent() {
            return [{
                text: this.$t('robot.info.rightContent.text1'),
            }, {
                text: this.$t('robot.info.rightContent.text2'),
            }, {
                text: this.$t('robot.info.rightContent.text3'),
            }, {
                text: this.$t('robot.info.rightContent.text4'),
            }, {
                text: this.$t('robot.info.rightContent.text5'),
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
