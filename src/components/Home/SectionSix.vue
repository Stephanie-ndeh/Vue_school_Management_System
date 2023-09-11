<template>
      <section class="cta">
        <h1>Enroll at our school now <br> for more information</h1> 
        <router-link to="/contact"><ButtonNav text="CONTACT US"/></router-link> 
    </section>
</template>

<script>
import ButtonNav from './ButtonNav.vue';

export default {
    components: { ButtonNav }
}
</script>

<style>
.cta{
    margin: 100px auto;
    width: 80%;
    background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(../../assets/pexels-stanley-morales-1454360.jpg);
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    text-align: center;
    padding: 100px 0;
 }
 .cta h1{
    color: white;
    margin: 40px;
    padding: 0;
 }
</style>