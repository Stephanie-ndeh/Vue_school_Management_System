<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top "  style="background-color: rgb(238, 243, 243);">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">School Management System</a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><router-link to="/about"><span class="glyphicon glyphicon-info-sign"></span>&nbsp;&nbsp;About  </router-link></li>
                <li><router-link to="/home"><span class="glyphicon glyphicon-home"></span>&nbsp;&nbsp; Home </router-link></li>
                <li><a href="#"><span class="glyphicon glyphicon-earphone"></span>&nbsp;&nbsp; Contact</a></li>
                <li><router-link to="/login"><span class="glyphicon glyphicon-info-sign"></span>&nbsp;&nbsp; User Login </router-link></li>
            </ul>
        </div>
    </div>
</nav>

    </div>
</template>

<script >

    export default {
        name: 'NavMenu'
    }
</script>