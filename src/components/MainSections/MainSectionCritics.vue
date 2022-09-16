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
                <div class="col-6 d-flex gap-2 flex-column left_col">
                    <h2 class="title">{{jumboCard.title}}</h2>
                    <p class="subtitle">{{jumboCard.subTitle}}</p>
                    <p>{{jumboCard.firstParagraph}}</p>
                    <p>{{jumboCard.secondParagraph}}</p>
                    <p class="author d-flex align-items-center"><img class="logo_publisher" :src="findImg(jumboCard.author.logo)" alt="The Guardian">{{jumboCard.author.name}} <span class="publisher">{{jumboCard.author.publisher}}</span> </p>
                </div>
                <div class="col-4 d-flex text-center flex-column right_col justify-content-between">
                    <div v-for="(card, i) in cards" :key="i">
                        <div class="card_text">
                            <h4 class="title">{{card.title}}</h4>
                            <p>{{card.paragraph}}</p>
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

            h1, h2, h4{
                font-family: $titleFont;
            }

            .section_title {
                padding-bottom: 15px;

                .title{
                        padding-bottom: 5px;
                    }

                    .subtitle {
                    text-transform: uppercase;
                    color: $green;
                    letter-spacing: 2px;
                    font-weight: 500;
                    }

                    .button {
                        padding: 10px 40px;
                        border-radius: 10px;
                        background-color: $orange;
                        color: white;
                        border: 0;
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
                // padding: 110px 110px 120px 95px;
                background-image: url('../../assets/images/testimonial2-2x.jpg');
                background-size: cover;
                border-bottom-right-radius: 5rem;
                color: white;
                padding: 125px 93px;
                

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
                color: $grey;;

                    .title{
                        color: black;
                    }

                    .publisher {
                        color: black;
                        font-weight: 400;
                    }

                    .author{
                        padding-top: 15px;
                        margin: 0;
                    }
            }

            .card_text {
                padding: 50px 50px;
                background-color: $beige;
            }
    }
</style>