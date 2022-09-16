<template>
    <div class="mainSection_critics">
        <div class="sm_container">
            <div class="d-flex justify-content-between align-items-center section_title">
                <div>
                    <h1 class="title">{{data.title}}</h1>
                    <p class="subtitle">{{data.subTitle}}</p>
                </div>
                <div>
                    <input class="button" type="button" :value="data.button">
                </div>
            </div>

            <div class="d-flex justify-content-between">
                <div class="d-flex gap-3 flex-column left_col">
                    <h2 class="title">{{jumboCard.title}}</h2>
                    <p class="subtitle">{{jumboCard.subTitle}}</p>
                    <p class="paragraph">{{jumboCard.firstParagraph}}</p>
                    <p class="paragraph">{{jumboCard.secondParagraph}}</p>
                    <p class="author d-flex align-items-center"><img class="logo_publisher" :src="findImg(jumboCard.author.logo)" alt="The Guardian">{{jumboCard.author.name}} <span class="publisher">{{jumboCard.author.publisher}}</span> </p>
                </div>

                <div class="d-flex text-center flex-column right_col justify-content-between">
                    <div v-for="(card, i) in cards" :key="i" class="custom_card">
                        <div class="card_text">
                            <h4 class="title">{{card.title}}</h4>
                            <p class="paragraph">{{card.paragraph}}</p>
                            <div class="triangle"></div>
                        </div>
                        <p class="author d-flex align-items-center"><img class="logo_publisher" :src="findImg(card.author.logo)" :alt="card.author.logo">{{card.author.name}} <span class="publisher">{{card.author.publisher}}</span></p>
                    </div>
                </div>   
            </div>
        </div>
    </div>
</template>


<script>

import {findImg} from '../../myFunctions.js'

export default {
    name: 'MainSectionCritics',
    props: {
        data: Object,
        jumboCard: Object,
        cards: Array,
    },
    methods: {
        findImg,
    }
}
</script>


<style lang="scss" scoped>

@import '../../style/general.scss';

    .mainSection_critics{
        padding: 77px 0px 100px 0px;
        font-family: $generalFont;

            h2, h4{
                font-family: $titleFont;
            }

            .section_title {
                padding-bottom: 15px;

                .title{
                        @extend %Title;
                        padding-bottom: 5px;
                    }

                    .subtitle {
                        @extend %subtitle_green
                    }

                    .button {
                        @extend %orange_button
                    }
            }

            .logo_publisher {
                padding-right: 20px;
            }

            .publisher {
                display: inline-block;
                padding-left: 5px;
            }

            .author {
                font-weight: bold;
            }

            
            .left_col {
                flex-basis: 55%;
                background-image:
                linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.7)),
                url('../../assets/images/testimonial2-2x.jpg');
                background-size: cover;
                border-bottom-right-radius: 5rem;
                color: white;
                padding: 140px 128px;

                    .title{
                        border-bottom: 1px solid rgba($color: white, $alpha: 0.5);
                        font-size: 35px;
                        padding-bottom: 2rem;
                        margin-bottom: 1.3rem;
                    }

                    .subtitle {
                        font-size: 1.15rem;
                    }

                    .publisher {
                        color: $green;
                    }
            }

            .right_col {
                color: $grey;
                flex-basis: 38%;
                gap: 50px;

                    .title{
                        color: black;
                        padding-bottom: 10px;
                    }

                    .publisher {
                        color: black;
                        font-weight: 400;
                    }

                    .paragraph {
                        @extend %paragraph
                    }

                    .author{
                        padding-top: 15px;
                        margin: 0;
                    }

                    .card_text {
                        padding: 50px 50px;
                        background-color: $beige; 
                        position: relative;                   
                    }
        
                    .triangle{
                        position: absolute;
                        bottom: -11px;
                        left: 20px;
                        widows: 0;
                        height: 0;
                        border-left: 20px solid transparent;
                        border-right: 20px solid transparent;
        
                        border-top: 20px solid $beige;
                    }
            }
    }
</style>