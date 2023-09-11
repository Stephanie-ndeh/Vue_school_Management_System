<template>
  <div class="facilities-col">
    <slot />
    <h3>{{ text }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
    name: 'FacilitiesCol',
    props:{
        text: String,
        description: String
    }
};
</script>

<style >
 .facilities-col{
    flex-basis: 31%;
    border-radius: 10px;
    margin-top: 5%;
    text-align: left;
 }
 .facilities-col p{
    padding: 0;
 }
 .facilities-col h3{
    margin-top: 16px;
    margin-bottom: 15px;
    text-align: left;
 }
</style>