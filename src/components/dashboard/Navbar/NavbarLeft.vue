<template>
  <div class="header-left">
    <a href="#" class="logo">
        <img src="../../../assets/logo1.png" alt="Logo">
    </a>
    <a href="#" class="logo logo-small">
        <img src="../../../assets/logo-small.png" alt="Logo" width="30" height="30">
    </a>
    
</div>
</template>

<script>
export default {
    name: 'NavbarLeft',
}
</script>

<style scoped>
.header .header-left {
  float: left;
  height: 60px;
  padding: 0 20px;
  position: relative;
  width: 259px;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 0 44px rgba(0, 0, 0, 0.03);
}
.mini-sidebar .header .header-left {
  justify-content: center;
}
.header .header-left .logo {
  display: inline-block;
  line-height: 60px;
}
.header .header-left .logo img {
  max-height: 40px;
  width: auto;
}
.header-left .logo.logo-small {
  display: none;
}
</style>