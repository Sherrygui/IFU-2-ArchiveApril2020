<template>
    <div class="book">
        <div class="book-inner desktop">
            <div
                v-if="activeIndex > 0"
                class="left-arrow"
                @click="prevTwoPage"
            />
            <div
                v-else
                class="left-arrow disabled"
            />
            <div class="page-list">
                <div
                    v-for="(page, index) in list"
                    :key="page"
                    :class="getPageClass(index)"
                    :style="getPageStyle(index)"
                >
                    <img :src="page" />
                </div>
            </div>
            <div
                v-if="activeIndex < list.length - 2"
                class="right-arrow"
                @click="nextTwoPage"
            />
            <div
                v-else
                class="right-arrow disabled"
            />
        </div>
        <div class="page-inner-mobile mobile">
            <div class="page-container">
                <img :src="list[activeIndex]" />
            </div>
        </div>
        <div class="page-dots">
            <div
                v-if="activeIndex > 0"
                class="left-arrow mobile"
                @click="prevPage"
            />
            <div
                v-else
                class="left-arrow disabled mobile"
            />
            <div
                class="desktop"
                v-for="(page, index) in list"
                :key="page"
                :style="getPageDotTwoStyle(index)"
            />
            <div
                class="mobile"
                v-for="(page, index) in list"
                :key="index"
                :style="getPageDotStyle(index)"
            />
            <div
                v-if="activeIndex < list.length - 1"
                class="right-arrow mobile"
                @click="nextPage"
            />
            <div
                v-else
                class="right-arrow disabled mobile"
            />
        </div>
    </div>
</template>

<script>
import dotImage from '@/assets/book/dot.png';
import openDotImage from '@/assets/book/open-dot.png';

export default {
    name: 'Book',
    props: {
        list: Array,
    },
    data() {
        return {
            activeIndex: 0,
            dotImage,
            openDotImage,
        };
    },
    methods: {
        getPageClass(index) {
            if (index <= this.activeIndex) {
                return 'page page-left';
            }
            return 'page page-right';
        },
        getPageStyle(index) {
            const style = {};
            const offset = Math.floor(Math.abs(index - this.activeIndex) / 2);
            if (index <= this.activeIndex) {
                style.zIndex = index;
                style.transform = `rotateX(15deg) rotateY(-180deg) translateZ(${offset}px)`;
            } else {
                style.zIndex = this.list.length - index;
                style.transform = `rotateX(15deg) rotateY(0deg) translateZ(-${offset}px)`;
            }
            return style;
        },
        getPageDotStyle(index) {
            const style = {};
            if (index === this.activeIndex) {
                style.background = `url(${dotImage})`;
            } else {
                style.background = `url(${openDotImage})`;
            }
            style.width = '10px';
            style.height = '10px';
            return style;
        },
        getPageDotTwoStyle(index) {
            const style = {};
            if (index === this.activeIndex || index === this.activeIndex + 1) {
                style.background = `url(${dotImage})`;
            } else {
                style.background = `url(${openDotImage})`;
            }
            style.width = '10px';
            style.height = '10px';
            return style;
        },
        prevPage() {
            this.activeIndex -= 1;
        },
        nextPage() {
            this.activeIndex += 1;
        },
        prevTwoPage() {
            this.activeIndex -= 2;
        },
        nextTwoPage() {
            this.activeIndex += 2;
        },
    },
};
</script>

<style scoped>
.book-inner {
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.page-list {
    position: relative;
    width: 1040px;
    height: 693px;
    transform-style: preserve-3d;
}

.page {
    position: absolute;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    border: 6px solid #F96291;
    right: 0;
    transition: transform linear 1s;
    transform-origin: left;
    background: white;
}

.page-dots {
    max-width: 500px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

}

.page img {
    max-width: 100%;
    max-height: 100%;
    transition-delay: 0.5s;
}

.page-right img {
    transform: scaleX(1);
}

.page-left img {
    transform: scaleX(-1);
}

.left-arrow,
.right-arrow {
    width: 0;
    height: 0;
    border-top: 27px solid transparent;
    border-bottom: 27px solid transparent;
    border-right: 50px solid #F96291;
}

.disabled {
    border-right: 50px solid gray;
}

.right-arrow {
    transform: rotate(180deg)
}
</style>

<style scoped>
/* Mobile */
@media (max-width: 1024px) {
    .page-container {
        width: 100%;
        height: 100%;
    }

    img {
        width: 100%;
    }

    .left-arrow,
    .right-arrow {
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
        border-right: 20px solid #F96291;
    }

    .disabled {
        border-right: 20px solid gray;
    }
}
</style>
