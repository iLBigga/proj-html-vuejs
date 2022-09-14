<template>
    <header>
        <NavBar :logo="logo"/>
    </header>
</template>


<script>

import NavBar from './HeaderNavBar.vue'

export default {
    name: 'HeaderComponent',
    components: {
        NavBar,
    },
    data() {
        return {
            logo: require('../assets/images/author-logo-round-small.png')
        }
    }
}
</script>


<style lang="scss">
    @import '../style/general.scss';
</style>