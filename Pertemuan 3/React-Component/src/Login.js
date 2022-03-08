import React from "react";
import './Login.css';

const Login = () => {
  return (
    <body>      
       <h1 class="text-center p-2">Form Login</h1>   
      <div class="container">
      <h3 class="card-title text-center">Tugas Pertemuan<br></br> Ketiga</h3>
        <br/><br/>
        <form class="login_form" action="" method="post" name="form">
          <div class="form-group">
          <label for="username">Username</label>
            <input name="username" type="text" placeholder="Masukkan Username" required></input>
          </div>
          <div class="form-group">
          <label for="Password">Password</label>
            <input type="password" name="password" placeholder="Masukkan Password Anda" required></input>
          </div>
			    <button type="submit">Login</button>
          <br />
        </form>
        <div class="item-bawah">
          <input type="checkbox" class="ukuran-checkbox"/>Remember Me
          <br />
          <button type="reset" class="cancel">Cancel</button>
        </div>
      </div>
    </body>
  );   
}

export default Login;