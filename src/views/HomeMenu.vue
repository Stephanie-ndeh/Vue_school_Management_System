<template>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <section-seven />
</template>

<script>

import SectionOne from '@/components/Home/SectionOne.vue';
import SectionTwo from '@/components/Home/SectionTwo.vue';
import SectionThree from '@/components/Home/SectionThree.vue';
import SectionFour from '@/components/Home/SectionFour.vue';
import SectionFive from '@/components/Home/SectionFive.vue';
import SectionSix from '@/components/Home/SectionSix.vue';
import SectionSeven from '@/components/Home/SectionSeven.vue';

export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven
},
  name: "HomeMenu",
  props: {
    title: String
  }
};
</script>
<style >

</style>