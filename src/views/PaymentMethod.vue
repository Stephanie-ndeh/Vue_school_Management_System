<template>
  <div class="containers">
    <form action="#">
      <div class="title">
        <h4><TitlePayment text="Select a Payment method" /></h4>
      </div>
      <div class="category">
        <router-link to="Visa"><ContainerMethod text="visa">
          <img src="https://i.ibb.co/vjQCN4y/Visa-Card.png" alt="" /></ContainerMethod>
          </router-link>
          <router-link to="Visa"><ContainerMethod text="Mastercard">
          <img src="https://i.ibb.co/vdbBkgT/mastercard.jpg" alt=""/></ContainerMethod>
        </router-link>
        <router-link to="mobile"><ContainerMethod text="Orange Money">
          <img src="../assets/orange.png" alt=""/> </ContainerMethod>
        </router-link>
          <router-link to="mobile"><ContainerMethod text="MTN Mobile Money">
          <img src="../assets/mtn2.png" alt=""/></ContainerMethod>
        </router-link>
        </div>
    </form>
  </div>
</template>

<script>
import TitlePayment from "../components/Payment/card/TitlePayment";
import ContainerMethod from "../components/Payment/ContainerMethod.vue";
export default {
  name: "Payment_Method",
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
.containers {
  top: 30%;
  left: 50%;
  width: 400px;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 12px -2px rgba(0, 0, 0, 0.1), 0 18px 36px -6px rgba(0, 0, 0, 0.1);
}
.containers .title {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #191920;
}
.containers form .category {
  margin-top: 10px;
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
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
</style>