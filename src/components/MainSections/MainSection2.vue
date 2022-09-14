<template>
    <div class="mainSection_2">
        <div class="sm_container">
            <h1>SECTION 2</h1>
            <div class="d-flex justify-content-evenly">
                <div>COL 1</div>
                <div>COL 2</div>
                <div>COL 3</div>
                <div>COL 4</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MainSection2'
}
</script>


<style lang="scss" scoped>
    .mainSection_2{
        height: 200px;
        background-color: blue;

            .sm_container{
                background-color: red;
                height: 200px;
            }
    }
</style>