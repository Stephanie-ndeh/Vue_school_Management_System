<template>
    <Navbar_Dashboard />
    <SideBar />
  </template>
  
  <script>
import Navbar_Dashboard from '@/components/dashboard/Navbar/Navbar_Dashboard.vue';
import SideBar from '@/components/dashboard/sidebar/SideBar'


  export default {
    name: 'Admin_Dashboard',
    components: { 
        Navbar_Dashboard,
        SideBar
 }
}
  </script>
  
  <style>
  
  </style>