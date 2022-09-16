<template>
    <div class="mainSection_NewsLetter d-flex align-items-center">
        <div class="sm_container">
            <!-- SECTION TITLE -->
            <div class="d-flex flex-column text-center gap-4">
                <div>

                    <h1 class="title ">
                        {{data.title}}
                    </h1>

                    <p class="subTitle">
                        {{data.subTitle}}
                    </p>

                </div>

                <!-- INPUT SECTION -->
                <div class="d-flex justify-content-center gap-3">
                    <input class="text_input" type="text" :placeholder="data.placeholder">
                    <input class="button_input" type="button" :value="data.button">
                </div>

                <p class="paragraph">
                    {{data.paragraph}}
                </p>
                
            </div>   
        </div>
    </div>
</template>


<script>
export default {
    name: 'MainSectionNewsLetter',
    props: {
        data: Object,
    }
}
</script>


<style lang="scss" scoped>

@import '../../style/general.scss';

    .mainSection_NewsLetter{
        padding: 123px 0 135px 0;
        background-image: 
        linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.8)),
        url('../../assets/images/banner-2.jpg');
        background-size: cover;
        background-position: top;
        font-family: 'DM Sans', serif;
        color: white;

            .sm_container {
                max-width: 470px;
            }

            .title{
                @extend %Title;
                color: white;
                padding-bottom: 20px;            
            }

            .subTitle {               
                @extend %subtitle_orange
            }

            input {
                line-height: 45px;
                border-radius: 5px;
                border: 0;
            }

            .text_input {
                width: 295px;
            }

            .button_input{
                width: 190px;
                background-color: $green;
                color: white;
            }

            .paragraph{
                @extend %paragraph;
                padding: 10px 15px;
            }
    }
</style>