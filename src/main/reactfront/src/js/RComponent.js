import React from "react";
import {Link} from "react-router-dom";

import rBtn from '../img/btn/rBtn.png';

function RComponent() {

    const componentStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "white",
        color: "white",
        float: "right",
        width: "20vw",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    const styleStart = {
        color:"white",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 100,
        borderStyle: 'solid',
        textDecoration: 'none',
        backgroundColor: "white",
    };

    return (
        <div style={componentStyle}>
            <Link style={styleStart} to="/"><img src={rBtn}/></Link><br/><br/>
        </div>
    );
}

export default RComponent;
