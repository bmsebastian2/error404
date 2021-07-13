import React from 'react'
import uno from './img/1.jpg';

const Com404 = () => {
    return (

        <div id="contenedor404">
            <div className="p-4 ms-3 mt-3 fs-5">
                <p>404 NOT FOUND</p>
            </div>
            <div className = " row " id="contenedorPrincipal">

                <div className=" col-md-6">

                    <div className="d-flex justify-content-center">
                         <img src={uno} alt="" />                         
                    </div>

                </div>
                
                <div className="col-md-6">
                    <div className="  " id="contenedor2">
                        <div className="w-50">
                            <div className="">
                                <p id="ihave">I have bad news for you</p>
                            </div>
                            <div className="my-5">
                                <p id="ihave2">Tha page you are looking for might be removed or is temporality unvaible.</p>
                            </div>
                            <div className="" >
                            <button id="button404">BACK TO CONTINUE</button>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Com404
