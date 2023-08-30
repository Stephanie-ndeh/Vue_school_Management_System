<template>
      <div class="first-row">
        <Owner_InputField  text="Owner"/>
        <Cvv_InputField text="CVV"/>
      </div>
</template>

<script>
import Cvv_InputField from '../card/Cvv_InputField.vue';
import Owner_InputField from '../card/Owner_InputField.vue';
export default {
    name: 'FirstRow_Inputfield',
    components: {
    Owner_InputField,
    Cvv_InputField
},
    props: {
        title: String,
    }
}
</script>

<style scoped>
.first-row {
  display: flex;
}


</style>