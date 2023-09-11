<template>
  <section class="testimonials">
    <TextBoxNav h1text="What our students have to say" ptext="Students reviews about the school can be seen below" />
    <div class="row">
       <testimonial-col message="I have had an excellent experience with at this school. The facilities are well-maintained and equipped with modern technology. Overall, I would highly recommend [School Name] to any parent looking for a quality education for their child." name="Jane Doe">
        <img src="../../assets/profiles/avatar-07.jpg" ></testimonial-col>
        <testimonial-col message="I have had an excellent experience with at this school. The facilities are well-maintained and equipped with modern technology. Overall, I would highly recommend [School Name] to any parent looking for a quality education for their child." name="John Doe">
        <img src="../../assets/profiles/avatar-01.jpg" ></testimonial-col>
        
    </div>
  </section>
</template>

<script>
import TestimonialCol from './TestimonialCol.vue';
import TextBoxNav from './textBoxNav.vue';

export default {
  name: 'SectionFive',
    components: { 
      TextBoxNav,
      TestimonialCol}
}
</script>

<style>
.testimonials{
    width: 80%;
    margin: auto;
    padding-top: 5%;
    text-align: center;
 }
</style>