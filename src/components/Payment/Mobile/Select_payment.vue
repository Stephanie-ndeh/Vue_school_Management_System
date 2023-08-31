<template>
    <label for="country">{{text}}</label>
    <select name="" id="country">
            <option value="country">{{ Orange }}</option>
            <option value="camerrom">{{ mtn }}</option>
        </select>
  </template>
  
  <script>
  export default {
      name: 'Select_payment',
      props:{
        text: String,
        Orange: String,
        mtn: String
      }
  };
  </script>
  <style scoped>
.input_text , select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;

}

</style>