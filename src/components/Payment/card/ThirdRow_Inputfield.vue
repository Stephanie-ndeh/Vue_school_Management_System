<template>
  <div class="third-row">
    <div class="selection">
      <DateInputField />
      <div class="cards">
      <Picture_Inputfield><img src="../../../assets/mc.png" alt="mastercard"/>
      </Picture_Inputfield>
      <Picture_Inputfield><img src="../../../assets/vi.png" alt="visacard"/>
      </Picture_Inputfield>

    </div>
    </div>



  </div>
</template>

<script>
import DateInputField from "./DateInputField.vue";
import Picture_Inputfield from "../Picture_Inputfield.vue";
export default {
  name: "ThirdRow_Inputfield",
  components: {
    DateInputField,
    Picture_Inputfield,
  },
  props: {
    title: String,
  },
};
</script>

<style scoped>

.first-row {
  display: flex;
}
.selection {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.selection select {
  padding: 10px 20px;
}
.cards img {
  width: 95px;
  height: 60px;
  padding: 2px;
}
</style>