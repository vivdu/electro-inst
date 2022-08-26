import React from 'react';

function Acordion(){
    return (
        <div class="accordion accordion-flush mx-5" id="accordionFlushExample">
  <div class="accordion-item mx-5">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Servicio de mantenimiento
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Mantenimiento preventivo y correctivo de diferentes electrodomésticos con servicio a domicilio</div>
    </div>
  </div>
  <div class="accordion-item mx-5">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Servicio de reparación
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Reparación de electrodomésticos con fallas o daños, cambio de componentes afectados, cambio de repuestos</div>
    </div>
  </div>
  <div class="accordion-item mx-5">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Servicio de instalación
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Suministro, venta e instalación de circuitos lumínicos y electricos</div>
    </div>
  </div>
</div>
    )
}
export default Acordion;