<template>
<section>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top "  >
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">School Management System</a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><router-link to="/about"><span class="glyphicon glyphicon-info-sign">
                        </span>&nbsp;&nbsp;About  </router-link></li>
                        <li><router-link to="/home"><span class="glyphicon glyphicon-home">
                        </span>&nbsp;&nbsp; Home </router-link></li>
                        <li><router-link to="/contact"><span class="glyphicon glyphicon-earphone">
                        </span>&nbsp;&nbsp; Contact</router-link> </li>
                        <li><router-link to="/login"><span class="glyphicon glyphicon-info-sign">
                        </span>&nbsp;&nbsp; User Login </router-link></li>
                        <li><router-link to="/amount"><span class="glyphicon glyphicon-info-sign">
                        </span>&nbsp;&nbsp; Pay Fees </router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
</div>
</section>
</template>

<script >
export default {
    name: 'NavMenu'
    }
</script>

<style scoped>
.navbar {
  padding: 10px;
}
.navbar-default {
  margin-bottom: 0 !important;
}
.navbar-collapse ul li::after { /*the after is used to add a horizontal line under the list*/
    content: '';
    width: 0%;
    height: 2px;
    background: #388994;
    display: block;
    margin: auto;
    transition: 0.5s;
}
.navbar-collapse ul li:hover::after{
    width: 100%;
}
</style>