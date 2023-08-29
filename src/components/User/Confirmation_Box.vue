<template>
  <div class="register">
      <p>{{ text }} <a href="#">{{text2}}</a></p>
    </div>
</template>

<script>
export default {
    name: "Confirmation_Box",
    props:{
      text: String,
      text2: String,
    }
}
</script>

