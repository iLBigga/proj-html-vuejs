<template>
    <div class="footer_list">
        <div class="xl_container">
            <div class="d-flex justify-content-between main_footer">
                <!-- LOGO -->
                <figure>

                    <img :src="logo" alt="">
                    
                </figure>
                <div class="d-flex">
                    <!-- ABOUT ME -->
                    <div class="col-3 about_me">

                        <h4 class="title">
                            {{firstList.title}}
                        </h4>

                        <p>
                            {{firstList.paragraph}}
                        </p>

                    </div>
                    <!-- LINKS -->
                    <div class="col-3 useful_links">

                        <h4 class="title">
                            useful <i class="fas fa-external-link-square-alt"></i>
                        </h4>

                        <ul>
                            <li v-for="(el, i) in secondList" :key="i">

                                <font-awesome-icon icon="fa-solid fa-angle-right" />

                                <a href="#">
                                    {{el}}
                                </a>

                            </li>
                            
                        </ul>

                    </div>
                    <!-- CONTACT INFO -->
                    <div class="col-4 contact_info">
                        <h4 class="title">contact info</h4>
                        <ul>
                            <li v-for="(el, i) in thirdList" :key="i">{{el}}</li>
                        </ul>
                        <!-- Logo -->
                        <div class="icon d-flex gap-4">
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                            <font-awesome-icon icon="fa-brands fa-youtube" />
                        </div>
                    </div>

                </div>
            </div>
            <!-- COPYRIGHT -->
            <p class="copyright text-center">&copy; {{copyright.text}}</p>
        </div>  
    </div>
</template>


<script>
export default {
    name: 'FooterList',
    props: {
        logo: String,
        firstList: Object,
        secondList: Object,
        thirdList: Object,
        copyright: Object,
    }
}
</script>


<style lang="scss" scoped>

@import '../../style/general.scss';

    .footer_list{
        background-image:
        linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.5)),
        url('../../assets/images/footer-3.jpg');
        background-size: cover;
        background-position: top right;
        font-family: 'DM Sans', serif;
        padding: 150px 0 50px 0;
        color: white;

        .xl_container{
            max-width: 2130px;
        }

        li{
            line-height: 33px;

                a{
                    padding-left: 1.1rem;
                    color: $light-grey;

                        &:hover{
                            color: $light-orange;
                        }
                }
        }

        .main_footer{
            gap: 20rem;
        }
        
        .title{
            text-transform: uppercase;
            font-family: 'DM Serif Display', serif;  
            padding-bottom: 35px;
        } 

        .about_me{
            padding-right: 50px;

            p {
                line-height: 33px;
                color: $light-grey;
            }
        }

        .contact_info {
            margin-left: auto;
            margin-right: 200px;
            
            ul{
                color: $light-grey;
            }

            .icon{
            color: lightgray;
            }
        }

        .copyright{
            color: $light-grey;
        }

        .copyright{
            padding-top: 170px;
        }
    }
    
</style>