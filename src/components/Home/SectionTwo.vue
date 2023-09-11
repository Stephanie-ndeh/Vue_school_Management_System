<template>
      <section class="course">
        <text-box-nav h1text="Courses We Offer" ptext="The courses we offer are clearly listed below for your interest"/>
        <div class="row">
            <CourseCol level="Intermediate" message="The intermediate courses are very competitive and will be very advisable to offer 
            this courses cause they teach a whole lot of efficient things. "/>
            <CourseCol level="Degree" message="The intermediate courses are very competitive and will be very advisable to offer
            this courses cause they teach a whole lot of efficient things."/>
            <CourseCol level="Post Graduation" message="The intermediate courses are very competitive and will be very advisable to offer
            this courses cause they teach a whole lot of efficient things."/>
        </div>
      </section>
</template>

<script>

import CourseCol from './CourseCol.vue';
import textBoxNav from './textBoxNav.vue'
export default {
    name: 'SectionTwo',
    components: {
    textBoxNav,
    CourseCol
},

}
</script>

<style>
.course {
    width: 80%;
    margin: auto; 
    text-align: center;
    padding-top: 100px;
}

</style>