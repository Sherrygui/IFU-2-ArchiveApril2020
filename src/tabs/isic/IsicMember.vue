<template>
  <div>
    <section class="part-5">
        <div class="row">
            <div class="col-half">
                <div class="wave-image"> 
                    <img :src="waveImage" id="waveimg" alt="image in wave">
                </div>
            </div>
            <div class="col-half">
                <h2 v-t="'isic.colhalf.whycardTitle'"></h2>
                <p>
                    {{ $t('isic.colhalf.overView1')}}<b> {{ $t('isic.colhalf.overView2')}}</b>{{ $t('isic.colhalf.overView3')}}<b>{{ $t('isic.colhalf.overView4')}}</b>{{ $t('isic.colhalf.overView5')}}<b>{{ $t('isic.colhalf.overView6')}}</b>{{ $t('isic.colhalf.overView7')}}
                </p>
                <p>
                    {{ $t('isic.colhalf.overView8')}}<b>{{ $t('isic.colhalf.overView9')}}</b>{{ $t('isic.colhalf.overView10')}}<b>{{ $t('isic.colhalf.overView11')}}</b>{{ $t('isic.colhalf.overView12')}}
                </p>
                <a href="https://weidian.com/item.html?itemID=2778597927&wfr=c&spider_token=8e9c"><Button :style="{ margin: '24px 0px' }">{{ $t('isic.colhalf.becomeMemberBtnText')}}</Button></a>
            </div>
        </div>
    </section>
    <section class="ifu-discount-banner" :style="{ backgroundColor: 'white' }">
        <h2 v-t="'isic.colhalf.isicDiscountTitle'"></h2>
        <div class="card-list">
            <Card v-for="(item, index) in cardList"
                :key='index'
                :image='item.image'
                :description='item.description'>
            </Card>
        </div>
            <div class="all-discounts">
            <a href="https://www.isic.org" target="_blank" v-t="'isic.colhalf.moreDiscount'" id="more-discount"></a>
        </div>
    </section>
    <section class="ifu-discount-banner">
        <h2 v-t="'isic.colhalf.ifuDiscountTitle'"></h2>
        <div class="ifu-list">
            <Card v-for="(item, index) in ifuList"
                :key='index'
                :image='item.image'
                :description='item.description'>
            </Card>
        </div>
    </section>
    <section class="isic-sample-section">
        <p class="display-mobile" v-t="'isic.colhalf.becomeVIP'"></p>
        <div class="row">
            <div class="col-half">
                <div class="wave-image"> 
                    <img :src="isicSample" alt="image in wave">
                </div>
            </div>
            <div class="col-half">
                <p class="display-desktop" v-t="'isic.colhalf.becomeVipDesktop'"></p>
                <p v-t="'isic.colhalf.becomeVipContent'"></p>
                <Button
                    v-t="'isic.colhalf.buttonText'"
                    :onClick="() => $router.push('contact')"
                />
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import AbenityImage from '@/assets/isic/abenity.png';
import UCSDImage from '@/assets/isic/ucsd.png';
import waveImage from '@/assets/isic/wave-left.png';
import nbaImage from '@/assets/isic/nba.png';
import greImage from '@/assets/isic/gre.png';
import studentUImage from '@/assets/isic/studentuniverse.png';
import hooliImage from '@/assets/isic/hooli.png';
import isicSample from '@/assets/isic/isic-sample.png';
import amazonImage from '@/assets/isic/isic/amazon.png';
import amcImage from '@/assets/isic/isic/amc.png';
import avisImage from '@/assets/isic/isic/avis.png';
import citypassImage from '@/assets/isic/isic/citypass.png';
import lenovoImage from '@/assets/isic/isic/lenovo.png';
import universalImage from '@/assets/isic/isic/universal.png';

export default {
    name: 'IsicMember',
    components: {
        Button,
        Card
    },
    data() {
        return {
            UCSDImage,
            waveImage,
            nbaImage, 
            greImage, 
            studentUImage,
            hooliImage,
            isicSample,
        };
    },
    computed: {
        cardList() {
            return [{
                image: AbenityImage,
                description: this.$t('isic.cardList.imgDescription1'),
            }, {
                image: UCSDImage,
                description: this.$t('isic.cardList.imgDescription2'),
            }, {
                image: nbaImage,
                description: this.$t('isic.cardList.imgDescription3'),
            }, {
                image: avisImage,
                description: this.$t('isic.cardList.imgDescription4'),
            }, {
                image: citypassImage,
                description: this.$t('isic.cardList.imgDescription5'),
            }, {
                image: lenovoImage,
                description: this.$t('isic.cardList.imgDescription6'),
            }, {
                image: universalImage,
                description: this.$t('isic.cardList.imgDescription7'),
            }, {
                image: amcImage,
                description: this.$t('isic.cardList.imgDescription8'),
            }, {
                image: amazonImage,
                description: this.$t('isic.cardList.imgDescription9'),
            }]
        },
        ifuList() {
            return [{
                image: greImage,
                description: this.$t('isic.cardList.imgDescription10'),
            }, {
                image: studentUImage,
                description: this.$t('isic.cardList.imgDescription11'),
            }, {
                image: hooliImage,
                description: this.$t('isic.cardList.imgDescription12'),
            }]
        },
    }
};
</script>

<style scoped>
.card-list, .ifu-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.Card {
    flex-basis: 30%;
    margin: 25px 15px;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    background-color: #FFFFFF;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    align-items: center;
    justify-content: space-between;
}

.part-5 {
    background: url('../../assets/isic/wave.png') no-repeat;
    /* padding: 75px 0px; */
}

.col-half {
    /* flex: 0 0 45%;
    max-width: 45%; */
    flex-basis: 46%;
}

.wave-image {
    text-align: center; 
}

.wave-image > img{
    width: 100%; 
}

.col-half > p {
    width: 80%;
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0.02em;
}

.all-discounts {
    text-align: right;
    margin: 18px 32px 0px 0px;
}

.ifu-discount-banner {
    background-color: #F1F9FF;
    /* padding: 100px 130px;  */
}

.display-mobile {
    display: none; 
}

.display-desktop {
    font-weight: bold; 
}

#more-discount {
    text-decoration: none;
    color: #3ea6d6;
}

.card-section {
    padding: 0;
}

</style>

<style scoped>
@media (max-width: 1024px) {
    #waveimg {
        width: 100%;
    }

    .all-discounts {
        margin: 18px 0;
    }

    .col-half {
        max-width: 100%;
        flex: 0 0 100%; 
    }

    .col-half > p {
        width: 100%; 
    }

    .row {
        margin-left: 0px; 
        margin-right: 0px; 
    }

    .wave-image > img {
        width: 100%; 
    }

    .part-5 {   
        padding: 10%;
        background: url('../../assets/isic/wave-mobile.png') no-repeat;
        background-position: center center;
        background-size: cover;
    }

    .Card {
        flex-basis: 100%; 
        margin: 25px 0px;
    }

    .display-mobile {
        display: block; 
        font-weight: bold; 
    }

    .display-desktop {
        display: none; 
        font-weight: bold; 
    }

    h2 {
        padding: 0;
    }

    .card-section {
        padding: 88px 29px;
    }

    .isic-sample-section {
        padding-bottom: 50px;
    }
}
</style>
