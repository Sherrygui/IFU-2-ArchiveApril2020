<template>
    <div>
        <section
            class="culture-section"
        >
            <h2 v-t="'about.culture.cultureTitle'" />
            <p v-t="'about.culture.cultureText'" />
            <iframe class="video" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=f0516cmc391" allowFullScreen="true"></iframe>
        </section>
        <section>
            <h2 v-t="'about.culture.distributionTitle'" />
            <div class="distribution-image desktop">
                <img src="../../assets/about/map.png" />
                <div class="tips" data-aos="fade-up">
                    <div class="tips-text">
                        <p>{{ $t('about.culture.schoool1') }}</p>
                        <p>{{ $t('about.culture.schoool2') }}</p>
                    </div>
                    <div class="tips-line" />
                </div>
                <div class="tips" data-aos="fade-up">
                    <div class="tips-text">
                        <p>{{ $t('about.culture.schoool3') }}</p>
                    </div>
                    <div class="tips-line" />
                </div>
                <div class="tips" data-aos="fade-left">
                    <div class="tips-text">
                        <p>{{ $t('about.culture.schoool4') }}</p>
                        <p>{{ $t('about.culture.schoool5') }}</p>
                        <p>{{ $t('about.culture.schoool6') }}</p>
                        <p>{{ $t('about.culture.schoool7') }}</p>
                        <p>{{ $t('about.culture.schoool8') }}</p>
                        <p>{{ $t('about.culture.schoool9') }}</p>
                        <p>{{ $t('about.culture.schoool10') }}</p>
                        <p>{{ $t('about.culture.schoool11') }}</p>
                    </div>
                    <div class="tips-line" />
                </div>
                <div class="tips" data-aos="fade-right">
                    <div class="tips-text">
                        <p>{{ $t('about.culture.schoool12') }}</p>
                        <p>{{ $t('about.culture.schoool13') }}</p>
                        <p>{{ $t('about.culture.schoool14') }}</p>
                        <p>{{ $t('about.culture.schoool15') }}</p>
                        <p>{{ $t('about.culture.schoool16') }}</p>
                        <p>{{ $t('about.culture.schoool17') }}</p>
                        <p>{{ $t('about.culture.schoool18') }}</p>
                        <p>{{ $t('about.culture.schoool19') }}</p>
                        <p>{{ $t('about.culture.schoool20') }}</p>
                    </div>
                    <div class="tips-line" />
                </div>
                <div class="tips" data-aos="fade-down">
                    <div class="tips-text">
                        <p>{{ $t('about.culture.schoool21') }}</p>
                    </div>
                    <div class="tips-line" />
                </div>
            </div>
            <div class="distribution-image-mobile mobile">
                <img src="../../assets/about/map-mobile.png" />
            </div>
        </section>
        <section class="join-section">
            <p v-t="'about.culture.joinText1'" />
            <p v-t="'about.culture.joinText2'" />
            <a href="https://www.wjx.top/m/42786146.aspx" target="_blank">
                <Button v-t="'about.culture.joinButtonText'" />
            </a>
        </section>
    </div>
</template>

<script>
import AOS from 'aos';
import Button from '@/components/Button.vue';

export default {
    name: 'Culture',
    components: {
        Button,
    },
    created() {
        AOS.init({
            delay: 0,
            duration: 800,
        });
    },
};
</script>

<style scoped>
.culture-section p {
    width: 33%;
    line-height: 40px;
}

.culture-section {
    position: relative;
}

.video {
    margin: 67px;
    width: 40%;
    float: right;
    position: absolute;
    top: 0px;
    right: 142px;
    height: 362px;
    text-align: center;
    background: gray;
}

.distribution-image {
    width: 1208px;
    text-align: center;
    position: relative;
}

.distribution-image img {
    width: 100%;
}

.tips {
    box-sizing: border-box;
    font-size: 14px;
    line-height: 12px;
    position: absolute;
}

.tips-text {
    background: rgba(255, 255, 255, 0.8);
}

.tips-line {
    position: absolute;
}

.tips:nth-of-type(1) {
    top: -40px;
    left: 326px;
}

.tips:nth-of-type(1) .tips-text {
    width: 116px;
    height: 61px;
    border: 2px solid #C9D74A;
    color: #C9D74A;
}

.tips:nth-of-type(1) .tips-line {
    width: 2px;
    height: 113px;
    background: #C9D74A;
    left: 58px;
}

.tips:nth-of-type(2) {
    top: 0px;
    left: 509px;
}

.tips:nth-of-type(2) .tips-text {
    width: 144px;
    height: 41px;
    border: 2px solid #F96291;
    color: #F96291;
}

.tips:nth-of-type(2) .tips-line {
    width: 2px;
    height: 113px;
    background: #F96291;
    left: 72px;
}

.tips:nth-of-type(3) {
    top: 225px;
    left: 40px;
}

.tips:nth-of-type(3) .tips-text {
    width: 171px;
    height: 227px;
    border: 2px solid #34BBC9;
    color: #34BBC9;
}

.tips:nth-of-type(3) .tips-line {
    width: 31px;
    height: 2px;
    background: #34BBC9;
    top: 28px;
    left: 173px;
}

.tips:nth-of-type(4) {
    top: 248px;
    left: 405px;
}

.tips:nth-of-type(4) .tips-text {
    width: 183px;
    height: 243px;
    border: 2px solid #34BBC9;
    color: #34BBC9;
}

.tips:nth-of-type(4) .tips-line {
    width: 31px;
    height: 2px;
    background: #34BBC9;
    top: 28px;
    left: -29px;
}

.tips:nth-of-type(5) {
    top: 502px;
    left: 835px;
}

.tips:nth-of-type(5) .tips-text {
    width: 121px;
    height: 41px;
    border: 2px solid #FDA63B;
    color: #FDA63B;
}

.tips:nth-of-type(5) .tips-line {
    width: 2px;
    height: 98px;
    background: #FDA63B;
    top: -96px;
    left: 60px;
}

.join-section {
    padding-top: 0;
    text-align: center;
}
</style>

<style scoped>
@media (max-width: 1024px) {
    .culture-section p {
        width: 100%;
    }

    .video {
        margin: auto;
        position: relative;
        width: 100%;
        right: 0;
        float: none;
    }

    .distribution-image-mobile {
        width: 100%;
    }

    .distribution-image-mobile img {
        width: 100%;
    }
}
</style>
