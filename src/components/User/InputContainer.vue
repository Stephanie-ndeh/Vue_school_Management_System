<template>
    <div class="input-field">
      <input type="text" required />
      <label>{{ text }}</label>

    </div>
</template>

<script>
export default {
    name: "Input-Container",
    props: {
      text: String,
    }
}
</script>

