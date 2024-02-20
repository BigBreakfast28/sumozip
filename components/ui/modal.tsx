import React, { useState } from "react";

export default function Modal() {
    
    const [modal, setModal] =useState(false); 
    
    return (
        <>
            <button className="btn-modal">Start Formulating</button>
        </>
    );
}