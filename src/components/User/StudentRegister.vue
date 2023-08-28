<template>
  <form class="contain">
    <HeaderBox text="Student Login"/>
    <Input_Container text="Enter Your Matricule Number" />
    <Input_Container text="Enter Date Of Birth" />
    <Input_Container text="Enter Email address" />
    <Input_Container text="Enter Phone Number" />
    <Input_Container text="Enter Password" />
    <Input_Container text="Confirm Password" />
    <Button_Box text="Create Account"/>
    <Confirmation_Box text="Already have an account" text2="Login Here"/>
  </form>
</template>

<script>
import HeaderBox from "./HeaderBox.vue";
import Input_Container from "./Input_Container.vue";
import Button_Box from "./Button_Box.vue";
import Confirmation_Box from "./Confirmation_Box.vue";
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

<style>
</style>