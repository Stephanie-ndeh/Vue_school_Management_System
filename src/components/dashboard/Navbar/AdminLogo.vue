<template>
        <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
            <span class="user-img">
                <img class="rounded-circle" src="../../../assets/user-6.jpg" width="31"
                    alt="Soeng Souy">
                <div class="user-text">
                    <h6>{{text}}</h6>
                    <p class="text-muted mb-0">{{name}}</p>
                </div>
            </span>
        </a>
        <div class="dropdown-menu">
            <div class="user-header">
                <div class="avatar avatar-sm">
                    <img src="../../../assets/user-6.jpg" alt="User Image"
                        class="avatar-img rounded-circle">
                </div>
                <div class="user-text">
                    <h6>{{ text }}</h6>
                    <p class="text-muted mb-0">{{ name }}</p>
                </div>
            </div>
            <a class="dropdown-item" href="profile.html">My Profile</a>
            <a class="dropdown-item" href="inbox.html">Inbox</a>
            <a class="dropdown-item" href="login.html">Logout</a>
        </div>
</template>

<script>
// import $ from 'jquery'
export default {
    name: 'AdminLogo',
    props: {
        text: String,
        name: String,
    }
//     mounted() {
//     $(document).ready(function() {
//       // Your jQuery code here
//     });
// }
}

</script>

<style scoped>
.user-img .user-text {
  margin: 0 8px;
}
.user-img .user-text .text-muted {
  line-height: 1.2;
  font-size: 12px;
  font-weight: 500;
  color: #3d5ee1 !important;
}
.user-img .user-text h6 {
  font-size: 14px;
  font-weight: 500;
  color: #1d1d1d;
  margin-bottom: 3px;
}
.user-img img {
  width: 40px;
  height: 40px;
  border: 2px solid #e6e6e6;
  padding: 2px;
}
.dropdown-item.active,
.dropdown-item:active {
  background-color: #3d5ee1;
}
</style>