<template>
    <footer>
        <FooterList/>
    </footer>
</template>


<script>

import FooterList from '../components/FooterSections/FooterList.vue'

export default {
    name: 'FooterComponent',
    components: {
        FooterList,
    }
}
</script>


<style lang="scss">
    @import '../style/general.scss';
</style>