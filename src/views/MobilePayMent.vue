<template>
  <form action="">
      <div class="container-form">
       <SideTextPayment amount="XAF 28,676" text="stephaniembusheri@gmail.com"/>
       <div class="textt">
       <h4> <TitlePayment text="Please enter your mobile money details" /></h4>
       </div>
       <Selectpayment text="Choose Network" Orange="Orange Money" mtn="MTN"/>
       <label for="name">Phone Number</label>
        <input class="inputtext" type="text" name="fullname" id="" placeholder="+237678787878" required>
        <ButtonContact text="Pay XAF 28676"/>
      </div>
    </form>
</template>

<script>
import ButtonContact from '@/components/Contact/ButtonContact.vue';
import TitlePayment from '../components/Payment/card/TitlePayment';
import Selectpayment from '../components/Payment/Mobile/Selectpayment.vue';
import SideTextPayment from '../components/Payment/Mobile/SideTextPayment.vue';



export default {
    name: 'MobilePayMent',
    props: {
      title: String
    },
    components: {
    SideTextPayment,
    TitlePayment,
    Selectpayment,
    ButtonContact
}
}
</script>

<style scoped>
.container-form{
  width: 450px;
  height: 400px;
  top: 30%;
  left: 50%;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 5px;
  background-color: rgb(228, 227, 241);
  padding: 20px;
}
.inputtext , select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

</style>