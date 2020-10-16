<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item, index) in profileList" :key="index">
                <div class="img">
                    <img :src="item.image" />
                    <p>{{ item.title }}</p>
                    <p>{{ item.subTitle }}</p>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        profileList: Array
    },
    data() {
        return {
            swiperOption: {
                pagination:{
                    el:'.swiper-pagination',
                    clickable:true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                paginationClickable:true,
                slidesPerView: 3,
                spaceBetween: 20,
                breakpoints: {
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                }
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.img{
    text-align: center;
    img{
        width: 300px;
    }
}
.swiper-pagination{
    padding-top: 10px;
    position: static;
}
.swiper-button-prev, .swiper-button-next{
    // background-image: none;
    // width: 0;
    // height: 0;
    // margin-top: -20px;
    // top: 100%;
}
.swiper-button-prev{
    // border-top: 10px solid transparent;
    // border-bottom: 10px solid transparent;
    // border-right: 10px solid #54BEF5;
    // margin: -20px auto;
    // margin-left: 43%;
    left: 0;
}
.swiper-button-next{
    // border-top: 10px solid transparent;
    // border-bottom: 10px solid transparent;
    // border-left: 10px solid #54BEF5;
    // right: 44%;
    right: 0;
}
.swiper-slide{
    // margin-right: 10px!important;
}
p {
    margin: 8px 0;

    &:first-of-type {
        font-weight: 600;
    }

    &:last-of-type {
        color: #6C7B8A;
    }
}
</style>
<style lang="scss" scoped>
@media (max-width: 1024px) {
    .swiper-button-prev, .swiper-button-next{
        // background-image: none;
        // width: 0;
        // height: 0;
        // margin-top: -20px;
    }
    .swiper-button-prev{
        // border-top: 10px solid transparent;
        // border-bottom: 10px solid transparent;
        // border-right: 10px solid #54BEF5;
        top: 38%;
        // left: -43%;
    }
    .swiper-button-next{
        // border-top: 10px solid transparent;
        // border-bottom: 10px solid transparent;
        // border-left: 10px solid #54BEF5;
        right: 0;
        top: 38%;
    }
}
@media (max-width: 480px) {
    .img{
        padding: 0 20px;
        img{
            width: 180px;
        }
    }
    .swiper-button-prev, .swiper-button-next{
        background-image: none;
        width: 0;
        height: 0;
        margin-top: -20px;
    }
    .swiper-button-prev{
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #54BEF5;
        top: 38%;
        // left: -43%;
    }
    .swiper-button-next{
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #54BEF5;
        right: 0;
        top: 38%;
    }
}
</style>