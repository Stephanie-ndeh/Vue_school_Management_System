<template>
      <div class="owner">
        <h3>{{ text }}</h3>
        <div class="input-fieldd">
          <input type="text" />
        </div>
      </div>
</template>

<script>
export default {
    name: 'Owner_InputField',
    props:{
      text: String,
    }
}
</script>

<style scoped>
.owner {
  width: 100%;
  margin-right: 40px;
}
.input-fieldd {
  border: 1px solid #999;
}

.input-fieldd input {
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
}

</style>