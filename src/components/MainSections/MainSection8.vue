<template>
    <div class="mainSection_8">
        <div class="sm_container">
            <h1>SECTION 8</h1>
            <div class="d-flex justify-content-between">
                <div>
                    <p>TEXT HERE</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                    <input type="button" value="Button" id="">
                </div>         
            </div>
            <div class="d-flex justify-content-between">
                <div>COL 1</div>
                <div class="d-flex flex-column">
                    <div>COL 2</div>
                    <div>COL 3</div>
                </div>
            </div>   
        </div>
    </div>
</template>


<script>
export default {
    name: 'MainSection7'
}
</script>


<style lang="scss" scoped>
    .mainSection_8{
        height: 1010px;
        background-color: hotpink;

            .sm_container{
                background-color: seagreen;
                height: 1010px;
            }
    }
</style>