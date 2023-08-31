<template>
  <td>{{ firstText }}</td>
  <td>{{ secondText }}</td>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    firstText: String,
    secondText: String,
  },
};
</script>

<style>
td :first-child {
  padding-right: 20px;
  
}
td {
  padding-top: 20px;
  margin: 10px;
  color: black;
  font-weight: bold;
}
</style>