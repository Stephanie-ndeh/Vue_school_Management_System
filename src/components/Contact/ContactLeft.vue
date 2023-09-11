<template>
<div class="contact-left">
    <h3> <HeaderContact text="Sent your request"/></h3>
    <div class="input-row">
        <InputContactPage inputType="text"  text="Name" placehold="Stephanie Ndeh"/>   <!--:value="emailValue" @update="emailValue = $event" -->
        <InputContactPage inputType="text"  text="Phone" placehold="+237 651217428"/>
    </div>
    <div class="input-row">
        <InputContactPage inputType="email" text="Email" placehold="Stephanie@gmail.com"/>
        <InputContactPage inputType="text" text="Subject" placehold="Product Demo"/>
    </div>
    <TextArea message="Message" placehold="Your Message"/>
    <ButtonContact text="send"/>
</div>


</template>

<script>
import ButtonContact from './ButtonContact.vue';
import HeaderContact from './HeaderContact';
import InputContactPage from './InputContactPage.vue';
import TextArea from './TextArea.vue';


export default {
    name: ' ContactLeft',
    props: {
        title: String,
    },
    components: {
    HeaderContact,
    InputContactPage,
    TextArea,
    ButtonContact
}
}
</script>

<style scoped>

.contact-left {
    flex-basis: 60%;
    padding: 40px 60px;
}

.input-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

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