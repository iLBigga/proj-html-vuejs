<template>
    <div class="mainSection_audioBook">
        <div class="sm_container d-flex">
            <div class="col-6 align-self-end text-center">
                <img class="app_screen" :src="findImg(data.appPreview)" alt="App Preview">
            </div>
            <div class="col-6 d-flex flex-column gap-2 right_col align-self-center text-center">
                <div>
                    <h1>{{data.title}}</h1>
                    <p class="subTitle py-2">{{data.subTitle}}</p>
                </div>
                <p class="paragraph px-5">{{data.paragraph}}</p>
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
        background-image: url('../../assets/images/banner.jpg');
        background-size: cover;
        background-position: center center;
        font-family: 'DM Sans', serif;

            .sm_container{
                height: 610px;
            }

            .right_col {
                padding: 0 100px;
            }

            h1 {
                font-family: 'DM Serif Display', serif;
                color: white;
            }

            .app_screen{
                width: 510px;
            }

            .subTitle {
                text-transform: uppercase;
                color: $orange;
                font-weight: bold;

                letter-spacing: 2px;
            }

            .paragraph {
                color: $grey;
            }

    }
</style>