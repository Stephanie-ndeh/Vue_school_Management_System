<template>
  <div class="container">
    <form action="#">
      <Title_Payment text="Select a Payment method"/>
      <div class="category">
        <Container_Method text="visa" > <img src="https://i.ibb.co/vjQCN4y/Visa-Card.png" alt=""></Container_Method>
        <Container_Method text="Mastercard" ><img src="https://i.ibb.co/vdbBkgT/mastercard.jpg" alt=""></Container_Method>
        <Container_Method text="Orange Money"><img src="../../assets/orange.png" alt=""/></Container_Method>
        <Container_Method text="MTN Mobile Money"><img src="../../assets/mtn2.png" alt=""/></Container_Method>
      </div>
    </form>
  </div>
</template>

<script>
import Title_Payment from "./Title_Payment.vue";
import Container_Method from "./Container_Method.vue";
export default {
  name: "Payment_Method",
  props: {
    title: String,
  },
  components: {
    Title_Payment,
    Container_Method,
  },
};
</script>



<style >
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  width: 400px;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 12px -2px rgba(0, 0, 0, 0.1),
    0 18px 36px -6px rgba(0, 0, 0, 0.1);
}

.container .title {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #191920;
}
.container form .category {
  margin-top: 10px;
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
}

.category label {
  height: 145px;
  padding: 20px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
}

.category label:hover {
  background: blue;
  color: #fff bold;
  border-color: #fff;
  background: rgba(44, 41, 85, 0.15);
}
#visa:checked ~ .category .visaMethod,
#mastercard:checked ~ .category .mastercardMethod,
#paypal:checked ~ .category .paypalMethod,
#AMEX:checked ~ .category .amexMethod {
  box-shadow: 0px 0px 0px 1px #1119bb;
}

#visa:checked ~ .category .visaMethod .check,
#mastercard:checked ~ .category .mastercardMethod .check,
#paypal:checked ~ .category .paypalMethod .check,
#AMEX:checked ~ .category .amexMethod .check {
  display: block;
}

label .imgName {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
}

.imgName span {
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 82%;
  transform: translateY(-72%);
}
.imgName .imgContainer {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35%;
  transform: translateY(-35%);
}

img {
  width: 50px;
  height: auto;
}

.visa img {
  width: 80px;
}

.mastercard img {
  width: 65px;
}

.Orange img {
  width: 60px;
  height: 50px;
}
.MTN img {
  width: 50px;
}
.check {
  display: none;
  position: absolute;
  top: -4px;
  right: -4px;
}
.check i {
  font-size: 18px;
}
</style>