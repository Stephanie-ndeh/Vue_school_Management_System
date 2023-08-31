<template>
  <form action="">
  <div class="containerrs">
    <Header_Contact
      header="Connect with Us"
      text="We would love to respond to queires and help you succeed."
      sectext="feel free to get in touch with us" 
      />
    <div class="contact-box">
      <Contact_Left />
      <Contact_Right />
    </div>
  </div>
</form>
</template>

<script>
import Contact_Left from "../components/Contact/Contact_Left.vue";
import Header_Contact from "../components/Contact/Header_Contact.vue";
import Contact_Right from "../components/Contact/Contact_Right.vue";

export default {
  name: "Contact_usPage",
  props: {
    title: String,
  },
  components: {
    Header_Contact,
    Contact_Left,
    Contact_Right,
  },
  mounted() {
    document.body.style.background = "#eaecec";
  },
};
</script>

<style scoped>
.containerrs {
  width: 80%;
  margin: 50px;
}
.contact-box {
  background: #fff;
  display: flex;
}

h1 {
  margin-bottom: 10px;
}
.containerrs p {
  margin-bottom: 40px;
}
</style>