<template>
  <section class="bgImage">
  <form class="contain">
    <HeaderBox text="User Login" />
    <InputContainer text="Enter Your Matricule Number" />
    <InputContainer text="Enter Password" />
    <RememberMe Remember="Remember Me" forgot="Forgot Password?"/>
    <ButtonBox text="Log in" />
    <ConfirmationBox text="Don't have a student's account?" />
    <router-link to="register">Create here</router-link>
  </form>
  </section>
</template>
  
<script>
import HeaderBox from "../components/User/HeaderBox";
import InputContainer from "../components/User/InputContainer.vue";
import ButtonBox from "../components/User/ButtonBox.vue";
import ConfirmationBox from "../components/User/ConfirmationBox.vue";
import RememberMe from "@/components/User/RememberMe.vue";

export default {
  name: "UserloginView",
  props: {
    title: String,
  },
  components: {
    HeaderBox,
    InputContainer,
    ButtonBox,
    ConfirmationBox,
    RememberMe
  },
};
</script>
<style scoped>
.contain{
  margin-top: 65px;
  margin-bottom: 70px;
}

</style>
  