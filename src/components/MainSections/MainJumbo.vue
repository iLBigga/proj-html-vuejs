<template>
    <div class="jumbo_section d-flex">
        
        <div class="jumbo_container d-flex align-items-end">
            <div class="col-10 d-flex flex-column gap-3 text_container">
                <h1 class="jumbo_title">{{data.title}}</h1>
                <p class="jumbo_paragrafo">{{data.paragraph}}</p>
                <p class="jumbo_author">{{data.author}}</p>
                <div class="button_container d-flex">
                    <button><font-awesome-icon icon="fa-solid fa-arrow-left" /></button>
                    <button><font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
                </div>
            </div>
        </div>
        <ShopComponent :title="shopTitle" :author="shopAuthor" :paragraph="shopParagraph"/>
    </div>
</template>


<script>

import ShopComponent from './ShopComponent.vue';

export default {
    name: 'MainJumbo',
    components: {
        ShopComponent,
    },
    props: {
        data: Object,
    },
    data() {
        return {
            // SHOP COMPONENT
            shopTitle: 'Latest Book Release',
            // Auto Uppercase
            shopAuthor: 'd. vaughn autobiography',
            shopParagraph: 'Vestibulum tristique turpis in ipsum egestas lobortis. Duis maximus bibendum volupat. Lorem ipsum dolor sit amet.'
        };
    },
}
</script>


<style lang="scss" scoped>

@import '../../style/general.scss';
@import '../../style/variables.scss';
    
    .jumbo_section {
        background-image:
        linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgb(0, 0, 0, 0.9)),
        url('../../assets/images/hero-07-2x.jpg');
        background-size: cover;
        background-position: center;
        height: 1150px;
        

            .jumbo_container {
                padding-left: 145px;

                    .text_container {
                        padding-bottom: 310px;
                    }
            }

            .jumbo_title{
                font-family: 'Kristi', cursive;
                font-size: 6rem;
                color: $orange;
            }

            .jumbo_paragrafo{
                font-family: 'DM Serif Display', serif;
                color: white;
                font-size: 50px;
                line-height: 4.4rem;
            }

            .jumbo_author{
                color: $grey;
                font-style: italic;
                font-size: 27px;
            }

            .button_container {
                gap: 2px;

                button{
                    height: 45px;
                    width: 45px;
                    border: 0px;
                    background-color: black;
                    color: white;
                }
            }
    }

    
</style>