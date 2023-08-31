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
<style scoped>
.category label {
  height: 145px;
  padding: 20px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
}

.category label:hover {
  background: blue;
  color: #fff bold;
  border-color: #fff;
  background: rgba(44, 41, 85, 0.15);
}
#visa:checked ~ .category .visaMethod,
#mastercard:checked ~ .category .mastercardMethod,
#paypal:checked ~ .category .paypalMethod,
#AMEX:checked ~ .category .amexMethod {
  box-shadow: 0px 0px 0px 1px #1119bb;
}

#visa:checked ~ .category .visaMethod .check,
#mastercard:checked ~ .category .mastercardMethod .check,
#paypal:checked ~ .category .paypalMethod .check,
#AMEX:checked ~ .category .amexMethod .check {
  display: block;
}

label .imgName {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
}

.imgName span {
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 82%;
  transform: translateY(-72%);
}
.imgName .imgContainer {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35%;
  transform: translateY(-35%);
}


</style>
