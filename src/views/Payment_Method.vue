<template>
  <div class="containers">
    <form action="#">
      <div class="title">
        <h4><Title_Payment text="Select a Payment method" /></h4>
      </div>
      <div class="category">
        <router-link to="Visa"><Container_Method text="visa">
          <img src="https://i.ibb.co/vjQCN4y/Visa-Card.png" alt="" /></Container_Method>
          </router-link>
          <router-link to="Visa"><Container_Method text="Mastercard">
          <img src="https://i.ibb.co/vdbBkgT/mastercard.jpg" alt=""/></Container_Method>
        </router-link>
        <router-link to="mobile"><Container_Method text="Orange Money">
          <img src="../assets/orange.png" alt=""/> </Container_Method>
        </router-link>
          <router-link to="mobile"><Container_Method text="MTN Mobile Money">
          <img src="../assets/mtn2.png" alt=""/></Container_Method>
        </router-link>
        </div>
    </form>
  </div>
</template>

<script>
import Title_Payment from "../components/Payment/card/Title_Payment";
import Container_Method from "../components/Payment/Container_Method.vue";
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

<style scoped>
.containers {
  width: 400px;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 12px -2px rgba(0, 0, 0, 0.1),
    0 18px 36px -6px rgba(0, 0, 0, 0.1);
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