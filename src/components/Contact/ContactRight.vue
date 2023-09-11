<template>
  <div class="contact-right">
    <h3><HeaderContact text="Reach us" /></h3>
    <TableContact />
  </div>
</template>

<script>
import HeaderContact from "./HeaderContact";
import TableContact from "./TableContact.vue";
export default {
  name: "ContactRight",
  props: {
    title: String,
  },
  components: {
    HeaderContact,
    TableContact,
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