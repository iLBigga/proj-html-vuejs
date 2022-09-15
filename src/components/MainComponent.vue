<template>
    <main>
        <MainJumbo :data="jumboData"/>
        <MainSectionAbout :data="aboutData" />
        <MainSectionPartner :data="partnerImg"/>
        <MainSection3/>
        <MainSection4/>
        <MainSection5/>
        <MainSection6/>
        <MainSection7/>
        <MainSection8/>
    </main>
</template>


<script>

import MainJumbo from './MainSections/MainJumbo.vue';
import MainSectionAbout from './MainSections/MainSectionAbout.vue'
import MainSectionPartner from './MainSections/MainSectionPartner.vue'
import MainSection3 from './MainSections/MainSection3.vue'
import MainSection4 from './MainSections/MainSection4.vue'
import MainSection5 from './MainSections/MainSection5.vue'
import MainSection6 from './MainSections/MainSection6.vue'
import MainSection7 from './MainSections/MainSection7.vue'
import MainSection8 from './MainSections/MainSection8.vue'


import {jumboData, aboutData} from '../mainMyData'

export default {
    name: 'MainComponent',
    components: {
        MainJumbo,
        MainSectionAbout,
        MainSectionPartner,
        MainSection3,
        MainSection4,
        MainSection5,
        MainSection6,
        MainSection7,
        MainSection8,
    },
    data() {
        return {
            // JUMBO SECTION
            jumboData: jumboData,

            // SECTION "About"
            aboutData: aboutData,

            // SECTION "Partner"
            partnerImg: [
                require('../assets/images/ebay-logotan-2x-600x197.png'),
                require('../assets/images/audible-logotan-2x.png'),
                require('../assets/images/bb-logotan-2x.png'),
                require('../assets/images/kindlefire-logo.png')

            ]

            

        }
    }
}
</script>


<style lang="scss">
    @import '../style/general.scss';
</style>