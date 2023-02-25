import React from "react";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

import lBtn from '../img/btn/lBtn.png';

function LComponent(props) {

    const componentStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "white",
        color: "white",
        float: "left",
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

    const navigate = useNavigate();

    const id = props.id;
    const img = props.img;

    const goToNext = () => {
        navigate("/Records", {state:{id, img}});
    };

    return (
        <motion.div style={componentStyle} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ duration: 1 }}>
            <button style={styleStart} onClick={goToNext}><img src={lBtn}/></button><br/><br/>
        </motion.div>
    );
}

export default LComponent;
