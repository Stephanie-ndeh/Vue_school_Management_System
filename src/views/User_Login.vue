<template>
  <form class="contain">
    <HeaderBox text="User Login" />
    <Input_Container text="Enter Your Matricule Number" />
    <Input_Container text="Enter Password" />
    <Remember_Me Remember="Remember Me" forgot="Forgot Password?"/>
    <Button_Box text="Log in" />
    <Confirmation_Box text="Don't have a student's account?" />
    <router-link to="register">Create here</router-link>
  </form>
</template>
  
<script>
import HeaderBox from "../components/User/HeaderBox";
import Input_Container from "../components/User/Input_Container.vue";
import Button_Box from "../components/User/Button_Box.vue";
import Confirmation_Box from "../components/User/Confirmation_Box.vue";
import Remember_Me from "@/components/User/Remember_Me.vue";

export default {
  name: "User_login",
  props: {
    title: String,
  },
  components: {
    HeaderBox,
    Input_Container,
    Button_Box,
    Confirmation_Box,
    Remember_Me
  },
};
</script>
  
<style scoped>
img {
  height: 80px;
  width: 80px;
  border-radius: 10px;
}
</style>