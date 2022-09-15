8<template>
    <div class="jumbo_section">
        <div class="lg_container">
            
        </div>
        <div class="shop_disclamer">

        </div>
    </div>
</template>


<script>
export default {
    name: 'MainJumbo'
}
</script>


<style lang="scss">
    
    .jumbo_section {
        background-image: url('../../assets/images/hero-07-2x.jpg');
        background-size: cover;
        background-position: center;
        height: 100vh;
    }

    .shop_disclamer {
        height: 400px;
        width: 690px;
        background-color: blue;
        position: absolute;
        right: 0px;
        bottom: -424px;
    }
</style>