<template>
    <div class="heading">
        <h1>About Us</h1>
        <p>Welcome to THIS  School! We are a community of
             learners dedicated to providing a safe and 
             nurturing environment where students can grow 
             academically, socially, and emotionally. Our experienced faculty and staff are committed to helping each student reach their full potential by providing individualized attention and support. 
             We believe that every student has unique talents and abilities that should be celebrated and nurtured. At THIS School, we strive to create a culture of respect, kindness, and inclusivity where
              everyone feels valued and supported. Thank you for considering THIS School for your child’s education.
        </p>
    </div>
    <div class="container">
        <section class="about">
        <div class="about-image">
            <img src="../assets/pexels-pixabay-256490.jpg" alt="">
        </div>
        <div class="about-content">
            <h2>school management system</h2>
            <p>Welcome to THIS  School! We are a community of
                learners dedicated to providing a safe and 
                nurturing environment where students can grow 
                academically, socially, and emotionally. Our experienced faculty and staff are committed to helping each student reach their full potential by providing individualized attention and support. 
                We believe that every student has unique talents and abilities that should be celebrated and nurtured. At THIS School, we strive to create a culture of respect, kindness, and inclusivity where
                 everyone feels valued and supported. Thank you for considering THIS School for your child’s education.</p>
        <a href="#" class="read-more">read More</a>
                </div>
    </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
  };
  </script>
  
  <style scoped>
  * {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
body {
  background-color: #f2f2f2;
}
.heading {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 20px auto;
}
.heading h1 {
  font-size: 50px;
  color: #000;
  margin-bottom: 25px;
  position: relative;
}
.heading h1::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  display: block;
  margin: 0 auto;
  background-color: #4caf50;
}
.heading p {
    font-size: 18px;
    color: #666;
    margin-bottom: 35px;
}
.container {
    width: 90%;
    margin: 0 auto;
    padding: 10px 10px;
}
.about {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.about-image {
    flex: 1;
    margin-right: 40px;
    overflow: hidden;
}
.about-image:hover img{
    transform: scale(1.2);
}
.about-image img{
    max-width: 100%;
    height: auto;
    display: block;
    transition: 0.5s ease;
}
.about-content {
    flex: 1;
}
.about-content h2 {
    font-size: 23px;
    margin-bottom: 15px;
    color: #333;
}
.about-content p {
    font-size: 18px;
    line-height: 1.5;
    color: #666;
}
.about-content .read-more{
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    background-color: #4caf50;
    font-size: 19px;
    text-decoration: none;
    border-radius: 25px;
    margin-top: 15px;
    transition: 0.3s ease;
}
.about-content .read-more:hover{
    background-color: #3e8e41;
}
@media screen and (max-width: 768px) {
    .heading{
        padding: 0px 20px;
    }
    .heading h1 {
        font-size: 36px;
    }
    .heading p{
        font-size: 17px;
        margin-bottom: 0px;
    }
    .container{
        padding: 0px;
    }
    .about{
        padding: 20px;
        flex-direction: column;
    }
    .about-image{
        margin-right: 0px;
        margin-bottom: 20px;
    }
    .about-content p{
        padding: 0px;
        font-size: 16px;
    }
    .about-content .read-more{
        font-size: 16px;
    }
    
}
  </style>
  