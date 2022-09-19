<template>
    <div class="mainSection_discover">
        <div class="sm_container">    
        <!-- SECTION TITLE -->
            <div class="section_title d-flex flex-column text-center">

                <h1 class="title">
                    {{data.title}}
                </h1>

                <p class="subtitle">
                    {{data.subTitle}}
                </p>

            </div>

            <!-- MAIN SECTION -->

            <!-- Card -->
            <div class="d-flex justify-content-between card_section">
                <div v-for="(card, i) in data.cards" :key='i'>
                    <div class="custom_card">
                        <!-- Card Imgae -->
                        <img :src="findImg(card.img)" alt="">
                        <!-- Card text -->
                        <div class="d-flex align-items-center flex-column card_text text-center">

                            <h5 class="title">
                                {{card.title}}
                            </h5>

                            <hr>

                            <p class="subtitle">
                                {{card.subTitle}}
                            </p>
                            
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

        
            .section_title{
                
                .title{
                    @extend %Title;
                    padding-bottom: 5px;
                }
    
                .subtitle{
                    @extend %subtitle_green
                }
            }

            .card_section{
                padding-top: 35px;

                    .custom_card {
                        position: relative;
                        border-bottom-right-radius: 20px;  
                        height: 520px;       
                        width: 400px;       

                            &::after{
                                content: '';
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.5)),;
                                border-bottom-right-radius: 100px;
                            }
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
                        z-index: 1;

                            .title{
                                font-size: 30px;
                                font-weight: normal;
                            }

                            hr{
                                width: 45px;
                                margin: 10px;
                            }

                            .subtitle{
                                color: $orange;
                                text-transform: none;
                                font-weight: normal;
                                letter-spacing: normal;
                            }
                    }
            }
    }
</style>