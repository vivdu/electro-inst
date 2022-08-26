import React from 'react';

function Offcanvas() {
    return (
        <div class="d-flex my-3 flex-column align-items-center justify-content-center mx-5">
            <button class="btn btn-primary w-25" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Enviar mensaje
            </button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Escribir a:</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <button type="button" class="btn-primary">Whatsapp</button>
                        
                    </div>
                    
                </div>
            </div>
            <div className="container-fluid google-map d-flex justify-content-center my-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.350830103182!2d-74.13158438589876!3d4.708977796579743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8354a24b2e4b%3A0xbb9984547b73d569!2sFerredeposito%20A%20Riviera!5e0!3m2!1ses-419!2sco!4v1661471834647!5m2!1ses-419!2sco" width="800" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
export default Offcanvas;