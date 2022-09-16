<template>
    <main>
        <MainJumbo :data="jumboData"/>
        <MainSectionAbout :data="aboutData" />
        <MainSectionPartner :data="partnerData"/>
        <MainSectionAudiobook :data="audioBookData"/>
        <MainSectionCritics :data="criticsData" :jumboCard="criticsCardJumbo" :cards="criticsCard"/>
        <MainSectionEvents :data="eventsData"/>
        <MainSectionNewsLetter :data="newsletterData"/>
        <MainSectionDiscover :data="discoverData"/>
        <MainSection8/>
    </main>
</template>


<script>

import MainJumbo from './MainSections/MainJumbo.vue';
import MainSectionAbout from './MainSections/MainSectionAbout.vue'
import MainSectionPartner from './MainSections/MainSectionPartner.vue'
import MainSectionAudiobook from './MainSections/MainSectionAudiobook.vue'
import MainSectionCritics from './MainSections/MainSectionCritics.vue'
import MainSectionEvents from './MainSections/MainSectionEvents.vue'
import MainSectionNewsLetter from './MainSections/MainSectionNewsLetter.vue'
import MainSectionDiscover from './MainSections/MainSectionDiscover.vue'
import MainSection8 from './MainSections/MainSection8.vue'


import {jumboData, aboutData, newsletterData, criticsData, criticsCardJumbo, criticsCard, eventsData, discoverData} from '../mainMyData'

export default {
    name: 'MainComponent',
    components: {
        MainJumbo,
        MainSectionAbout,
        MainSectionPartner,
        MainSectionAudiobook,
        MainSectionCritics,
        MainSectionEvents,
        MainSectionNewsLetter,
        MainSectionDiscover,
        MainSection8,
    },
    data() {
        return {
            // JUMBO SECTION
            jumboData: jumboData,

            // SECTION "About"
            aboutData: aboutData,

            // SECTION "Partner"
            partnerData: [
                require('../assets/images/ebay-logotan-2x-600x197.png'),
                require('../assets/images/audible-logotan-2x.png'),
                require('../assets/images/bb-logotan-2x.png'),
                require('../assets/images/kindlefire-logo.png')
            ],

            // SECTION "AudioBook"
            audioBookData: {
                appPreview: require('../assets/images/audible-app-2x.png'),
                title: 'New Audiobook',
                subTitle: 'no time to read? no problem. listen to it',
                paragraph: 'Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue cursus.',
                logos: {
                    firstLogo: require('../assets/images/audible-logo-color.png'),
                    secondLogo: require('../assets/images/bn-logo-color.png'),
                    thirdLogo: require('../assets/images/kindle-logo-color.png'),
                }
            },

            // SECTION "Critics"
            criticsData: criticsData,
            criticsCardJumbo: criticsCardJumbo,
            criticsCard: criticsCard,

            // SECTION "Events"
            eventsData: eventsData,

            //SECTION "Newsletter"
            newsletterData: newsletterData,

            // SECTION "Discover"
            discoverData: discoverData,
        }
    },
}
</script>


<style lang="scss">
    @import '../style/general.scss';
</style>