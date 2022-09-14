<template>
    <main>
        <MainJumbo/>
        <MainSection1/>
        <MainSection2/>
        <MainSection3/>
        <MainSection4/>
        <MainSection5/>
    </main>
</template>


<script>

import MainJumbo from './MainSections/MainJumbo.vue';
import MainSection1 from './MainSections/MainSection1.vue'
import MainSection2 from './MainSections/MainSection2.vue'
import MainSection3 from './MainSections/MainSection3.vue'
import MainSection4 from './MainSections/MainSection4.vue'
import MainSection5 from './MainSections/MainSection5.vue'

export default {
    name: 'MainComponent',
    components: {
        MainJumbo,
        MainSection1,
        MainSection2,
        MainSection3,
        MainSection4,
        MainSection5,
    }
}
</script>


<style lang="scss">
    @import '../style/general.scss';
</style>