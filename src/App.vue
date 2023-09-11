<template>
  <div id="app">
    <NavMenu />
      </div>


    <router-view></router-view>

</template>

<script>
import NavMenu from './components/Home/NavMenu.vue';


export default {
  name: "App",
  components: {
    NavMenu
},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.logo1 {
  top: 0;
  left: 0;
}
.navbar-default {
  margin-bottom: 0 !important;
}
.contain {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  border-radius: 8px;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(9px);
}
.bgImage {
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4, 7, 20, 0.7)), url(./assets/pexels-kobe-1516440.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
}

form {
  display: flex;
  flex-direction: column;
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

.register {
  text-align: center;
  margin-top: 30px;
  color: #fff;
}
@media(max-width: 700px){ /*this media css is to adjust css to fit smaller screens*/
    .text-box h1{
        font-size: 20px;
    }
    .nav-links ul li{
        display: block;
    }
    .nav-links{
        position: absolute;
        background: #f44336;
        height: 100vh;
        width: 200px;
        top: 0;
        right: -200px;
        text-align: left;
        z-index: 2;
        transition: 1s;
    }
    nav .fa{
        display: block;
        color: #fff;
        margin: 10px;
        font-size: 22px;
        cursor: pointer;
    }
    .nav-links ul{
        padding: 30px;
    }
    .row {
        flex-direction: column;
    }
    .testimonial-col img{
        margin-left: 0;
        margin-right: 15px;
    }
    .cta h1{
        font-size: 21px;
    }
}
.row {
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
}
</style>
