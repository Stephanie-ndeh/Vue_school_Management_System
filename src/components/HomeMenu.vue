<template>
    <h3>Hello</h3>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
      
          <div class="carousel-inner">
            <div class="item active">
              <img src="../assets/pexels-pixabay-256490.jpg" alt="Los Angeles" style="width:100%; height: 50%; object-fit: cover;">
            </div>
      
            <div class="item">
              <img src="../assets/pexels-keira-burton-6146978.jpg" alt="Chicago" style="width:100%;height: 50%; object-fit: cover;">
            </div>
          
            <div class="item">
              <img src="../assets/pexels-stanley-morales-1454360.jpg" alt="New york" style="width:100%;height: 50%; object-fit: cover;">
            </div>
          </div>
      
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>

        </div>
</template>
<script>
    export default {
        name: 'HomeMenu'
    }
</script>