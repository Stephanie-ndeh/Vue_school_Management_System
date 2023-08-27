<template>
  <form class="contain">
    <HeaderBox />
    <Input_Container />
    <Button_Box />
    <Confirmation_Box />
    
  </form>

</template>

<script>
import HeaderBox from './HeaderBox.vue';
import Input_Container from './Input_Container.vue';
import Button_Box from './Button_Box.vue';
import Confirmation_Box from './Confirmation_Box.vue';
export default {
    name: "Container_Box",
    components: {
      HeaderBox,
      Input_Container,
      Button_Box,
      Confirmation_Box,
    }
};
</script>

<style>
</style>