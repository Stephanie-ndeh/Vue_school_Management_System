<template>
  <div class="selection">
    <input class="f-input" style="width: 50px;" type="text">
    <span class="t-body -size-l h-m0 h-pull-left">&nbsp;/&nbsp;</span>
    <input class="f-input" style="width: 50px;" type="text">
  </div>
</template>

<script>
export default {
    name: 'DateinputField',
  
};
</script>

<style scoped>
.selection{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.f-input {
    font-size: 13px;
    font-weight: normal;
    outline: 0;
    height: 30px;
    line-height: 1;
    border-radius: 4px;
    color: gray;
    background: white;
    border: 1px solid #bababa;
    padding: 5px 8px;
}

</style>