<template>
  <div>
    <div style="position:relative">
        <div class="bg">
            <section class="container part-1">
                <h2>IFU X DMA 夏季暑校</h2>
                <p>2019年，International Family Union 与2002年成立于斯坦福大学的数字媒体学院建立了良好的合作关系。
                    致力于把世界上最好的夏校带给国际学生。</p>
                <Carousel
                :list="serviceList"
              />
            </section>
            <DmaCollapse
               title="住宿环境">
                <section class="container part-2" id="one">
                    <h2>住宿环境</h2>
                    <div class="con">
                        <div class="row left">
                            <div class="col" v-for="item in envLeftList" :key="item.title">
                                <div class="content">
                                    <div>
                                        <p>{{ item.title }}</p>
                                    </div>
                                    <div class="img-con">
                                        <img :src="item.src" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="circle">
                            <p>IFU X DMA <br/>夏季暑校</p>
                        </div>
                        <div class="row right">
                            <div class="col" v-for="item in envRightList" :key="item.title">
                                <div class="content">
                                    <div class="img-con">
                                        <img :src="item.src" alt=""/>
                                    </div>
                                    <div>
                                        <p>{{ item.title }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </DmaCollapse>
        </div>
        <DmaCollapse
            title="学校分布">
            <section class='part-3' id="two">
                <div class="bgc">
                    <h2 style="max-width: 1180px; margin: 0 auto">学校分布</h2>
                    <div class="flex">
                        <div class="school-container" v-for="item in schoolList" :key="item.name">
                            <p>{{ item.name }}</p>
                            <ul>
                                <li v-for="op in item.data" :key="op.name">{{ op.name }} >></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </DmaCollapse>
    </div>
    <DmaCollapse
        title="推荐课程">
        <div class="part-4">
            <div class="college-container" id="three" >
                <div class="rgba-con">
                    <router-link :to="{ path: 'AI' }">
                        <div>编程及人工智能学院 </div>
                        <div>>>></div>
                    </router-link>
                </div>
                </div>
            <div class="college-container">
                <div class="rgba-con">
                    <router-link :to="{ path: '3D' }">
                        <div>3D建模设计学院 </div>
                        <div>>>></div>
                    </router-link>
                </div>
            </div>
            <div class="college-container">
                <div class="rgba-con">
                    <router-link :to="{ path: 'robot' }">
                        <div>机器人工程学院 </div>
                        <div>>>></div>
                    </router-link>
                </div>
            </div>
        </div>
    </DmaCollapse>
    <DmaCollapse
        title="为什么选择我们？">
        <section class="part-5" id="four">
            <div class="container">
                <div class="text">
                    <h2>为什么选择我们？</h2>
                    <div>
                        在21世纪最新的教育模式中，我们最看重的不仅仅是学生们的学科成绩，还有他们的知识应用能力和协作能力。
                        DMA在17年的教学经验中总结出了一套独特的个性化课程，这将带给青少年们世界最尖端，最有效的学习平台。
                        经过IFU国际家长汇学长学姐的考察，和收集同学们的试读反馈，发现课程能够真正的提高学生的各方面能力，突显个人特色（这也是美国高校录取学生最看中的要素）
                        所以我们下定决心将其引见给更多的中国留学生家庭。为了让同学们在外期间最大程度的学习到相关知识，走出舒适圈。
                        每个班最多8人，并且每班不能超过3名中国学生。其实最让人心动的部分则是，同学结课之后可以把他们在校期间的项目成果带回家，并且得到DMA官方颁发的奖状。
                    </div>
                </div>
                <div class="img">
                    <img :src="selectImage" alt="">
                </div>
            </div>
        </section>
    </DmaCollapse>
    <DmaCollapse
        title="项目详情">
        <section class="part-6">
            <div class="container">
                <div class="text">
                    <h2>项目详情</h2>
                    <div style="padding-bottom: 40px;" v-for="item in detailList" :key="item.title">
                        <div class="box"></div>
                        <strong>{{ item.title }}</strong><span>{{ item.text }}</span>
                    </div>
                </div>
                <div class="img">
                    <img :src="detailImage" alt="">
                </div>
            </div>
        </section>
    </DmaCollapse>
    <DmaCollapse
        title="额外服务">
        <section class="part-7" id="five">
            <div class="container">
                <div class="img part-7-img">
                    <img :src="serviceImage" alt="">
                </div>
                <div class="text">
                    <h2>额外服务</h2>
                    <div>
                        生活学术监督：除DMA经过良好的培训，并且都获得了CPR和急救认证的授课的行业专业人士助教之外，International Family Union
                        北美高校留学经验丰富的学长学姐也会全程陪同，
                        协助学生们更好地理解课堂知识，并且利用课外实践和学生们分享留学经验，帮助学生们更好地树立留学目标，减少在未来留学中要走的弯路。
                        <br><br>IFU还提供签证办理；机票、保险购买；当地接送机服务；周末斯坦福周边旅行；行前海外法律、文化课程提供等相关服务。
                        <br><br>
                        ** 咨询请扫描网站底部微信二维码
                    </div>
                </div>
            </div>
        </section>
    </DmaCollapse>
    <Button :onClick="navigateToQuestion">常见问题</Button>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Carousel from '@/components/Carousel.vue';
import bannerImage from '@/assets/dma_banner.png';
import bgImage from '@/assets/dma/bg.png';
import selectImage from '@/assets/dma/select.png';
import detailImage from '@/assets/dma/detail.png';
import serviceImage from '@/assets/dma/service.png';
import one from '@/assets/dma/1.png';
import two from '@/assets/dma/2.png';
import three from '@/assets/dma/3.png';
import four from '@/assets/dma/4.png';
import five from '@/assets/dma/5.png';
import six from '@/assets/dma/6.png';
import schoolImage from '@/assets/dma/school.png';
import serviceTotoroImage from '@/assets/service_totoro.png';
import DmaCollapse from '@/components/DmaCollapse.vue';

export default {
    name: 'DmaCollapse',
    components: {
        Button,
        Carousel,
        DmaCollapse,
    },
    data() {
        return {
            bannerImage,
            schoolImage,
            bgImage,
            selectImage,
            detailImage,
            serviceImage,
            schoolList: [{
                name: '美国西海岸',
                data: [{
                    name: '斯坦福大学',
                }, {
                    name: '加州大学尔湾分校',
                }, {
                    name: '加州大学洛杉矶分校',
                }, {
                    name: '加州大学圣地亚哥分校',
                }, {
                    name: '华盛顿大学',
                }],
            }, {
                name: '美国中部',
                data: [{
                    name: '芝加哥大学',
                }, {
                    name: '德克萨斯大学奥斯汀分校',
                }, {
                    name: '休斯顿大学',
                }],
            }, {
                name: '美国东海岸',
                data: [{
                    name: '哈佛大学',
                }, {
                    name: '纽约大学',
                }, {
                    name: '宾夕法尼亚大学',
                }, {
                    name: '乔治华盛顿大学',
                }, {
                    name: '杜克大学',
                }],
            }, {
                name: '加拿大',
                data: [{
                    name: '英属哥伦比亚大学',
                }, {
                    name: '多伦多大学',
                }, {
                    name: '麦吉尔大学',
                }],
            }],
            envLeftList: [{
                title: '校园宿舍，环境优美，和当\n地孩子一起生活',
                src: one,
            }, {
                title: '无限高速上网全覆盖\n安静的学习室',
                src: two,
            }, {
                title: '娱乐休息室\n公共厨房',
                src: three,
            }],
            envRightList: [{
                title: '男女分住所在学校的学生宿舍\n住宿包括所有的膳食—早餐，午餐和晚餐',
                src: four,
            }, {
                title: '举办有趣的夜晚活动—包括主题\n派对、电影之夜等等',
                src: five,
            }, {
                title: '设有专业的夜间咨询老师',
                src: six,
            }],
            serviceList: [{
                title: '住宿环境',
                backgroundColor: '#54BEF5',
                text: '我们希望学生可以学习实际应用所需的技能，不仅仅是学术STEM技能，还将学会通过团队协作来定义和理解问题，如何通过合作提出解决方案。教师还在教学过程中培养学生“21实际技能”，为他们的大学学习及未来发展做好准备。我们的课程由多位深入理解如何吸引和激励学生的STEM行业专家开发完成。并且多个校区还分布着IFU的学长学姐们，他们将在暑期课程的闲暇时期带领孩子们真正体验美国的校园生活，分享他们的留学经历，让学生们在真实，快乐的留美生活中，快速成长。',
                image: serviceTotoroImage,
                position: '#one',
            }, {
                title: '学校分部',
                backgroundColor: '#4BA3D9',
                text: '我们希望学生可以学习实际应用所需的技能，不仅仅是学术STEM技能，还将学会通过团队协作来定义和理解问题，如何通过合作提出解决方案。教师还在教学过程中培养学生“21实际技能”，为他们的大学学习及未来发展做好准备。我们的课程由多位深入理解如何吸引和激励学生的STEM行业专家开发完成。并且多个校区还分布着IFU的学长学姐们，他们将在暑期课程的闲暇时期带领孩子们真正体验美国的校园生活，分享他们的留学经历，让学生们在真实，快乐的留美生活中，快速成长。',
                image: serviceTotoroImage,
                position: '#two',
            }, {
                title: '推荐课程',
                backgroundColor: '#4187BC',
                text: '我们希望学生可以学习实际应用所需的技能，不仅仅是学术STEM技能，还将学会通过团队协作来定义和理解问题，如何通过合作提出解决方案。教师还在教学过程中培养学生“21实际技能”，为他们的大学学习及未来发展做好准备。我们的课程由多位深入理解如何吸引和激励学生的STEM行业专家开发完成。并且多个校区还分布着IFU的学长学姐们，他们将在暑期课程的闲暇时期带领孩子们真正体验美国的校园生活，分享他们的留学经历，让学生们在真实，快乐的留美生活中，快速成长。',
                image: serviceTotoroImage,
                position: '#three',
            }, {
                title: '为什么选择我们',
                backgroundColor: '#36699C',
                text: '我们希望学生可以学习实际应用所需的技能，不仅仅是学术STEM技能，还将学会通过团队协作来定义和理解问题，如何通过合作提出解决方案。教师还在教学过程中培养学生“21实际技能”，为他们的大学学习及未来发展做好准备。我们的课程由多位深入理解如何吸引和激励学生的STEM行业专家开发完成。并且多个校区还分布着IFU的学长学姐们，他们将在暑期课程的闲暇时期带领孩子们真正体验美国的校园生活，分享他们的留学经历，让学生们在真实，快乐的留美生活中，快速成长。',
                image: serviceTotoroImage,
                position: '#four',
            }, {
                title: '额外服务',
                backgroundColor: '#2C4D7E',
                text: '我们希望学生可以学习实际应用所需的技能，不仅仅是学术STEM技能，还将学会通过团队协作来定义和理解问题，如何通过合作提出解决方案。教师还在教学过程中培养学生“21实际技能”，为他们的大学学习及未来发展做好准备。我们的课程由多位深入理解如何吸引和激励学生的STEM行业专家开发完成。并且多个校区还分布着IFU的学长学姐们，他们将在暑期课程的闲暇时期带领孩子们真正体验美国的校园生活，分享他们的留学经历，让学生们在真实，快乐的留美生活中，快速成长。',
                image: serviceTotoroImage,
                position: '#five',
            }],
            detailList: [{
                title: '年龄限定：',
                text: '14-18岁',
            }, {
                title: '项目时间：',
                text: '7-8月（超过8人可定制）',
            }, {
                title: '语言要求：',
                text: '能够听懂英文授课，托福、雅思最好在80分或者6分以上',
            }],
        };
    },
    methods: {
        navigateToQuestion() {
            this.$router.push('question');
        },
    },
};
</script>

<style scoped>
.dma-banner {
    color: white;
}
.container{
    max-width: 1180px;
    margin: 0 auto;
}
section{
    padding: 0;
}
.bg{
    background: url('../assets/dma/bg.png') no-repeat;
    background-position: left 0px top 390px;
}
.content div{
    display: inline-block;
}
.content p{
    display: inline-block;
    white-space: pre-wrap;
    font-size: 16px;
    letter-spacing: 0.02em;
}
.img-con{
    width: 47px;
    height: 47px;
    background-color: #FDA63B;
    border-radius: 50%;
    text-align: center;
    line-height: 60px;
}
.left{
    text-align: right;
}
.row .col{
    padding: 30px 0;
}
.left .col:nth-child(2) {
    padding-right: 40px;
}
.right .col:nth-child(2) {
    padding-left: 40px;
}
.left .img-con{
    margin-left: 20px;
}
.left .content{
    text-align: right;
}
.right .img-con{
    margin-right: 20px;
}
.right .content{
    text-align: left;
}
.circle{
    width: 200px;
    height: 200px;
    background-color: #2C4D7E;
    border-radius: 50%;
    color: #fff;
    font-size: 24px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
}
.circle p{
    padding-top: 40px;
}
.row{
    display: inline-block;
    vertical-align: middle;
}
.con{
    text-align: center;
}
.part-3{
    width: 100%;
    height: 100%;
    position: relative;
    background: url('../assets/dma/school.png') no-repeat;
    background-size: cover;
    padding: 70px 0 125px 0;
}
.part-3 img{
    width: 100%;
}
.part-3 .bgc{
    color: #fff;
}
.part-3 .flex{
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.part-4{
    background-color: rgba(133, 133, 133, 0.56);
    display: flex;
}
.school-container{
    color: #fff;
    display: inline-block;
    vertical-align: top;
    text-align: left;
}
.school-container p{
    font-size: 24px;
    line-height: 33px;
}
.school-container li{
    list-style: none;
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0.02em;
}
.college-container{
    display: inline-block;
    width: 33.33%;
    text-align: center;
    font-size: 24px;
    text-align: center;
    letter-spacing: 0.05em;
    height: 521px;
}
.college-container:first-child{
    background: url('../assets/dma/col-1.png') no-repeat;
    border-top: 15px solid #34BBC9;
    border-bottom: 25px solid #34BBC9;
}
.college-container:nth-child(2){
    background: url('../assets/dma/col-2.png') no-repeat;
    border-top: 15px solid #C9D74A;
    border-bottom: 25px solid #C9D74A;

}
.college-container:last-child{
    background: url('../assets/dma/col-3.png') no-repeat;
    border-top: 15px solid #F96291;
    border-bottom: 25px solid #F96291;
}
.college-container a{
    color: #fff;
    text-decoration: none;
}
.rgba-con{
    height: 100%;
    background-color: rgba(255,255,255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
ul{
    padding-left: 0;
}
.part-5{
    padding: 90px 0;
}
.text{
    width: 45%;
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0.02em;
    display: inline-block;
}
.img{
    display: inline-block;
    vertical-align: top;
}
.part-6{
    background-color: #E2EDF6;
}
.part-6 .box{
    width: 10px;
    height: 10px;
    border: 2px solid #29BBCA;
    display: inline-block;
    vertical-align: middle;
}
.part-6 div strong{
    font-size: 16px;
    letter-spacing: 0.02em;
    margin: 0;
    padding: 0 5px 0 15px;
}
.part-6 span{
    font-size: 16px;
    letter-spacing: 0.02em;
}
.part-6>div{
    padding-top: 36px;
}
.part-7{
    padding-bottom: 130px;
}
.part-7 button{
    margin-top: 50px;
}
.part-7-img{
    vertical-align: baseline;
    padding-right: 60px;
}
h2{
    margin: 0;
    padding: 100px 0 20px 0;
}
</style>
<style lang="scss" scoped>
@media(max-width: 1024px) {
    .part-1{
        h2{
            padding: 0 30px;
        }
        p{
            padding: 0 30px;
            line-height: 31px;
            letter-spacing: 0.02em;
        }
    }
    .bg{
        background-image: none;
    }
    .part-2{
        .circle{
            display: none;
        }
    }
}
</style>
