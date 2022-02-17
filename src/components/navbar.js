import React from 'react'

function Navbar() {
    return(
<nav class=" navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <span class="navbar-text myPhrase">We made it possible.</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="myNav nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="myNav nav-link" href="#">Games</a>
        </li>
        <li class="nav-item">
          <a class=" myNav nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="loginSignup d-flex ">
      <button class="btn btn-outline-success rounded mar-right expando" type="button">Login <img src="https://img.icons8.com/ios-glyphs/20/ffffff/login-rounded-right--v1.png"/></button>
        <button class="btn btn-success rounded" type="button">Sign up <img src="https://img.icons8.com/ios-glyphs/20/ffffff/add-user-male.png"/></button>
      </form>
      
    </div>
  </div>
    
 
</nav>
    )
}

export default Navbar;