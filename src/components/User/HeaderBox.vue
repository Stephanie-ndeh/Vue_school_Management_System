<template>
    <h2>{{text}}</h2>
         <div class="logo1"><img src="../../assets/logo1.png" alt="logo" /></div> 
</template>

<script>
export default {
    name: "HeaderBox",
    props:{
        text: String
    }
}
</script>
<style scoped>
img {
  height: 80px;
  width: 80px;
  border-radius: 10px;
}
</style>