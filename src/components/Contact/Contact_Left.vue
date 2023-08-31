<template>
<div class="contact-left">
    <h3> <Header_Contact text="Sent your request"/></h3>
    <div class="input-row">
        <Input_ContactPage inputType="text"  text="Name" placehold="Stephanie Ndeh"/>   <!--:value="emailValue" @update="emailValue = $event" -->
        <Input_ContactPage inputType="text"  text="Phone" placehold="+237 651217428"/>
    </div>
    <div class="input-row">
        <Input_ContactPage inputType="email" text="Email" placehold="Stephanie@gmail.com"/>
        <Input_ContactPage inputType="text" text="Subject" placehold="Product Demo"/>
    </div>
    <Text_Area message="Message" placehold="Your Message"/>
    <Button_Contact text="send"/>
</div>


</template>

<script>
import Button_Contact from './Button_Contact.vue';
import Header_Contact from './Header_Contact';
import Input_ContactPage from './Input_ContactPage.vue';
import Text_Area from './Text_Area.vue';


export default {
    name: ' Contact_Left',
    props: {
        title: String,
    },
    components: {
    Header_Contact,
    Input_ContactPage,
    Text_Area,
    Button_Contact
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