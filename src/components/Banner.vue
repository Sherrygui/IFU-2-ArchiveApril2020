<template>
    <div class="banner" :style="{ backgroundImage: `url(${background})` }">
        <div class="banner-left">
            <h1 v-if="subTitle" class="subtitle-text">{{ subTitle }}</h1>
            <h1 v-if="title" class="title-text" :style="{ color: titleColor }">{{ title }}</h1>
            <p>{{ description }}</p>
            <div class="title" v-for="(item, index) in bannerList" :key="index">
                <strong>{{ item.name }}</strong><span>{{ item.text }}</span>
            </div>
            <a v-if="externalLink" :href="externalLink" target="_blank">
                <Button v-if="buttonText">
                    {{ buttonText }}
                </Button>
            </a>
            <Button v-else-if="buttonText" :onClick="buttonOnClick">
                    {{ buttonText }}
            </Button>
        </div>
        <div class="banner-right">
            <img :src='image' />
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    name: 'Banner',
    components: {
        Button,
    },
    props: {
        title: String,
        subTitle: String,
        description: String,
        buttonText: String,
        buttonOnClick: Function,
        background: String,
        bannerList: Array,
        titleColor: String,
        image: String,
        externalLink: String,
    },
};
</script>

<style scoped>
.banner {
    width: 100%;
    height: 100%;
    padding: 96px 129px;
    box-sizing: border-box;
    background-size: cover;
    display: flex;
    box-shadow: 0 0px 10px #eee;
    background-position: center;
}

h1 {
    font-size: 40px;
    color: #2C3E51;
    /* line-height: 35px; */
}

.title-text {
    font-weight: normal;
}

p {
    max-width: 490px;
    margin-top: 32px;
    line-height: 31px;
}

button {
    margin-top: 45px;
}
.title{
    font-size: 16px;
    line-height: 31px;
}

.banner-left {
    width: 50%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.banner-right img{
    width: 100%;
}
strong{
    margin-right: 5px;
}
</style>

<style scoped>
@media (max-width: 1024px) {
    .banner {
        padding: 70px 30px 35px 30px;
        flex-wrap: wrap;
    }

    h1 {
        font-size: 23px;
    }

    button {
        margin-top: 35px;
    }

    .banner-left {
        width: 100%;
    }

    p {
        margin: 0;
        max-width: 100%;
    }
}
</style>
