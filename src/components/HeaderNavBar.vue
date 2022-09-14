<template>
    <div class="xl_container">
        <div class="d-flex justify-content-between">
            <figure>
                <img :src="logo" alt="">
            </figure>      
            <ul class="d-flex p-4 gap-5">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    name: 'HeaderNavBar',
    props: {
        logo: String,
    }
}
</script>


<style lang="scss" scoped>
    @import '../style/general.scss';

    figure {
        background-color: green;
        width: 138px;
    }

    ul{
        list-style: none;
        background-color: blue;
    }
</style>