<template>
    <div class="content-container">
        <div  v-if="lang === 'zh'">
            <div class="container" v-for="(item, index) in contentList" :key="index">
                <div class="img">
                    <div class="sectorial" :class="item.className"></div>
                    <img :src="item.image" alt="">
                    <p>{{ item.title }}</p>
                </div>
                <div class="text">
                    {{ item.text }}
                </div>
            </div>
            <p class="zh-p">{{ $t('AI.content.text') }}</p>
        </div>
        <div class="en" v-else>
            {{ text }}
            <p style="color: #34BBC9">{{ $t('AI.content.text') }}</p>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    props: {
        contentList: Array,
        text: String,
    },
    computed: {
        ...mapState('lang', ['lang'])
    }
};
</script>
<style scoped>
.container{
    padding: 40px 100px;
    border-bottom: 1px solid rgba(52, 187, 201, 0.2);
}
.container:nth-child(5){
    border-bottom: none;
}
.container:nth-child(2) .text{
    padding-left: 4px;
}
.text{
    display: inline-block;
    white-space: pre-line;
    font-size: 16px;
    line-height: 28px;
    vertical-align: middle;
}
.img{
    padding-right: 100px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
}
.img p{
    font-size: 23px;
    margin: 0;
    padding-top: 10px;
}
.content-container .zh-p{
    text-align: right;
    font-size: 14px;
    color: #22A5D8;
}
.sectorial{
    display: none;
}
.en{
    width: 72%;
    white-space: pre-line;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
<style lang="scss" scoped>
@media(max-width: 1024px){
    .container{
        padding: 30px 0px;
        padding: 30px 0 30px 10px;
    }
    .img .one{
        border-right: 34px solid transparent;
        border-left: 34px solid transparent;
        border-bottom: 34px solid transparent;
        transform: rotate(-45deg)
    }
    .img .two{
        border-left: 34px solid transparent;
        border-bottom: 34px solid transparent;
        border-top: 34px solid transparent;
        transform: rotate(-45deg)
    }
    .img .three{
        border-right: 34px solid transparent;
        border-left: 34px solid transparent;
        border-bottom: 34px solid transparent;
        transform: rotate(135deg)
    }
    .img .four{
        border-right: 34px solid transparent;
        border-left: 34px solid transparent;
        border-bottom: 34px solid transparent;
        transform: rotate(-135deg)
    }
    .img .five{
        display: inline-block;
        width: 0;
        height: 0;
        border: 34px solid #34BBC9;
        border-radius: 50%;
    }
    .sectorial{
        display: inline-block;
        width: 0;
        height: 0;
        border: 34px solid #34BBC9;
        border-radius: 50%;
    }
    .img{
        display: inline-block;
        padding-right: 30px;
        img{
            display: none;
        }
        p{
            font-size: 14px;
            line-height: 20px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #34BBC9;
        }
    }
    .text{
        width: 60%;
        display: inline-block;
        font-size: 14px;
        line-height: 31px;
        letter-spacing: 0.02em;
    }
    .container:nth-child(5) .img{
        position: relative;
    }
    .container:nth-child(5) .img p{
        position: absolute;
        top: 15px;
        color: #fff;
        padding-left: 9px;
    }
    .en{
        width: 100%;
    }
}
</style>