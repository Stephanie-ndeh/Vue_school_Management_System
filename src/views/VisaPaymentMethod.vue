<template>
  <div class="containn">
    <h1><TitlePayment text="Confirm Your Payment" /></h1>
    <FirstRowInputfield />
    <SecondRowInputfield />
    <h3>Expiry Date</h3>
    <ThirdRowInputfield />
    
    <ButtonBox text="Confirm"/>
    
    
    </div>
    
</template>

<script>
import ButtonBox from "../components/User/ButtonBox.vue";
import FirstRowInputfield from "../components/Payment/card/FirstRowInputfield.vue";
import SecondRowInputfield from "../components/Payment/card/SecondRowInputfield.vue";
import ThirdRowInputfield from "../components/Payment/card/ThirdRowInputfield.vue";
import TitlePayment from "@/components/Payment/card/TitlePayment.vue";
export default {
  name: "VisaPaymentMethod",
  components: {
    TitlePayment,
    FirstRowInputfield,
    SecondRowInputfield,
    ThirdRowInputfield,
    ButtonBox
},
  props: {
    text: String,
  },
};
</script>

<style scoped>

.containn {
  width: 600px;
  height: 460px;
  border: 1px solid;
  background: linear-gradient(rgba(170, 170, 170, 0.7),rgba(25, 25, 26, 0.7));
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: space-around;
  top: 30%;
  left: 50%;
  margin: 0 auto;
  margin-top: 100px;
}

.containn h1 {
  text-align: center;
  /* margin-bottom: 380px; */
  font-size: 30px;
  font-family: "Poppins", sans-serif;
}



.btnn {
  background-color: blueviolet;
  color: white;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px;
  font-size: 18px;
  transition: 0.5s;
}

.btnn:hover {
  background-color: dodgerblue;
}


</style>