<template>
    <div class="event">
        <a :href="link" target="_blank">
            <img :src="image" alt="">
            <img :src="arrow" alt="arrow" id="arrow">
            <div class="event-text">{{ text }}</div>
        </a>
    </div>
</template>

<script>
import arrow from '@/assets/home/Arrow.png';
export default {
    name: 'Event',
    data() {
        return {
            arrow,
        };
    },
    props: {
        image: String,
        text: String,
        link: String,
    },
};
</script>

<style lang="scss" scoped>
.event {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.event:hover {
    background: #000;
    img {
        opacity: 0.5;
    }

    #arrow {
        opacity: 1;
        position: absolute;
        top: 37%;
        left: 40%;
        height: auto;
        min-width: auto;
        display: flex;
    }
}

.event-text {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    background-color: rgba(78, 189, 247, 0.9);
    color: white;
}

img {
    height: 100%;
    min-width: 100%;
}

#arrow {
    display: none;
}
</style>
