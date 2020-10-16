<template>
    <div class="info-container">
        <div v-if="lang === 'zh'" style="width: 100%">
            <div class="left">
                <div class="round">
                    <img :src="icon1" alt="">
                </div>
                <h3>{{ $t('AI.info.leftContent.title') }}</h3>
                <div>
                    <p v-for="(item, index) in leftContent" :key="index">{{ item.text }}</p>
                </div>
            </div>
            <div class="center">
                <img :src="image" alt="">
            </div>
            <div class="right">
                <div class="round">
                    <img :src="icon2" alt="">
                </div>
                <h3>{{ $t('AI.info.leftContent.title') }}</h3>
                <div>
                    <p v-for="(item, index) in rightContent" :key="index">{{ item.text }}</p>
                </div>
            </div>
        </div>
        <div class="en" v-else>
            <div class="left-content">
                <div class="left">
                    <div class="round">
                        <img :src="icon1" alt="">
                    </div>
                    <div class="content">
                        <h3>{{ $t('AI.info.leftContent.title') }}</h3>
                        <div>
                            <p v-for="(item, index) in leftContent" :key="index">{{ item.text }}</p>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="round">
                        <img :src="icon2" alt="">
                    </div>
                    <div class="content">
                        <h3>{{ $t('AI.info.leftContent.title') }}</h3>
                        <div>
                            <p v-for="(item, index) in rightContent" :key="index">{{ item.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center">
                <img :src="image" alt="">
            </div>
        </div>
        <div class="decorateImage">
            <img :src="decorateImage" alt="">
            <img :src="waveImage" alt="">
        </div>
    </div>
</template>
<script>
import icon1 from '@/assets/course/icon1.png';
import icon2 from '@/assets/course/icon2.png';
import decorateImage from '@/assets/course/decorate.png';
import waveImage from '@/assets/course/wave.png';
import { mapState } from 'vuex'

export default {
    props: {
        image: String,
        text: String,
        leftContent: Array,
        rightContent: Array,
    },
    data() {
        return {
            icon1,
            icon2,
            decorateImage,
            waveImage,
        };
    },
    computed: {
        ...mapState('lang', ['lang']),
    }
};
</script>
<style lang="scss" scoped>
.info-container{
    margin-top: 34px;
    text-align: center;
}
.info-container div{
    display: inline-block;
    vertical-align: top;
    color: #fff;
}
.left{
    height: 491px;
    width: 31%;
    background-color: #34BBC9;
    border-radius: 10px 0px 0px 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
}
.right{
    height: 491px;
    width: 31%;
    background: #F96291;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 10px 10px 0px;
    text-align: center;
}
.round{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    line-height: 92px;
    margin-top: 82px;
}
p{
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 28px;
}
.decorateImage{
    position: absolute;
    right: 30px;
    bottom: -270px;
}
.decorateImage img:last-child{
    display: none;
}
.info-container .en{
    display: flex;
    .left-content{
        display: inline-block;
    }
    .left{
        width: 100%;
        height: 245px;
        border-radius: 10px 0px 0px 10px;
        text-align: left;
        padding-left: 30px;
    }
    .right{
        height: 245px;
        width: 100%;
        display: block;
        border-radius: 10px 0px 0px 10px;
        text-align: left;
        padding-left: 30px;
    }
    .center{
        display: inline-block;
    }
    .content{
        margin-left: 30px;
        width: 80%;
    }
    .round{
        // margin: 30px;
    }
}
</style>
<style lang="scss" scoped>
@media(max-width: 1024px) {
    .info-container{
        margin-top: 80px;
    }
    .center img{
        display: none;
    }
    .left{
        margin-bottom: 82px;
        box-sizing: content-box;
    }
    .left, .right{
        width: 100%;
        border-radius: 10px;
        height: auto;
        padding: 10px;
        padding-bottom: 50px;
        box-sizing: border-box;
        p{
            font-size: 14px;
            line-height: 31px;
            text-align: center;
            letter-spacing: 0.02em;
        }
    }
    .left .round{
        margin-top: -52px;
        border: 15px solid #34BBC9;
    }
    .right .round{
        margin-top: -52px;
        border: 15px solid #F96291;
    }
    .decorateImage img:first-child{
        display: none;
    }
    .decorateImage img:last-child{
        display: block;
    }
    .decorateImage{
        bottom: 30px;
    }
    .info-container .en{
        .left, .right{
            height: auto;
            border-radius: 10px;
        }
        .content{
            margin: 0;
            width: 100%;
            p{
                text-align: left;
            }
        }
    }
}
</style>
