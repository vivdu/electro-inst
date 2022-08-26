import React from 'react';
import Slider1 from '../../assets/img01.jpg';
import Slider2 from '../../assets/img02.jpg';
import Slider3 from '../../assets/img03.jpg';
import './carousel.css';

function Carousel(){
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Slider1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption mx-2 d-md-block">
        <h4>Reparación de electrodomésticos</h4>
        <p>Lavadoras - Neveras - Estufas</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Slider2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
        <h4>Instalaciones eléctricas</h4>
        <p>Circuitos - Electrobombas - Fotoceldas</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Slider3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
        <h4>Otros servicios</h4>
        <p>Arreglos de tuberías</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>
    )
}
export default Carousel;