import React from "react";
import {Link} from "react-router-dom";
import bBtn from "../img/btn/bBtn.png";

function BComponent() {

    const componentStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "white",
        color: "white",
        height: "15vh",
        width: "100vw",
        textAlign: "center",
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
        <footer>
            <div style={componentStyle}>
                <Link style={styleStart} to="/"><img src={bBtn}/></Link><br/><br/>

            </div>
        </footer>
    );
}

export default BComponent;
