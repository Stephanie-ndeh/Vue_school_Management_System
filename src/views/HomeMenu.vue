<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div class="carousel-inner">
      <div class="item active">
        <img
          src="../assets/pexels-pixabay-256490.jpg"
          alt="Los Angeles"
          style="width: 100%; height: 50%; object-fit: cover"
        />
        <!-- <div class="carousel-caption text">
          <p>Welcome to the university of anonymous</p>
  
        </div> -->
      </div>

      <div class="item">
        <img
          src="../assets/pexels-keira-burton-6146978.jpg"
          alt="Chicago"
          style="width: 100%; height: 50%; object-fit: cover"
        />
       
      </div>

      <div class="item">
        <img
          src="../assets/pexels-stanley-morales-1454360.jpg"
          alt="New york"
          style="width: 100%; height: 50%; object-fit: cover"
        />
        
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
  name: "HomeMenu",
};
</script>
<style >
.bgimage {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 0 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.carousel-caption {
    top: 0;
    bottom: auto;
}
.text {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 48px;
      color: rgb(39, 196, 65);
      margin-top: 70px;
    }
</style>