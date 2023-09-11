<template>
  <div class="testimonial-col">
    <slot />
    <div>
      <p>{{ message }}</p>
      <h3>{{ name }}</h3>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa-regular fa-star"></i>
    </div>
  </div>
</template>

<script>
export default {
    name:'TestimonialCol',
    props:{
        message: String,
        name: String
    }
};
</script>

<style>
.testimonial-col{
    flex-basis: 44%;
    border-radius: 10px;
    margin-bottom: 5%;
    text-align: left;
    background: #fff3f3;
    padding: 25px;
    cursor: pointer;
    display: flex;
 }
 .testimonial-col img{
    height: 40px;
    margin-left: 5px;
    margin-right: 30px;
    border-radius: 50%;
 }
 .testimonial-col p{
    padding: 0;

 }
 .testimonial-col h3{
    margin-top: 15px;
    text-align: left;
 }
 .testimonial-col .fa{
    color: #f44336;
 }

</style>