import React from 'react'

const AdditionalInfoSection = () => {
    return (
        <div className="container-lg w-100 container-fluid add-info-box">
            <div className="row py-4">
                <div className="col-lg-3 col-md-3 col-4 info-link-part">
                    <a className="fw-medium" href="">Additional information</a>
                </div>
                <div className="col-lg-9 col-md-9 col-8 slices-part">
                    <div className="slice d-flex justify-content-between">
                        <p>Weight</p>
                        <p>0.5 kg</p>
                    </div>
                    <div className="slice d-flex justify-content-between">
                        <p>Colour</p>
                        <p><a href="">Green</a></p>
                    </div>
                    <div className="slice d-flex justify-content-between">
                        <p>Size</p>
                        <p><a href="">Large</a>, <a href="">Medium</a>, <a href="">Small</a></p>
                    </div>
                    <div className="slice d-flex justify-content-between">
                        <p>Fabric</p>
                        <p><a href="">Suede</a></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdditionalInfoSection