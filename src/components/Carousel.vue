<template>
    <div class="carousel">
        <div
            class="active-item"
            :style="{ backgroundImage: `url(${activeItem.image})`, backgroundSize: 'cover' }">
            <div v-if="isShow">
                <p style="font-size: 30px; margin: 0">{{ title }}</p>
                <p style="font-size: 18px; font-weight: 700">{{ text }}</p>
            </div>
            <div class="text-container">
                <div class="line"></div>
                <p>{{ activeItem.text }}</p>
            </div>
        </div>
        <div class="list">
            <a v-for="(item, index) in list" :key="index"
            :style="listStyle(list.length, index, item.backgroundColor)" @click="changeItem(item, index)"
            @mouseenter="onHover(index)"
            @mouseleave="onLeave"
            >
                <div class="list-item" >
                    <div class="num">{{ '0' + (index + 1) }}</div>
                    <div class="content">
                        <div>
                            <img :src="item.icon" alt="">
                            <span style="white-space: pre-line">{{ item.title }}</span>
                            <p class="subTitle">{{ item.subTitle }}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    props: {
        list: Array,
        isShow: Boolean,
    },
    data() {
        return {
            activeItem: this.list[0],
            title: this.list[0].title,
            text: this.list[0].subTitle,
            index: 0,
            hoverIndex: null,
        };
    },
    watch: {
        list(val) {
            this.activeItem = val[this.index]
            this.title = val[this.index].title,
            this.text = val[this.index].subTitle
        }
    },
    methods: {
        changeItem(newItem, index) {
            this.index = index
            this.activeItem = newItem;
            this.title = newItem.title,
            this.text = newItem.subTitle
            if (newItem.position) {
                document.querySelector(newItem.position).scrollIntoView(true) 
            }
        },
        onHover(index) {
            this.hoverIndex = index;
        },
        onLeave() {
            this.hoverIndex = null;
        },
        listStyle(length, index, backgroundColor) {
            const style = {
                zIndex: length - index,
            };
            if (index === 0) {
                style.borderRadius = '0 10px 0 0';
            } else if (index === length - 1) {
                style.borderRadius = '0 0 10px 0';
            }
            if (this.hoverIndex !== null && this.hoverIndex === index) {
                style.backgroundColor = 'white';
                style.border = `1px solid ${backgroundColor}`;
                style.color = backgroundColor;
                return style;
            }
            style.backgroundColor = backgroundColor;
            return style;
        }
    },
};
</script>

<style lang="scss" scoped>
.carousel {
    height: 450px;
    display: flex;
    color: white;
}
.active-item {
    width: 825px;
    height: 100%;
    padding: 52px 30px 52px 50px;
    box-sizing: border-box;
    background-repeat: no-repeat;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    border-radius: 10px 0 0 10px;
}
.active-item p{
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0.02em;
}
.list {
    width: 328px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.list a{
    text-decoration: none;
    color: #fff;
    flex: 1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: relative;
}
.list-item span {
    font-size: 24px;
    display: block;
}
.list a:hover .num {
    color: inherit;
}
.num{
    font-size: 50px;
    color: rgba(255, 255, 255, 0.21);
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
}
.num span{
    display: block;
}
.content{
    display: inline-block;
    float: right;
    text-align: right;
    right: 20px;
    position: absolute;
    bottom: 20px;
}
.subTitle{
    margin: 0;
}
.line{
    display: inline-block;
    height: 110px;
    border: 2px solid #FE4C31;
    position: absolute;
    top: 25px;
    left: -20px;
}
.text-container{
    display: inline-block;
    position: relative;
}
</style>
<style lang="scss" scoped>
@media(max-width: 1024px) {
    .list{
        display: none;
    }
    .line{
        transform: rotate(90deg);
        top: -60px;
        left: 56px;
    }
    .active-item{
        background-size: 100% 100%;
        width: 100%;
        padding: 50px 30px 50px 30px;
        p{
            font-size: 14px;
            line-height: 27px; 
        }
    }
}
@media(max-width: 414px) {
    .carousel{
        height: inherit;
    }
    .active-item{
        background-size: 100% 100%;
        width: 100%;
        padding: 50px 30px 50px 30px;
        background-image: url('../assets/mobilebg.png') !important;
        background-repeat: no-repeat; 
    }
}
</style>