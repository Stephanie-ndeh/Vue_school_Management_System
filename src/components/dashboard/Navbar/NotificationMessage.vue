<template>
  <li class="notification-message">
    <a href="#">
      <div class="media d-flex"> 
        <span class="avatar avatar-sm flex-shrink-0"> 
          <img class="avatar-img rounded-circle" alt="User Image" src="../../../assets/profiles/avatar-01.jpg" />
        </span>
        <div class="media-body flex-grow-1">
          <p class="noti-details">
            <span class="noti-title">{{name}}</span> {{message}}
            <span class="noti-title">{{estimate}}</span>
          </p>
          <p class="noti-time">
            <span class="notification-time">{{time}}</span>
          </p>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
    name:'NotificationMessage',
    props: {
        name: String,
        message: String,
        estimate: String,
        time: String
    }
};
</script>

<style scoped>
.notifications .media {
  margin-top: 0;
  border-bottom: 1px solid #f5f5f5;
}
.notifications .media:last-child {
  border-bottom: none;
}
.notifications .media a {
  display: block;
  padding: 10px 15px;
  border-radius: 2px;
}
.notifications .media a:hover {
  background-color: #fafafa;
}
.notifications .media > .avatar {
  margin-right: 10px;
}
.notifications .media-list .media-left {
  padding-right: 8px;
}
.noti-details {
  color: #989c9e;
  margin-bottom: 0;
}
.noti-title {
  color: #333;
}
</style>