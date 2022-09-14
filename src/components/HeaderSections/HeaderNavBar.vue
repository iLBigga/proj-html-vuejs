<template>
    <div class="xl_container">
        <div class="d-flex justify-content-between">
            <figure>
                <img :src="logo" alt="">
            </figure>      
            <ul class="d-flex gap-5 p-4">
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

    .xl_container {
        position: absolute;
        right: 0;
        left: 0;
        color: white;
    }

    figure {
        width: 138px;
    }

    ul{
        list-style: none;
    }
</style>