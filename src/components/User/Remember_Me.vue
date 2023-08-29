<template>
  <div class="forget">
    <label for="remember">
      <input type="checkbox" id="remember" />
      <p>{{ Remember }}</p>
    </label>
    <a href="#">{{ forgot }}</a>
  </div>
</template>

<script>
export default {
  name: "Remember_Me",
  props: {
      Remember: String,
      forgot: String
    }
};
</script>

