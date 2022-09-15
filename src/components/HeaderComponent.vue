<template>
    <header>
        <NavBar :logo="logo" :navBarLinks="navBarLinks"/>
    </header>
</template>


<script>

import NavBar from './HeaderSections/HeaderNavBar.vue'

const navBarLinks = [
                'Home',
                'About Me',
                'Testimonials',
                'My Blog',
                'Meetups',
                'Shop',
                'Contact Me',
            ]

export default {
    name: 'HeaderComponent',
    components: {
        NavBar,
    },
    data() {
        return {
            logo: require('../assets/images/author-logo-round-small.png'),
            navBarLinks: navBarLinks,
        }
    }
}
</script>


<style lang="scss">
    @import '../style/general.scss';
    header {
        font-family: 'DM Sans', sans-serif;
    }
</style>