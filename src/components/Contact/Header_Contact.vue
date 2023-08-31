<template>
  <h1>{{ header }}</h1>
  <p>
   {{ text }} <br />
   {{ sectext }}
  </p>
</template>

<script>
export default {
    name: 'Header_Contact',
    props: {
        header:String,
        text: String,
        sectext: String
    }
};
</script>

<style scoped>
h1 {
    margin-bottom: 10PX;
}
p {
    margin-bottom: 40px;
}
</style>