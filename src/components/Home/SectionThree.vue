<template>
      <section class="campus">
        <text-box-nav h1text="Our Global Campus" ptext="The courses we offer are clearly listed below for your interest"/>
        <div class="row">
            <CampusCol location="Bonaberi"><img src="../../assets/pexels-keira-burton-6146978.jpg"></CampusCol>
            <CampusCol location="Bonamousadi"><img src="../../assets/pexels-zino-bang-54539.jpg"></CampusCol>
            <CampusCol location="Logpom"><img src="../../assets/pexels-rdne-stock-project-7683694.jpg"></CampusCol>
        </div>
      </section>
</template>

<script>
import CampusCol from './CampusCol.vue'
import textBoxNav from './textBoxNav.vue'
export default {
    name: 'SectionThree',
    components: { 
        textBoxNav,
        CampusCol 
    },

}
</script>

<style scoped>
.campus{
    width: 80%;
    margin: auto;
    text-align: center;
    padding-top: 50px;
 }

.campus-col img{
    width: 100%;
    display: block;
 }
</style>