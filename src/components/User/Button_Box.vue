<template>
  <button type="submit">{{ text }}</button>
</template>

<script>
export default {
    name: "Button_Box",
    props:{
      text: String
    },
}
</script>
<style scoped>
button {
  background-color: blueviolet;
  color: #000;
  font-weight: 600;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 15px 15px 15px 15px;
  font-size: 20px;
  border: 2px solid transparent;
  transition: 0.3s ease;
  /* width: 370px; */
}
button:hover {
  background: blue;
  background-color: dodgerblue;
}
</style>
