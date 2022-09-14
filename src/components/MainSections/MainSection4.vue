<template>
    <div class="mainSection_4">
        <div class="sm_container">
            <h1>SECTION 4</h1>
            <div class="d-flex justify-content-between">
                <div>TEXT HERE</div>
                <input type="button" value="Button">
            </div>
            <div class="d-flex justify-content-evenly">
                <div>COL 1</div>
                <div>COL 2</div>
            </div>   
        </div>
    </div>
</template>


<script>
export default {
    name: 'MainSection4'
}
</script>


<style lang="scss" scoped>
    .mainSection_4{
        height: 600px;
        background-color: salmon;

            .sm_container{
                background-color: sandybrown;
                height: 600px;
            }
    }
</style>