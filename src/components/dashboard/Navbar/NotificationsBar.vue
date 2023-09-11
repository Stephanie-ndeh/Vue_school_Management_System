<template>
  <li class="nav-item dropdown noti-dropdown me-2">

<a href="#" class="dropdown-toggle nav-link header-nav-list" data-bs-toggle="dropdown"> 
  <i class="fa-regular fa-bell"></i> 
    </a>
    <div class="dropdown-menu notifications">
      <div class="topnav-dropdown-header">
        <span class="notification-title">Notifications</span>
        <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
      </div>
      <div class="noti-content">
        <ul class="notification-list">
            <NotificationMessage name="Carlson Tech" message="has approved" estimate="your estimate" time="4 minutes ago"/>
            <NotificationMessage name="Carlson Tech" message="has approved" estimate="your estimate" time="4 minutes ago"/>
            <NotificationMessage name="Carlson Tech" message="has approved" estimate="your estimate" time="4 minutes ago"/>
            <NotificationMessage name="Carlson Tech" message="has approved" estimate="your estimate" time="4 minutes ago"/> 
        </ul>
      </div>
      <div class="topnav-dropdown-footer">
        <a href="#">View all Notifications</a>
      </div>
    </div>
  </li>
</template>

<script>
import NotificationMessage from './NotificationMessage.vue';

export default {
    name: 'NotificationsBar',
    components: { 
      NotificationMessage 
    }
};
</script>

<style scoped>
.notifications {
  padding: 0;
}
.notifications .notification-time {
  font-size: 12px;
  line-height: 1.35;
  color: #bdbdbd;
}

</style>