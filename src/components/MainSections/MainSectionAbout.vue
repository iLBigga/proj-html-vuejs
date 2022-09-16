<template>
    <div class="mainSection_About">
        <div class="sm_container ">
            <div class="text-center d-flex flex-column justify-content-center gap-5">
                
                <h1>
                    {{data.title}}
                </h1>

                <p>
                    {{data.paragraph}}
                </p>

                <div>
                    <input type="button" name="button" :value="data.button">
                </div>
                
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MainSectionAbout',
    props:{
        data: Object,
    }
}
</script>


<style lang="scss" scoped>

@import '../../style/general.scss';

    .mainSection_About {
        padding: 130px 0 130px 0;

            h1 {
                font-family: 'Kristi', cursive;
                color: $orange;
                font-size: 90px;
            }

            p{
                font-family: 'DM Sans', serif;
                font-size: 30px;
            }

            input{
                padding: 15px 40px;
                background-color: $green;
                border: 0;
                border-radius: 8px;
                color: white;
            }
    }
</style>