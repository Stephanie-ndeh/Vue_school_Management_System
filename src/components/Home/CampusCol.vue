<template>
  <div class="campus-col">
    <slot />
    <div class="layer">
      <h1>{{ location }}</h1>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CampusCol',
    props:{
        location: String,
    }
};
</script>

<style>
 .campus-col{
    flex-basis: 32%;
    border-radius: 10px;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;
 }
 .layer{
    background: transparent;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
 }
 .layer:hover {
    background: rgba(77, 65, 65, 0.479);
 }
 .layer h3{
    width: 100%;
    font-weight: 500;
    color: #fff;
    font-size: 26px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    opacity: 0;
    transition: 0.5s;
 }
 .layer:hover h3{
    bottom: 49%;
    opacity: 1;
 }
</style>