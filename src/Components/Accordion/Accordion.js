import React from "react";
import Ride from "../Rides/Ride";

export default function Accordion(){
  return (
    <>
        <div className="rides">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <Ride></Ride>
                        </div>
                    </div>
                </div>                
            </div>            
        </div>
    </>
  );
};

