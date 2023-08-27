<template>
  <form class="contain">
    <div class="input-field">
      <input type="text" name="date" required onfocus="(this.type='date')" />
      <label>Enter Date of Birth</label>
    </div>
    <div class="input-field">
      <input type="email" required />
      <label>Enter Email Address</label>
    </div>
    <div class="input-field">
      <input type="text" required />
      <label>Enter Phone Number</label>
    </div>
    <div class="input-field">
      <input type="password" required />
      <label>Enter your password</label>
    </div>
    <div class="input-field">
      <input type="password" required />
      <label>Confirm password</label>
    </div>

    
    
  </form>
</template>

<script>
export default {
  name: "StudentRegister",
};
</script>
<style scope>
.contain {
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>