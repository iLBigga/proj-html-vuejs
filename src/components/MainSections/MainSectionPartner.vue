<template>
    <div class="mainSection_2">
        <div class="sm_container">
            <div class="d-flex justify-content-evenly align-item-center justify-content-avenly">
                <figure v-for="(el ,i) in data" :key="i"><img :src="el" alt=""></figure>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MainSection2',
    props: {
        data: Array,
    },
}
</script>


<style lang="scss" scoped>

@import '../../style/general.scss';

    .mainSection_2{
        background-color: $beige;
        padding: 65px 0 50px 0;

            figure {
                width: 220px;
            }
    }
</style>