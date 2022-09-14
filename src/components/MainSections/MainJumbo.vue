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
    @import '../../style/general.scss';
    
    .jumbo_section {
        background-image: url('../../assets/images/hero-07-2x.jpg');
        background-size: cover;
        height: 800px;
    }

    .shop_disclamer {
        height: 400px;
        width: 690px;
        background-color: blue;
        position: absolute;
        left: 1260px;
        bottom: 459px;
    }
</style>