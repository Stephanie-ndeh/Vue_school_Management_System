<template>
<section class="facilities">
        <textBoxNav h1text="Our Facilities" ptext="Our beautiful school facilities can be seen below"/>
      <div class="row">
        <FacilitiesCol text="World class library" description="The school has a beauitful library">
          <img src="../../assets/pexels-engin-akyurt-2952871.jpg" alt=""></FacilitiesCol>
        <FacilitiesCol text="Play Ground" description="Like the saying goes learning without plaiyng makes jack a dull boy so a very complexplayground has provided for our students">
            <img src="../../assets/pexels-lucas-allmann-1378425.jpg" alt=""></FacilitiesCol>
        <FacilitiesCol text="Cafetaria" description="The school offers the students a variety of meals">
          <img src="../../assets/pexels-wendy-wei-1551346.jpg" alt=""></FacilitiesCol>
      </div>
</section>
</template>

<script>
import FacilitiesCol from './FacilitiesCol.vue'
import textBoxNav from './textBoxNav.vue'

export default {
    components: { 
      textBoxNav, 
      FacilitiesCol 
    }
}
</script>

<style>
 .facilities{
    width: 80%;
    margin: auto;
    text-align: center;
    padding-top: 100px ;
 }
 .facilities-col img{
    width: 100%;
    border-radius: 10px;
 }
</style>