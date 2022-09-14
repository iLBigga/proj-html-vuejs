<template>
    <main>
        <MainJumbo/>
        <MainSection1/>
    </main>
</template>


<script>

import MainJumbo from './MainSections/MainJumbo.vue';
import MainSection1 from './MainSections/MainSection1.vue'

export default {
    name: 'MainComponent',
    components: {
        MainJumbo,
        MainSection1,
    }
}
</script>


<style lang="scss">
    @import '../style/general.scss';
</style>