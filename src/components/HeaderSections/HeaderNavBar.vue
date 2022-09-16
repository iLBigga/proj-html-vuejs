<template>
  <div class="xl_container">
    <div class="d-flex justify-content-between">

        <!-- LOGO -->

      <figure>
        <img :src="logo" alt="logo" />
      </figure>

      <!-- LISTA LINK -->

      <ul class="d-flex gap-5 align-items-center">
        <li v-for="(link, i) in navBarLinks" :key="i"><a href="#">{{ link }}</a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a></li>
      </ul>

    </div>
  </div>
</template>


<script>
export default {
  name: "HeaderNavBar",
  props: {
    logo: String,
    navBarLinks: Array,
  },
};
</script>


<style lang="scss" scoped>
@import '../../style/variables.scss';

.xl_container {
  position: absolute;
  right: 0;
  left: 0;
  color: white;

  figure {
    width: 180px;
  }

  ul {
    list-style: none;

    li {
      border-top: 5px solid transparent;
      height: 100%;
      font-weight: 500;

      a {
        display: block;
        text-decoration: none;
        color: currentColor;
        padding-top: 40px;
      }

      &:first-child {
        border-top: 5px solid $light-orange;
        color: $light-orange;
      }
    }
  }
}
</style>