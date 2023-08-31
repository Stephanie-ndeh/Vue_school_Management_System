<template>
  <table>
    <tr>
      <Table_Row firstText="email" secondText="Contactus@example.com" />
    </tr>
    <tr>
      <Table_Row firstText="Phone" secondText="+237 651217428" />
    </tr>
    <tr>
      <Table_Row firstText="Address" secondText="#212, grou floor, 7th cross" />
    </tr>
  </table>
</template>

<script>
import Table_Row from "./Table_Row.vue";

export default {
  name: "Table_Contact",
  props: {
    title: String,
  },
  components: { Table_Row },

}
</script>

<style scoped>
tr :first-child {
  padding-right: 20px;
  
}
tr {
  padding-top: 20px;
  
}
</style>