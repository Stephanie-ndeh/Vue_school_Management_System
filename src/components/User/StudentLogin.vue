<template>
  <form class="contain">
    <HeaderBox text="User Login" />
    <Input_Container text="Enter Your Matricule Number" />
    <Input_Container text="Enter Password" />
    <Button_Box text="Log in" />
    <Confirmation_Box text="Don't have a student's account?" text2="Register" />
  </form>
</template>
  
<script>
import HeaderBox from "../User/HeaderBox.vue";
import Input_Container from "../User/Input_Container.vue";
import Button_Box from "../User/Button_Box.vue";
import Confirmation_Box from "../User/Confirmation_Box.vue";

export default {
  name: "Container_Box",
  props: {
    title: String,
  },
  components: {
    HeaderBox,
    Input_Container,
    Button_Box,
    Confirmation_Box,
  },
};
</script>
  
<style >

</style>