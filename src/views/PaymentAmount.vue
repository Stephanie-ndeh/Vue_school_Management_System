<template>
  <div class="container">
    <form action="#">
      <TitlePayment text="Select Amount to be Paid" />
      <div class="category">
        <router-link to="method"><ContainerMethod text="1st Installement">
          <p>265000frs</p> </ContainerMethod>
        </router-link>
          <router-link to="method">  <ContainerMethod text="2nd Installemt">
          <p>10000frs</p></ContainerMethod>
        </router-link>
          <router-link to="method">  <ContainerMethod text="3rd Installement">
          <p>45000frs</p></ContainerMethod>
        </router-link>
          <router-link to="method">  <ContainerMethod text="Complete Fees">
          <p>410000frs</p></ContainerMethod>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import TitlePayment from "../components/Payment/card/TitlePayment";
import ContainerMethod from "../components/Payment/ContainerMethod.vue";
export default {
  name: "Payment_Amount",
  props: {
    title: String,
  },
  components: {
    TitlePayment,
    ContainerMethod,
  },
};
</script>

<style scoped>

.container {
  margin-top: 100px;
  margin-bottom: 30px;
  justify-content: center;
  width: 550px;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 12px -2px rgba(0, 0, 0, 0.1),
    0 18px 36px -6px rgba(0, 0, 0, 0.1);
}

.container .title {
  font-size: 80px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #0808df;
}
.container p {
  font-size: 2rem;
  color: #0808df;
  text-decoration: none;
}
.container form .category {
  padding-top: 20px;
}

.category label {
  height: 145px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  height: 100px;
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
