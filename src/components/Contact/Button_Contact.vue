<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
    name: 'Button_Contact',
    props:{
        text: String,
    }
}
</script>

<style scoped>
button {
    background: #1c00b5;
    width: 100%;
    border: none;
    outline: none;
    color: #fff;
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 15px 15px 0px rgba(28, 0, 181, alpha);
}
button:hover {
  background-color: rgb(72, 62, 129);
}
</style>