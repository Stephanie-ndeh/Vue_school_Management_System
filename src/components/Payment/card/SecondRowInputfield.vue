<template>
    <div class="second-row">
      <Owner_InputField  text="Card Number"/>
    </div>
</template>

<script>
import Owner_InputField from './OwnerInputField.vue';
export default {
  name: 'SecondRow_Inputfield',
  components: {
  Owner_InputField,
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