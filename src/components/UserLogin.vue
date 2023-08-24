<template>
    <form class="contain">
      <h2>SIGN IN</h2>
      <div class="logo1"><img src="../assets/logo1.png" alt="logo" /></div> 
      <div class="input-field">
        <input type="text" required />
        <label>Enter your Matricule Number</label>
      </div>
      <div class="input-field">
        <input type="Password" required />
        <label>Enter your password</label>
      </div>
      <div class="forget">
        <label for="remember">
          <input type="checkbox" id="remember"/>
          <p>Remember me</p>
        </label>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit">Log In</button>
      <div class="register">
        <p>Don't have a student's account? <a href="#">Register</a></p>
      </div>
    </form>
</template>

<script>
    export default {
    name: "UserLogin",
    };
</script>
<style scope>
</style>
