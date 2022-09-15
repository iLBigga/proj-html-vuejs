<template>
    <main>
        <MainJumbo :data="jumboData"/>
        <MainSectionAbout :data="aboutData" />
        <MainSection2/>
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
import MainSection2 from './MainSections/MainSection2.vue'
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
        MainSection2,
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

        }
    }
}
</script>


<style lang="scss">
    @import '../style/general.scss';
</style>