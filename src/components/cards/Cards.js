import React from 'react';
import Item from '../../assets/banner.png';

function Cards() {
    return (
        <section class="row d-flex justify-content-around my-5">
            <div class="card col-10 col-md-5 col-lg-3 mt-5">
                <img src={Item} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Informacion 1</h5>
                    <p class="card-text">Linea de neveras</p>
                </div>
            </div>
            <div class="card col-10 col-md-5 col-lg-3 mt-5">
                <img src={Item} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Informacion 2</h5>
                    <p class="card-text">Linea de lavadoras</p>
                </div>
            </div>
            <div class="card col-10 col-md-5 col-lg-3 mt-5">
                <img src={Item} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Informacion 3</h5>
                    <p class="card-text">En general</p>
                </div>
            </div>
        </section>
    )
}
export default Cards;