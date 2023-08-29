<template>
  <label for="visa" class="visaMethod">
    <div class="imgName">
      <div class="imgContainer visa">
        <a href="#">
          <!-- <img :src="image" alt=""/> -->
             <slot />
        </a>
      </div>
      <span class="name">{{ text }} </span>
    </div>
  </label>

</template>

<script>
export default {
  name: "Container_Method",
  props: {
    text: String,
    date: String
  }
};
</script>
