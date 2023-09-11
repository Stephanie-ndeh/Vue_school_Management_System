<template>
  <div class="top-nav-search">
    <form>
        <input type="text" class="form-control" placeholder="Search here">
        <button class="btn" type="submit"><i class="fas fa-search"></i></button>
    </form>
</div>
</template>

<script scoped>
export default {
    name: 'SearchBar'
}
</script>

<style scoped>
.top-nav-search {
  float: left;
  margin-left: 55px;
}
.top-nav-search form {
  margin-top: 10px;
  position: relative;
  width: 300px;
}
.top-nav-search .form-control {
  background: #f5f5f5;
  border: 1px solid #d7d9de;
  border-radius: 8px;
  color: #6c757d;
  height: 40px;
  padding: 10px 15px 10px 40px;
}
.top-nav-search .btn {
  background-color: transparent;
  border-color: transparent;
  color: rgba(17, 17, 17, 0.32);
  min-height: 40px;
  padding: 7px 15px;
  position: absolute;
  left: 0;
  top: 0;
}
.top-nav-search .form-control::-webkit-input-placeholder {
  color: rgba(17, 17, 17, 0.32);
  font-weight: 500;
}
.top-nav-search .form-control::-moz-placeholder {
  color: rgba(17, 17, 17, 0.32);
  font-weight: 500;
}
.top-nav-search .form-control:-ms-input-placeholder {
  color: rgba(17, 17, 17, 0.32);
  font-weight: 500;
}
.top-nav-search .form-control::-ms-input-placeholder {
  color: rgba(17, 17, 17, 0.32);
  font-weight: 500;
}
.top-nav-search .form-control::placeholder {
  color: rgba(17, 17, 17, 0.32);
  font-weight: 500;
}
.top-nav-search.active form {
  display: block;
  left: 0;
  position: absolute;
}
</style>