<template>
  <button type="submit">{{ text }}</button>
</template>

<script>
export default {
    name: "Button_Box",
    props:{
      text: String
    },
    // methods: {
    //   onclick() {
    //     console.log('click')
    //  @click="onClick()"  }
    // }
}
</script>

<style>

</style>