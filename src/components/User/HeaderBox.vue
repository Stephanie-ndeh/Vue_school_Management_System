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
h2{
    font-size: 2.5rem;
    color: #fff;
    font-weight: bold;
}
img {
    height: 70px;
    width: 80px;
    border-radius: 10px;
}
</style>