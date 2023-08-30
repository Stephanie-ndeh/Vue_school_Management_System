<template>
   <div class="amount">
        <p> {{ amount }}</p>
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'Side_TextPayment',
    props: {
        amount: String,
        text: String
    }
}
</script>

<style>

</style>