<template>
    <div class="mainSection_discover">
        <div class="sm_container">       
            <div class="d-flex flex-column text-center">
                <h1 class="title">{{data.title}}</h1>
                <p class="subtitle">{{data.subTitle}}</p>
            </div>
            <div class="d-flex justify-content-between card_section">
                <div v-for="(card, i) in data.cards" :key='i'>
                    <div class="custom_card">
                        <img :src="findImg(card.img)" alt="">
                        <div class="d-flex align-items-center flex-column card_text text-center">
                            <h5>{{card.title}}</h5>
                            <hr>
                            <p>{{card.subTitle}}</p>
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
    name: 'MainSectionDiscover',
    props: {
        data: Object,
    },
    methods:{
        findImg,
    }
}
</script>


<style lang="scss" scoped>

@import '../../style/general.scss';

    .mainSection_discover{
        padding-top: 80px;
        padding-bottom: 110px;
        font-family: $generalFont;

            .title{
                font-family: $titleFont;
                padding-bottom: 5px;
            }

            .subtitle{
                text-transform: uppercase;
                font-weight: 500;
                color: $green;
                letter-spacing: 2px;
            }

            .card_section{
                padding-top: 35px;

                    .custom_card {
                        position: relative;
                        border-bottom-left-radius: 20px;  
                        height: 520px;       
                        width: 400px;              
                    }

                    img{
                        border-bottom-right-radius: 100px;  
                        height: 520px;       
                        width: 410px;   
                        object-fit: cover;
                        object-position: left;
                    }

                    .card_text {
                        position: absolute;
                        bottom: 22px;
                        right: 0px;
                        left: 0;
                        color: white;

                            h5{
                                font-size: 30px;
                                font-weight: normal;
                            }

                            hr{
                                width: 45px;
                                margin: 10px;
                            }

                            p{
                                color: $orange;
                            }
                    }


            }
    }
</style>