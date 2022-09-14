<template>
    <div class="mainSection_1">
        <div class="sm_container">
            <h1>SECTION 1</h1>
            <div class="text-center">
                <p>Title</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero non rem libero eius totam nemo vel at nulla? Dolore porro, commodi minima error totam veniam quasi architecto quas enim at?</p>
                <input type="button" name="button" value="Button">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MainSection1'
}
</script>


<style lang="scss" scoped>
    .mainSection_1 {
        background-color: green;
        height: 500px;

            .sm_container {
                height: 500px;
                background-color: yellow;
            }
    }
</style>