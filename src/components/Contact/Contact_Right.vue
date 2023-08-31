<template>
  <div class="contact-right">
    <h3><Header_Contact text="Reach us" /></h3>
    <Table_Contact />
  </div>
</template>

<script>
import Header_Contact from "./Header_Contact";
import Table_Contact from "./Table_Contact.vue";
export default {
  name: "Contact_Right",
  props: {
    title: String,
  },
  components: {
    Header_Contact,
    Table_Contact,
  },
};
</script>

<style scoped>
.contact-right {
  flex-basis: 40%;
  padding: 40px;
  background: #1c00b5;
}
.contact-right h3 {
  color: white;
  font-weight: 600;
  margin-bottom: 30px;
}
</style>