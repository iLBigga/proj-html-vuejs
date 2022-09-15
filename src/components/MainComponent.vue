<template>
    <main>
        <MainJumbo :title="titleJumbo" :paragraph="paragraphJumbo" :paragraphAuthor="paragraphAuthorJumbo"/>
        <MainSection1/>
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
import MainSection1 from './MainSections/MainSection1.vue'
import MainSection2 from './MainSections/MainSection2.vue'
import MainSection3 from './MainSections/MainSection3.vue'
import MainSection4 from './MainSections/MainSection4.vue'
import MainSection5 from './MainSections/MainSection5.vue'
import MainSection6 from './MainSections/MainSection6.vue'
import MainSection7 from './MainSections/MainSection7.vue'
import MainSection8 from './MainSections/MainSection8.vue'

export default {
    name: 'MainComponent',
    components: {
        MainJumbo,
        MainSection1,
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
            titleJumbo: 'Damon Vaughn',
            paragraphJumbo: 'Best-selling author and the most influential public intellectual in the Wwstern world right now.',
            paragraphAuthorJumbo: '- The New York Times'
        }
    }
}
</script>


<style lang="scss">
    @import '../style/general.scss';
</style>