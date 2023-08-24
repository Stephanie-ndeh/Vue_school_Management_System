<template>
    <div class="about-page">
      <div class="about-section">
        <h1>About Us</h1>
        <p>Our school management software is designed to help schools manage their administrative tasks more efficiently. With our software, you can easily manage student records, attendance, grades, and more.</p>
      </div>
      <form class="login-form">
        <h2>Teacher Login</h2>
        <div class="input-field">
          <input type="email" required />
          <label>Enter your email Address</label>
        </div>
        <div class="input-field">
          <input type="Password" required />
          <label>Enter your password</label>
        </div>
        <div class="forget">
          <label for="remember">
            <input type="checkbox" id="remember"/>
            <p>Remember me</p>
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
  };
  </script>
  
  <style scoped>
  .about-page {
    margin: 0 auto;
    max-width: 800px;
  }
  
  .about-section {
    padding: 50px;
    text-align: center;
    background-color: #474e5d;
    color: white;
  }
  
  .login-form {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  .input-field {
    margin-bottom: 10px;
  }
  
  .input-field input[type="text"],
  .input-field input[type="password"] {
    border-radius: 5px;
    border: none;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 100%;
  }
  
  .forget {
    display: flex;
  }
  
  .forget label {
    flex-grow: 1;
  }
  
  .forget a {
    text-align: right;
  }
  
  button[type="submit"] {
      background-color:#4CAF50; 
      border:none; 
      color:white; 
      padding:16px; 
      text-align:center; 
      text-decoration:none; 
      display:inline-block; 
      font-size:16px; 
      margin-top:20px; 
      cursor:pointer; 
      border-radius :5px
  }
  
  button[type="submit"]:hover {
      background-color:#3e8e41
  }
  </style>
  