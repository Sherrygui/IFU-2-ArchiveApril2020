<template>
    <div>
        <Banner
            :title="$t('totoro.banner.title')"
            :description="$t('totoro.banner.description')"
            :buttonText="$t('totoro.banner.buttonText')"
            :background="bannerImage"
            externalLink="https://mp.weixin.qq.com/s?__biz=MzI4NzkxMjc4MA==&mid=2247484987&idx=2&sn=339671a503f4b01351b7c6d06bc79a18&chksm=ebc72018dcb0a90e94fdff12771ec68122a29abd998eb604bac8725ec622771a6cc121d3f66e&mpshare=1&scene=1&srcid=&sharer_sharetime=1581215608714&sharer_shareid=343f5c44deda4711a70b2840aa600e28#rd"
        />
        <section class="container">
            <h2>{{ $t('totoro.totoro.title') }}</h2>
            <p>{{ $t('totoro.totoro.text') }}</p>
            <Carousel
                :list="courseList"
            />
        </section>
        <Tab
            :list="tabList"
        />
        <section>
            <h2>{{ $t('totoro.tutors.title') }}</h2>
            <div class="staff-list">
                <TotoroProfile
                class="profole-list"
                v-for="(staff, index) in staffList"
                :key="index"
                :staff="staff"
                :image="staff.image"
                :title="staff.title"
                :subTitle="staff.subTitle"
            />
            </div>
        </section>
        <div class="img">
            <img :src="totoroImage" alt="">
            <div class="text">
                <p>{{ $t('totoro.tutors.joinTutor') }}</p>
                <a href="https://www.wjx.top/jq/40951475.aspx" target="_blank">
                    <Button class="btn">{{ $t('totoro.tutors.submitApplication') }}</Button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Carousel from '@/components/Carousel.vue';
import TotoroProfile from '@/components/TotoroProfile.vue';
import bannerImage from '@/assets/totoro/totoro_banner.png';
import carouselImage from '@/assets/totoro/carousel.png';
import mobilebgImage from '@/assets/mobilebg.png';

import liuchenshuImage from '@/assets/totoro/mentor/liuchenshu.png';
import zhangtianluImage from '@/assets/totoro/mentor/zhangtianlu.png';
import maweikunImage from '@/assets/totoro/mentor/maweikun.png';
import zhouzihaoImage from '@/assets/totoro/mentor/zhouzihao.png';
import linxiqiangImage from '@/assets/totoro/mentor/linxiqiang.png';
import wangyuqingImage from '@/assets/totoro/mentor/wangyuqing.png';
import ruanjinglongImage from '@/assets/totoro/mentor/ruanjinglong.png';
import lichunlingImage from '@/assets/totoro/mentor/lichunling.png';
import liangchenweiImage from '@/assets/totoro/mentor/liangchenwei.png';
import wangzhiweiImage from '@/assets/totoro/mentor/wangzhiwei.png';
import huangjiaqiImage from '@/assets/totoro/mentor/huangjiaqi.png';
import zengjunImage from '@/assets/totoro/mentor/zengjun.png';
import houkaiwenImage from '@/assets/totoro/mentor/houkaiwen.png';
import jiangjiaruiImage from '@/assets/totoro/mentor/jiangjiarui.png';
import yinluwaImage from '@/assets/totoro/mentor/yinluwa.png';

import totoroImage from '@/assets/totoro/totoro.png';
import Tab from '@/components/Tab.vue';
import Academic from '@/tabs/totoro/Academic.vue';
import Cohesion from '@/tabs/totoro/Cohesion.vue';
import Button from '@/components/Button.vue';

export default {
    name: 'Totoro',
    components: {
        Banner,
        Carousel,
        TotoroProfile,
        Tab,
        Button,
    },
    data() {
        return {
            bannerImage,
            totoroImage,
            staffList: [{
                image: houkaiwenImage,
                title: this.$t('totoro.tutors.tutorName1'),
                subTitle1: this.$t('totoro.tutors.tutorCourse1'),
                subTitle2: this.$t('totoro.tutors.tutorIntro1'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent1'),
                subTitle4: this.$t('totoro.tutors.tutorExperience1'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail1'),
                // subTitle: '所授科目: 物理初阶，物理高阶\n\n介绍: 就读于加州大学圣塔芭芭拉分校（UCSB），机械工程专业\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: zhangtianluImage,
                title: this.$t('totoro.tutors.tutorName2'),
                subTitle1: this.$t('totoro.tutors.tutorCourse2'),
                subTitle2: this.$t('totoro.tutors.tutorIntro2'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent2'),
                subTitle4: this.$t('totoro.tutors.tutorExperience2'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail2'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: liangchenweiImage,
                title: this.$t('totoro.tutors.tutorName3'),
                subTitle1: this.$t('totoro.tutors.tutorCourse3'),
                subTitle2: this.$t('totoro.tutors.tutorIntro3'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent3'),
                subTitle4: this.$t('totoro.tutors.tutorExperience3'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail3'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: jiangjiaruiImage,
                title: this.$t('totoro.tutors.tutorName4'),
                subTitle1: this.$t('totoro.tutors.tutorCourse4'),
                subTitle2: this.$t('totoro.tutors.tutorIntro4'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent4'),
                subTitle4: this.$t('totoro.tutors.tutorExperience4'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail4'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: linxiqiangImage,
                title: this.$t('totoro.tutors.tutorName5'),
                subTitle1: this.$t('totoro.tutors.tutorCourse5'),
                subTitle2: this.$t('totoro.tutors.tutorIntro5'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent5'),
                subTitle4: this.$t('totoro.tutors.tutorExperience5'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail5'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: wangzhiweiImage,
                title: this.$t('totoro.tutors.tutorName6'),
                subTitle1: this.$t('totoro.tutors.tutorCourse6'),
                subTitle2: this.$t('totoro.tutors.tutorIntro6'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent6'),
                subTitle4: this.$t('totoro.tutors.tutorExperience6'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail6'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: maweikunImage,
                title: this.$t('totoro.tutors.tutorName7'),
                subTitle1: this.$t('totoro.tutors.tutorCourse7'),
                subTitle2: this.$t('totoro.tutors.tutorIntro7'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent7'),
                subTitle4: this.$t('totoro.tutors.tutorExperience7'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail7'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: ruanjinglongImage,
                title: this.$t('totoro.tutors.tutorName8'),
                subTitle1: this.$t('totoro.tutors.tutorCourse8'),
                subTitle2: this.$t('totoro.tutors.tutorIntro8'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent8'),
                subTitle4: this.$t('totoro.tutors.tutorExperience8'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail8'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: yinluwaImage,
                title: this.$t('totoro.tutors.tutorName9'),
                subTitle1: this.$t('totoro.tutors.tutorCourse9'),
                subTitle2: this.$t('totoro.tutors.tutorIntro9'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent9'),
                subTitle4: this.$t('totoro.tutors.tutorExperience9'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail9'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: liuchenshuImage,
                title: this.$t('totoro.tutors.tutorName10'),
                subTitle1: this.$t('totoro.tutors.tutorCourse10'),
                subTitle2: this.$t('totoro.tutors.tutorIntro10'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent10'),
                subTitle4: this.$t('totoro.tutors.tutorExperience10'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail10'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: lichunlingImage,
                title: this.$t('totoro.tutors.tutorName11'),
                subTitle1: this.$t('totoro.tutors.tutorCourse11'),
                subTitle2: this.$t('totoro.tutors.tutorIntro11'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent11'),
                subTitle4: this.$t('totoro.tutors.tutorExperience11'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail11'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: wangyuqingImage,
                title: this.$t('totoro.tutors.tutorName12'),
                subTitle1: this.$t('totoro.tutors.tutorCourse12'),
                subTitle2: this.$t('totoro.tutors.tutorIntro12'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent12'),
                subTitle4: this.$t('totoro.tutors.tutorExperience12'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail12'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: zengjunImage,
                title: this.$t('totoro.tutors.tutorName13'),
                subTitle1: this.$t('totoro.tutors.tutorCourse13'),
                subTitle2: this.$t('totoro.tutors.tutorIntro13'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent13'),
                subTitle4: this.$t('totoro.tutors.tutorExperience13'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail13'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: huangjiaqiImage,
                title: this.$t('totoro.tutors.tutorName14'),
                subTitle1: this.$t('totoro.tutors.tutorCourse14'),
                subTitle2: this.$t('totoro.tutors.tutorIntro14'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent14'),
                subTitle4: this.$t('totoro.tutors.tutorExperience14'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail14'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }, {
                image: zhouzihaoImage,
                title: this.$t('totoro.tutors.tutorName15'),
                subTitle1: this.$t('totoro.tutors.tutorCourse15'),
                subTitle2: this.$t('totoro.tutors.tutorIntro15'),
                subTitle3: this.$t('totoro.tutors.tutorIntroContent15'),
                subTitle4: this.$t('totoro.tutors.tutorExperience15'),
                subTitle5: this.$t('totoro.tutors.tutorExperienceDetail15'),
                // subTitle: '所授科目: 微积分\n\n介绍: UCLA加州大学洛杉矶分校准大四生，Math-econ 数学经济专业；Accounting minor 辅修会计\n\n学术经历: 所授课程满分绩点4.0',
            }],
        };
    },
    computed: {
        courseList() {
            return [{
                title: this.$t('totoro.totoro.courseList.title1'),
                backgroundColor: '#FFC2D6',
                text: this.$t('totoro.totoro.courseList.text1'),
                image: carouselImage,
            }, {
                title: this.$t('totoro.totoro.courseList.title2'),
                backgroundColor: '#F96291',
                text: this.$t('totoro.totoro.courseList.text2'),
                image: carouselImage,
            }]
        },
        tabList() {
            return [{
                title: this.$t('totoro.tabList.title1'),
                content: Cohesion,
                color: '#C9D74A',
                defaultShow: true,
            }, {
                title: this.$t('totoro.tabList.title2'),
                content: Academic,
                color: '#F96291',
            }]
        }
    }
};
</script>

<style lang="scss" scoped>
.staff-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
p{
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0.02em;
}
.profile {
    flex-basis: 30%;
}

.profole-list{
    padding: 15px 0 0 0;
}

.img{
    position: relative;
    border: 3px solid #34BBC9;
    box-shadow: 0px 5px 15px rgba(52, 187, 201, 0.25);
    border-radius: 0px 0px 40px 40px;
    width: 642px;
    height: 370px;
    margin: 180px auto 50px auto;
    img{
        width: 167px;
        position: absolute;
        top: -123px;
        left: 50%;
        margin-left: -83px;
    }
    .text{
        margin: 75px 80px;
        font-size: 16px;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: center;
        p{
            margin: 0;
            margin-bottom: 15px;
            text-align: left;
        }
        .btn{
            margin: 0 auto;
        }
    }
}
</style>

<style lang="scss" scoped>
@media (max-width: 1024px) {
    .profile {
        flex-basis: 100%;
    }
    .container{
        padding: 35px 0 0 0;
        h2 {
            padding: 0 30px;
        }
        
        p{
            padding: 0 30px 35px 30px;
        }
    }
    p{
        font-size: 14px;
    }
    section:last-child{
        .profole-list {
            text-align: left;
        }
    }
    .img{
        border: none;
        box-shadow: none;
        border-top: 3px solid #34BBC9;
        height: auto;
        width: 100%;
        .text{
            margin: 50px 30px;
        }
    }
}
</style>