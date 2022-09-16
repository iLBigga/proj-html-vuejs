<template>
    <div class="shop_card">
        <div class="d-flex">
            <div class="col-6">
                <img src="../../assets/images/book-widget.png" alt="Amazon Kindle">
            </div>
            <div class="col-6 align-self-center px-2">

                <h4 class="title">
                    {{title}}
                </h4>

                <p class="author">
                    {{author}}
                </p>

                <p class="paragraph">
                    {{paragraph}}
                </p>

            </div>
        </div>
        <div class="d-flex justify-content-center">
            
            <button class="button button_left">
                <font-awesome-icon icon="fa-brands fa-amazon" /> Buy On Amazon
            </button>

            <button class="button button_right">
                <font-awesome-icon icon="fa-brands fa-apple" /> Buy On AppStore
            </button>

        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopComponent',
    props: {
        title: String,
        author: String,
        paragraph: String,
    }
}
</script>

<style lang="scss" scoped>

@import '../../style/general.scss';

    .shop_card{
        height: 400px;
        width: 700px;
        padding: 3.5rem;
        background-color: white;
        align-self: flex-end;

            .title{
                font-family: 'DM Serif Display', serif;
            }

            .author{
               @extend %subtitle_orange;
               letter-spacing: 1px;
            }   

            .paragraph{
                color: $grey;
                font-family: 'DM Sans', serif;
            }

            .button{
                height: 48px;
                width: 270px;
                border: 1px solid $light-green;
                background-color: rgba($light-green, $alpha: 0.08);
                box-shadow: 0.1px 0.1px 1px $light-green;
                flex-grow: 1;
            }

            .button_left{
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            }

            .button_right{
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
    }
    
</style>