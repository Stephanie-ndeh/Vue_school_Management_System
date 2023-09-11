<template>
    <section class="header">
      <nav>
        <nav-menu />
        <div class="text-box">
            <text-box-nav h1text="World's Biggest University" ptext="Welcome to the university of the future"/>
            <ButtonNav text="Click Here to Apply"/>
        </div>
      </nav>
</section>
</template>

<script>
import NavMenu from '../../components/Home/NavMenu.vue';
import textBoxNav from '../../components/Home/textBoxNav.vue';
import ButtonNav from './ButtonNav.vue';
export default {
components: {
    NavMenu,
    textBoxNav,
    ButtonNav
},
name: "HomeMenu",
props: {
  title: String
}
};
</script>
<style scoped>
.header {
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url(../../assets/pexels-pixabay-256490.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
}
.text-box { /*to align the text in the center of the page u need the following css*/
    width: 90%;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
</style>