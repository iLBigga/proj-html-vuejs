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
        <MainSectionRecentArticles :data="articlesData"/>
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
import MainSectionRecentArticles from './MainSections/MainSectionRecentArticles.vue'


import {jumboData, aboutData, partnerData, audioBookData, newsletterData, criticsData, criticsCardJumbo, criticsCard, eventsData, discoverData, articlesData} from '../mainMyData'

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
        MainSectionRecentArticles,
    },
    data() {
        return {
            // JUMBO SECTION
            jumboData: jumboData,

            // SECTION "About"
            aboutData: aboutData,

            // SECTION "Partner"
            partnerData: partnerData,

            // SECTION "AudioBook"
            audioBookData: audioBookData,

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

            // SECTION "RecentArticles"
            articlesData: articlesData,
        }
    },
}
</script>


<style lang="scss">
    @import '../style/general.scss';
</style>