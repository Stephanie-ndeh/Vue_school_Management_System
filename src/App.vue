<template>
  <div id="app">
    <NavMenu />
    <ChatBtn />

    <div class="auth-wrapper">
      <div class="auth-inner">
        <Payment_Amount />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from "./components/Home/NavMenu.vue";
import ChatBtn from "./components/Home/ChatBtn.vue";
import Payment_Amount from "./views/Payment_Amount.vue";
export default {
  name: "App",
  components: {
    NavMenu,
    ChatBtn,
    Payment_Amount
},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
.logo1 {
  top: 0;
  left: 0;
}
.navbar-default {
  margin-bottom: 0 !important;
}
.contain {
  margin-top: 40px;
  position: absolute;
  width: 400px;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(9px);
  margin-top: 50px;
}

form {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #252424;
  font-weight: bold;
}

.input-field {
  position: relative;
  border-bottom: 2px solid #ccc;
  margin: 15px 0;
}
.input-field label {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #fff;
  font-size: 16px;
  pointer-events: none;
  transition: 0.15s ease;
}
.input-field input {
  width: 100%;
  height: 40px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: #fff;
}
.navbar {
  padding: 10px;
}
.navbar-default {
  margin-bottom: 0 !important;
}
.input-field {
  position: relative;
  border-bottom: 2px solid #ccc;
  margin: 15px 0;
}
.input-field label {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #fff;
  font-size: 16px;
  pointer-events: none;
  transition: 0.15s ease;
}
.input-field input {
  width: 100%;
  height: 40px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: #fff;
}
.input-field input:focus ~ label,
.input-field input:valid ~ label {
  font-size: 0.8rem;
  top: 10px;
  transform: translateY(-120%);
}
.input-field input:focus ~ label,
.input-field input:valid ~ label {
  font-size: 0.8rem;
  top: 10px;
  transform: translateY(-120%);
}
.forget {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0 35px 0;
  color: #fff;
}
.forget label {
  display: flex;
  align-items: center;
}
.forget label p {
  margin-left: 8px;
  font-weight: bold;
}

a {
  color: #0e0e18;
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  color: #4d14d3;
}
.register {
  text-align: center;
  margin-top: 30px;
  color: #fff;
}
 /* img {
  height: 80px;
  width: 80px;
  border-radius: 10px;
  
} */
</style>
