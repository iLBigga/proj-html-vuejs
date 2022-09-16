<template>
    <div class="mainSection_audioBook">

        <div class="sm_container d-flex">
            <!-- LEFT COL -->
            <div class="col-6 align-self-end text-center">
                <img class="app_screen" :src="findImg(data.appPreview)" alt="App Preview">
            </div>
            <!-- RIGHT COL -->
            <div class="col-6 d-flex flex-column gap-2 right_col align-self-center text-center">
                <div>
                    <h1 class="title">{{data.title}}</h1>
                    <p class="subTitle py-2">{{data.subTitle}}</p>
                </div>
                <p class="paragraph px-4">{{data.paragraph}}</p>
                <!-- LOGO -->
                <div class="d-flex justify-content-between">
                    <figure v-for="(logo ,i) in data.logos" :key="i"><img :src="findImg(logo)" alt=""></figure>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import {findImg} from '../../myFunctions.js'

export default {
    name: 'MainSectionAudiobook',
    props: {
        data: Object,
    },
    methods: {
        findImg,
    }
}
</script>


<style lang="scss" scoped>

@import '../../style/general.scss';

    .mainSection_audioBook{
        background-image:
        linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.8)),
        url('../../assets/images/banner.jpg');
        background-size: cover;
        background-position: center center;
        font-family: 'DM Sans', serif;

            .sm_container{
                height: 610px;
            }

            .right_col {
                padding: 0 100px;
            }

            .title {
                @extend %Title;
                color: white;
            }

            .app_screen{
                width: 510px;
            }

            .subTitle {
                @extend %subtitle_orange
            }

            .paragraph {
                @extend %paragraph;
                padding: 0 10px;
            }

    }
</style>