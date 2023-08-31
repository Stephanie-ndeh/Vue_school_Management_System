<template>
  <form action="">
      <div class="container-form">
       <Side_TextPayment amount="XAF 28,676" text="stephaniembusheri@gmail.com"/>
       <div class="textt">
       <h4> <Title_Payment text="Please enter your mobile money details" /></h4>
       </div>
       <Select_payment text="Choose Network" Orange="Orange Money" mtn="MTN"/>
       <label for="name">Phone Number</label>
        <input class="input_text" type="text" name="fullname" id="" placeholder="+237678787878" required>
        <Button_Box text="Pay XAF 28676"/>
      </div>
    </form>
</template>

<script>
import Title_Payment from '../components/Payment/card/Title_Payment';
import Select_payment from '../components/Payment/Mobile/Select_payment.vue';
import Side_TextPayment from '../components/Payment/Mobile/Side_TextPayment.vue';
import Button_Box from '@/components/User/Button_Box.vue';



export default {
    name: 'Mobile_payment',
    props: {
      title: String
    },
    components: {
    Side_TextPayment,
    Title_Payment,
    Select_payment,
    Button_Box
}
}
</script>

<style scoped>
.container-form{
  max-width: 350px;
  margin:auto;
  border-radius: 5px;
  background-color: rgb(228, 227, 241);
  padding: 20px;
}
.amount{
    text-align: end;
    font-size: 20px;
    color: gray ;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.textt{
  text-align: center;
}
.input_text , select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}


</style>