import React from 'react';
import Items from '../../assets/banner.png';

function Banner(){
    return(
        <div>
        <div class="container my-3">
            <div class="row justify-content-center">
                <div class="right-side col-12 col-md-6 item-wrapper">
                    <img src={Items} alt=""/>
                </div>
                <div class="left-side col-12 col-md my-5 mx-5">
                    
                    <h3>Ofrecemos</h3>
                    <p >
                        Mantenimiento y reparacion de Electrodomesticos en Bogotá</p>
                    <div class="mbr-section-btn"><a class="btn btn-primary display-4" href="">Contactenos</a></div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Banner;