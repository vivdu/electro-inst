import React from 'react';
import './navbar.css';

function Navbar(){
    return (
        <nav class="navbar navbar-expand-md bg-light sticky-top my-2">
  <div class="container-fluid">
  <h3 class="mx-2">Electro-instalaciones</h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mx-5 mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html">Ubicación</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html">Contacto</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    )
}
export default Navbar;