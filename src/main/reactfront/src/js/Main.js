import React from 'react';
import { motion } from "framer-motion";
import foot from '../img/foot.png';

function Main() {
    const styleObj = {
        color: "black",
        textAlign:"center",
    };

    const styleFont = {
        fontSize: "100px",
        marginBottom: "0px",
        marginTop: "7%"
    };


    const styleStart = {
        fontSize: "87px",
        color:"white",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 100,
        borderStyle: 'solid',
        textDecoration: 'none',
        backgroundColor: "black",
        marginRight: "auto"
    };

    const rightImg = {
        marginLeft: "30px",
        position: "absolute"
    };

    /*const REST_API_KEY = "cce6a069bc4d9aeb3ba98824d3ee428a";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;*/

    return (
        <motion.div style={styleObj} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ duration: 1 }}>
            <h1 style={styleFont}>나의<br/>냥냥<br/>일지</h1>
            {/*<a style={styleStart} href={KAKAO_AUTH_URL}>Start</a>*/}
            <a style={styleStart} href="/login">Start</a>
            <motion.img src={foot} style={rightImg} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ duration: 3 }}/>
            <br/>
        </motion.div>
    );
}

export default Main;