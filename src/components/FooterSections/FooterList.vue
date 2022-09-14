<template>
    <div class="footer_list">
        <div class="xl_container">
            <div class="d-flex justify-content-between">
                <!-- LOGO -->
                <figure>
                    <p>Logo</p>
                    <img :src="logo" alt="">
                </figure>
                <!-- ABOUT ME -->
                <div class="col-3">
                    <p>TEXT HERE</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit ducimus necessitatibus blanditiis nostrum qui temporibus ex ullam corrupti cumque!</p>
                </div>
                <!-- LINKS -->
                <div class="col-3">
                    <p>TEXT HERE</p>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
                <!-- CONTACT INFO -->
                <div class="col-3">
                    <p>TEXT HERE</p>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                    <div>icon</div>
                </div>
            </div>
            <p class="text-center">copytight</p>
        </div>
        
    </div>
</template>


<script>
export default {
    name: 'FooterList',
    props: {
        logo: String,
    }
}
</script>


<style lang="scss" scoped>
    .footer_list{
        background-color: orange;
        height: 515px;

        .xl_container {
        background-color: blueviolet;
        height: 515px;
    }
    }
    
</style>