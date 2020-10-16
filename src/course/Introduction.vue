<template>
    <div class="introduction-container">
        <div class="text">
            <div style="white-space: pre-line">
                {{ text }}
            </div>
        </div>
        <div class="img">
            <img :src="image" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        image: String,
        text: String,
    },
};
</script>
<style scoped>
.introduction-container div{
    display: inline-block;
    vertical-align: middle;
}
.text{
    width: 40%;
    padding-left: 20px;
    border-left: 5px solid #FE4C31;
    font-size: 16px;
    line-height: 31px;
    color: #202020;
    padding-right: 125px;
}
.img{
    width: 33%;
    text-align: right;
}
</style>
<style lang="scss" scoped>
@media(max-width: 1024px) {
    .introduction-container{
        padding-top: 50px;
        padding: 30px;
    }
    .img img{
        display: none;
    }
    .text{
        width: 100%;
        border: none;
        padding: 0;
    }
}
</style>
