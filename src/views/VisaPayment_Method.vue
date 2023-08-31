<template>
  <div class="containn">
    <h1><Title_Payment text="Confirm Your Payment" /></h1>
    <FirstRow_Inputfield />
    <SecondRow_Inputfield />
    <h3>Expiry Date</h3>
    <ThirdRow_Inputfield />
    
    <Button_Box text="Confirm"/>
    
    
    </div>
    
</template>

<script>
import Button_Box from "../components/User/Button_Box.vue";
import FirstRow_Inputfield from "../components/Payment/card/FirstRow_Inputfield.vue";
import SecondRow_Inputfield from "../components/Payment/card/SecondRow_Inputfield.vue";
import ThirdRow_Inputfield from "../components/Payment/card/ThirdRow_Inputfield.vue";
import Title_Payment from "@/components/Payment/card/Title_Payment.vue";
export default {
  name: "VisaPayment_Method",
  components: {
    Title_Payment,
    FirstRow_Inputfield,
    SecondRow_Inputfield,
    ThirdRow_Inputfield,
    Button_Box
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
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: space-around;
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