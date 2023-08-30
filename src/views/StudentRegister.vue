<template>
  <form class="contain">
    <HeaderBox text="Student Login" />
    <Input_Container text="Enter Your Matricule Number" />
    <Input_Container text="Enter Date Of Birth" />
    <Input_Container text="Enter Email address" />
    <Input_Container text="Enter Phone Number" />
    <Input_Container text="Enter Password" />
    <Input_Container text="Confirm Password" />
    <Button_Box text="Create Account" />
    <Confirmation_Box text="Already have an account" />
    <router-link to="login">Login Here</router-link>
  </form>
</template>

<script>
import HeaderBox from "../components/User/HeaderBox.vue";
import Input_Container from "../components/User/Input_Container.vue";
import Button_Box from "../components/User/Button_Box.vue";
import Confirmation_Box from "../components/User/Confirmation_Box.vue";
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
/* body {
  background-image: url(../assets/pexels-kobe-1516440.jpg);
} */
.contain {
  margin-top: 250px;
  margin-bottom: 200px;
}
img {
  height: 80px;
  width: 80px;
  border-radius: 10px;
}
</style>