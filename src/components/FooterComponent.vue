<template>
    <footer>
        <FooterList :logo="logo" :firstList="aboutMeList" :secondList="usefulLinks" :thirdList="contactList" :copyright="copyright"/>
    </footer>
</template>


<script>

import FooterList from '../components/FooterSections/FooterList.vue'

import {aboutMeList, usefulLinks, contactList, copyright} from '../footerMyData.js'

export default {
    name: 'FooterComponent',
    components: {
        FooterList,
    },
    data() {
        return {
            // LOGO
            logo: require('../assets/images/author-logo-round-small.png'),
            // LIST
            aboutMeList,
            usefulLinks,
            contactList,
            copyright,
        }
    }
}
</script>


<style lang="scss">
    @import '../style/general.scss';
</style>