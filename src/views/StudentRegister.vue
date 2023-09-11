<template>
    <section class="bgImage">
      <form class="contain">
        <HeaderBox text="Student Register" />
        <InputContainer text="Enter Your Matricule Number" />
        <InputContainer text="Enter Date Of Birth" />
        <InputContainer text="Enter Email address" />
        <InputContainer text="Enter Phone Number" />
        <InputContainer text="Enter Password" />
        <InputContainer text="Confirm Password" />
        <ButtonBox text="Create Account" />
        <ConfirmationBox text="Already have an account" />
        <router-link to="login">Login Here</router-link>
      </form>
     </section>
</template>

<script>
import HeaderBox from "../components/User/HeaderBox.vue";
import InputContainer from "../components/User/InputContainer.vue";
import ButtonBox from "../components/User/ButtonBox.vue";
import ConfirmationBox from "../components/User/ConfirmationBox.vue";
export default {
  name: "ContainerBox",
  props: {
    title: String,
  },
  components: {
    HeaderBox,
    InputContainer,
    ButtonBox,
    ConfirmationBox,
  },
};
</script>
<style scoped>
.contain{
  margin-top: 165px;
  margin-bottom: 70px;
}
</style>