<template>
    <div class="mainSection_3">
        <div class="sm_container">
            <h1>SECTION 3</h1>
            <div class="d-flex justify-content-evenly">
                <div>COL 1</div>
                <div>COL 2</div>
            </div>   
        </div>
    </div>
</template>


<script>
export default {
    name: 'MainSection3'
}
</script>


<style lang="scss" scoped>
    .mainSection_3{
        height: 600px;
        background-color: blueviolet;

            .sm_container{
                background-color: palegreen;
                height: 600px;
            }
    }
</style>