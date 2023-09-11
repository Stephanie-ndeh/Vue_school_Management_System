<template>
  <div class="menu-toggle">
    <a href="javascript:void(0);" id="toggle_btn">
        <i class="fas fa-bars"></i>
    </a>
</div>
</template>

<script>
export default {
    name: 'MenuToggle'
}
</script>

<style scoped>
.mini-sidebar .menu-toggle #toggle_btn {
    left: 5px;
  }
  .menu-toggle {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
</style>