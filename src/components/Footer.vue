<template>
    <footer class="footer">
        <div class="top" v-if="lang==='zh'">
            <div class="logo">
                <div>IFU</div>
                <div class="zh">
                    <p>{{ $t('footer.subTitle1') }}</p>
                    <p>{{ $t('footer.subTitle2') }}</p>
                </div>
            </div>
            <div class="follow">
                <p>{{ $t('footer.followUs') }}</p>
                <div class="icon-container">
                    <a v-for="(item, index) in followList" :key="index" :href="item.link" target="_blank" rel="noreferrer noopener">
                        <img :src="item.image" alt="">
                    </a>
                </div>
            </div>
            <div class="code">
                <img :src="codeImg" alt="">
                <p>{{ $t('footer.codeText1') }}</p>
                <p>{{ $t('footer.codeText2') }}</p>
            </div>
        </div>
        <div class="top top-en" style="height: 420px, color: " v-else>
            <div class="logo-en">
                <div>IFU</div>
                <div class="en">
                    <p>{{ $t('footer.subTitle1') }}</p>
                    <p>{{ $t('footer.subTitle2') }}</p>
                </div>
            </div>
            <div class="follow">
                <p>{{ $t('footer.followUs') }}</p>
                <div class="icon-container">
                    <img v-for="(item, index) in followList" :key="index" :src="item.image" alt="">
                </div>
            </div>
            <div class="code">
                <img :src="codeImg" alt="">
                <p>{{ $t('footer.codeText1') }}</p>
                <p>{{ $t('footer.codeText2') }}</p>
            </div>
        </div>
        <div class="bottom">
            <p>© 2019 IFU All Rights Reserved</p>
        </div>
    </footer>
</template>

<script>
import wechatImg from '@/assets/footer/wechat.png'
import FBImg from '@/assets/footer/FB.png'
import codeImg from '@/assets/footer/code.png'
import weiboImg from '@/assets/footer/weibo.png'
import zhihuImg from '@/assets/footer/zhihu.png'
import { mapState } from 'vuex'
export default {
    name: 'Footer',
    data() {
        return {
            codeImg,
            followList: [{
                image: wechatImg,
                link: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU1MTE2MDkxOQ==&scene=124#wechat_redirect',
            }, {
                image: weiboImg,
                link: 'https://www.weibo.com/u/6422822665?refer_flag=1001030103_&is_hot=1',
            }, {
                image: zhihuImg,
                link: 'https://www.zhihu.com/people/ifuguo-ji-jia-chang-hui/activities',
            },{
                image: FBImg,
                link: 'https://www.facebook.com/International-Family-Union-775710742807913/',
            }]
        }
    },
    computed: {
        ...mapState('lang', ['lang'])
    },
    created() {
        this.$i18n.locale = this.lang;
    }
};
</script>

<style lang="scss" scoped>
footer {
    width: 100%;
    text-align: center;
}
img{
    width: 36px;
    height: 36px;
    margin-right: 10px;
}
.footer{
    text-align: left;
    background-color: #54BEF5;
    min-height: 184px;
    width: 100%;
    position: relative;
}
.top{
    max-width: 1180px;
    margin: 0 auto;
    min-height: 120px;
    .logo{
        color: #fff;
        display: inline-block;
        padding-top: 20px;
        div{
            display: inline-block;
            vertical-align: middle;
            .zh{
               font-size: 16px;
                line-height: 31px;
                letter-spacing: 0.25em;
            }
            &:first-child{
                font-size: 60px;
                line-height: 84px;
                padding-right: 15px;
            }
            p{
                margin: 0px;
            }
        }
    }
    .logo-en{
        color: #fff;
        display: inline-block;
        div{
            display: inline-block;
            vertical-align: middle;
            .zh{
                font-size: 16px;
                line-height: 31px;
                letter-spacing: 0.25em;
            }
            &:first-child{
                font-size: 60px;
                line-height: 84px;
                margin-right: 15px;
                margin-bottom: 10px;
            }
            p{
                margin: 0px;
            }
        }
    }
}
.follow{
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.03em;
    display: inline-block;
    padding-top: 35px;
    position: absolute;
    right: 272px;
    p{
        margin: 0;
        margin-bottom: 10px;
    }
}
.bottom{
    border-top: 1px solid rgba(255, 255, 255, 0.26);
    line-height: 60px;
    color: #fff;
    text-align: center;
    p{
        margin: 0;
        font-size: 16px;
        letter-spacing: 0.025em
    }
}
.code{
    height: 100%;
    width: 106px;
    background-color: #fff;
    position: absolute;
    top: 0px;
    right: 130px;
    text-align: center;
    color: #54BEF5;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 0.05em;
    img{
        width: 77px;
        height: 77px;
        margin: 34px 0 12px 0;
    }
    p{
        margin: 0;
    }
    .en{
        font-family: Helvetica;
        letter-spacing: 0.1em;
    }
}
</style>
<style lang="scss" scoped>
@media(max-width: 1024px) {
    .top{
        padding: 0 20px;
    }
    .code{
        right: 30px;
    }
    .follow{
        right: 170px;
    }
    .zh{
        letter-spacing: 0.25em;
    }
}
@media(max-width: 768px) {
    .footer{
        text-align: center;
        // height: 380px;
    }
    .top{
        height: 320px;
        .follow{
            top: 100px;
            left: 50%;
            margin-left: -135px; 
            text-align: left;
            width: 140px;
            font-size: 16px;
            line-height: 16px;
            letter-spacing: 0.03em;
            img{
                width: 60px;
                height: 60px;
                margin-bottom: 20px;
            }
        }
    }
    .bottom{
        border: none;
        height: 60px;
        p{
            font-size: 10px;
        }
    }
    .code{
        height: 145px;
        top: 160px;
        right: 50%;
        margin-right: -130px;
        img{
            margin: 10px 0;
        }
    }
    .en{
        padding-bottom: 40px;
    }
    .zh{
        border-left: 1px solid #fff;
        padding-left: 20px;
    }
    .top-en{
        height: 400px;
        .follow{
            top: 160px;
        }
        .code{
            top: 220px;
        }
        .logo-en div{
            &:first-child{
                border-bottom: 1px solid #fff;
                display: block;
            }
        }
    }
}
</style>
