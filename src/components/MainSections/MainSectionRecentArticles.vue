<template>
    <div class="mainSection_recentArticles">
        <div class="sm_container">
            <div class="d-flex justify-content-between align-items-center section_title">
                <div>
                    <h1 class="title">{{data.title}}</h1>
                    <p class="subtitle">{{data.subTitle}}</p>
                </div>
                <div>
                    <input class="button" type="button" :value="data.button" id="">
                </div>         
            </div>

            <div class="d-flex justify-content-between gap-5">
                <div class="col-8 col_left">
                    <div class="custom_card">
                        <img :src="findImg(data.jumboCard.img)" alt="data.jumboCard.img">
                        <div class="card_bottom">
                            <div class="card_title">
                                <h5 class="title">{{data.jumboCard.title}}</h5>
                                <p class="author">{{data.jumboCard.author}}</p>
                            </div>
                            <p class="paragraph">{{data.jumboCard.paragraph}}</p>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-column col_right gap-5">
                    <div v-for="(card, i) in data.cards" :key="i" class="custom_card">
                        <img :src="findImg(card.img)" :alt="card.img">
                        <div class="card_text">
                            <h5 class="title">{{card.title}}</h5>
                            <p class="date">{{card.date}}</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </div>
</template>


<script>

import {findImg} from '../../myFunctions.js'

export default {
    name: 'MainSectionRecentArticles',
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

    .mainSection_recentArticles{
        background-color: $beige;
        padding-top: 115px;
        padding-bottom: 135px;
        font-family: $generalFont;


            .section_title{
                padding-bottom: 15px;

                    .title{
                        @extend %Title;
                        padding-bottom: 5px;
                    }

                    .subtitl{
                       @extend %subtitle_green
                    }

                    .button {
                        padding: 10px 75px;
                        border: 0;
                        background-color: $orange;
                        color: white;
                        border-radius: 5px;
                    }
            }


            .col_left {
                background-color: white;
                padding: 40px;

                    .card_bottom{
                        padding: 0 20px;
                    }

                    .card_title {
                        padding-top: 25px;

                            .title{
                                padding-bottom: 5px;
                                font-size: 24px;
                            }
                    }

                    .paragraph{
                        padding-right: 50px;
                        font-size: 1.1rem;
                    }
            }

            .col_right{
                background-color: white;
                padding: 35px;

                    .card_text{
                        padding-top: 20px;

                            .title{
                                margin: 0;
                                padding-bottom: 5px;
                                font-size: 24px;
                            }

                            .date{
                                font-size: 14px;
                            }
                    }
            }
    }
</style>