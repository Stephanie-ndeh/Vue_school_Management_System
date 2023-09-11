<template>
      <a href="#" class="hero-btn">{{ text }}</a> 
</template>

<script>
export default {
    name: 'buttonNav',
    props:{
        text: String
    }
}
</script>

<style scoped>
.hero-btn{
    display: inline-block;
    text-decoration: none;
    color: #fff;
    border: 1px solid #fff;
    padding: 12px 34px;
    font-size: 13px;
    background: transparent;
    position: relative;
    cursor: pointer;
}
.hero-btn:hover{
    border: 1px solid #f44336;
    background: #f44336;
    transition: 1s;
}
</style>