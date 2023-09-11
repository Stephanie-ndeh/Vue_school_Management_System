<template>
  <div class="third-row">
    <div class="selection">
      <DateInputField />
      <div class="cards">
      <PictureInputfield><img src="../../../assets/mc.png" alt="mastercard"/>
      </PictureInputfield>
      <PictureInputfield><img src="../../../assets/vi.png" alt="visacard"/>
      </PictureInputfield>

    </div>
    </div>



  </div>
</template>

<script>
import DateInputField from "./DateInputField.vue";
import PictureInputfield from "../PictureInputfield.vue";
export default {
  name: "ThirdRow_Inputfield",
  components: {
    DateInputField,
    PictureInputfield,
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