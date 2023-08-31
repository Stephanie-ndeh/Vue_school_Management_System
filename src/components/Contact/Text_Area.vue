<template>
  <label>{{message}}</label>
  <textarea  cols="30" rows="5" :placeholder="placehold" required>
  </textarea>
</template>

<script>
export default {
  name: "Text_Area",
  props: {
    message: String,
    placehold: String
  },
};
</script>

<style scoped>
textarea {
    width: 100%;
    border: 1px solid #ccc;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
}
label {
    margin: 6px;
    display: block;
    color: #1c00b5;
}
</style>