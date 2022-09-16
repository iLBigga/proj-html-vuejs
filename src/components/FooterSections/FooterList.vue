<template>
    <div class="footer_list">
        <div class="xl_container">
            <div class="d-flex justify-content-between">
                <!-- LOGO -->
                <figure>
                    <img :src="logo" alt="">
                </figure>
                <!-- ABOUT ME -->
                <div class="col-3 about_me">
                    <h4>{{firstList.title}}</h4>
                    <p>{{firstList.paragraph}}</p>
                </div>
                <!-- LINKS -->
                <div class="col-3 useful_links">
                    <h4>useful <i class="fas fa-external-link-square-alt    "></i></h4>
                    <ul>
                        <li v-for="(el, i) in secondList" :key="i"><font-awesome-icon icon="fa-solid fa-angle-right" /><a href="#">{{el}}</a></li>
                    </ul>
                </div>
                <!-- CONTACT INFO -->
                <div class="col-3 contact_info">
                    <h4>contact info</h4>
                    <ul>
                        <li v-for="(el, i) in thirdList" :key="i">{{el}}</li>
                    </ul>
                    <div>icon</div>
                </div>
            </div>
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
        background-image: url('../../assets/images/footer-3.jpg');
        background-size: cover;
        font-family: 'DM Sans', serif;
        padding: 120px 0 52px 0;
        color: white;

        .about_me{
            padding-right: 150px;

            p {
                line-height: 33px;
                color: $light-grey;
            }
        }

        .contact_info {
            
            ul{
                color: $light-grey;
            }
        }

        .copyright{
            color: $light-grey;
        }

        h4{
            text-transform: uppercase;
            font-family: 'DM Serif Display', serif;  
            padding-bottom: 35px;
        }


        li{
            line-height: 33px;

                a{
                    padding-left: 1.1rem;
                }
        }

        .copyright{
            padding-top: 80px;
        }
    }
    
</style>