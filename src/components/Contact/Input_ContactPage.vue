<template> 
<div class="input-group">
    <label>{{ text }}</label>
    <input :type="inputType"  :placeholder= "placehold" required/> <!--:value="value" @input="$emit('update',$event.target.value)" -->
</div>

</template>

<script>
export default {
    name:'Input_ContactPage',
    props: {
        text: String,
        placehold: String,
        inputType: String,
        value: String
    }
};
</script>

<style scoped>

.containerrs {
    width: 80%;
    margin: 50px;
}
.contact-box {
    background: #fff;
    display: flex;
}
.input-group {
    flex-basis:  45%;

}
input {
    width: 100%;
     border: none; 
    border-bottom: 1px solid #ccc;
    outline: none;
    padding-bottom: 5px;
}

label {
    margin: 6px;
    display: block;
    color: #1c00b5;
}


</style>