<template>
  <button class="chat-btn">
    <i class="material-icons"> Chat </i>
  </button>
</template>

<script>
export default {
  name: "ChatBtn",
};

</script>

<style scoped>
.chat-btn {
  position: fixed;
  right: 50px;
  bottom: 50px;
  background: dodgerblue;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  opacity: 0.8;
  transition: opacity 0.3s;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
}
</style>