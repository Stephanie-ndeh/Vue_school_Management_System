<template>

    <h1>{{ h1text }}</h1>
    <p>{{ ptext }}</p>

</template>

<script>
export default {
    name:'textBox',
    props: {
        h1text: String,
        ptext: String
    }
};
</script>

<style scoped>

.text-box h1{
    font-size: 62px;
}
.text-box p{
    margin: 10px 0px 40px;
    font-size: 14px;
    color: white;
}
</style>