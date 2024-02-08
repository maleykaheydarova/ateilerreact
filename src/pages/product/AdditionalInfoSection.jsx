import React from 'react'

const AdditionalInfoSection = () => {
    return (
        <div class="container-lg w-100 container-fluid add-info-box">
            <div class="row py-4">
                <div class="col-lg-3 col-md-3 col-4 info-link-part">
                    <a class="fw-medium" href="">Additional information</a>
                </div>
                <div class="col-lg-9 col-md-9 col-8 slices-part">
                    <div class="slice d-flex justify-content-between">
                        <p>Weight</p>
                        <p>0.5 kg</p>
                    </div>
                    <div class="slice d-flex justify-content-between">
                        <p>Colour</p>
                        <p><a href="">Green</a></p>
                    </div>
                    <div class="slice d-flex justify-content-between">
                        <p>Size</p>
                        <p><a href="">Large</a>, <a href="">Medium</a>, <a href="">Small</a></p>
                    </div>
                    <div class="slice d-flex justify-content-between">
                        <p>Fabric</p>
                        <p><a href="">Suede</a></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdditionalInfoSection