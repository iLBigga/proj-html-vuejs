<template>
    <div class="mainSection_events">
        <div class="lg_container">
            <div class="section_title text-center">
                <h1>{{data.title}}</h1>
                <p>{{data.subTitle}}</p>
            </div>
            <div class="d-flex justify-content-betweenp-4">
                <div v-for="(card, i) in data.cards" :key="i" class="custom_card col-4">
                    <div class="card_top">
                        <img :src="findImg(card.img)" alt="">
                    </div>
                    <div class="card_bottom text-center">
                        <h5>{{card.title}}</h5>
                        <p>{{card.paragraph}}</p>
                    </div>
                </div>
            </div>   
        </div>
    </div>
</template>


<script>

import {findImg} from '../../myFunctions.js'

export default {
    name: 'MainSectionEvents',
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

    .mainSection_events{
        padding-top: 75px;
        padding-bottom: 95px;
        background-color: $beige;

            .section_title {
                
                    h1{
                        font-family: $titleFont;
                        color: black;
                        padding-bottom: 5px;
                    }

                    p{
                        text-transform: uppercase;
                        color: $orange;
                        letter-spacing: 2px;
                        font-weight: 500;
                    }
            }

            .custom_card {
                padding: 60px 25px 0 25px;
                font-family: $generalFont;

                    .card_bottom {
                        background-color: white;
                        padding: 35px 40px 20px 40px;
                        color: $grey;

                            h5{
                                color: black;
                                font-size: 25px;
                                padding-bottom: 18px;
                                border-bottom: 1px solid rgba($color: lightgray, $alpha: 0.3);
                                font-weight: 400;
                            }

                            p{
                                padding-top: 12px;
                            }
                    }
            }
    }
</style>