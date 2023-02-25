import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from "./Carousel";
import InputText from './InputText';

import { motion } from "framer-motion";
import Logout from "./Logout";

function Choice() {
    const styleObj = {
        marginTop : "10%",
        color: "black",
        textAlign:"center"
    };

    const navigate = useNavigate();
    const [user_id, setUserId] = useState();
    const [nickName, setNickName] = useState();
    //const [profileImage, setProfileImage] = useState();

    const getProfile = async () => {
        /*try {
            // Kakao SDK API를 이용해 사용자 정보 획득
            let data = await window.Kakao.API.request({
                url: "/v2/user/me",
            });

            // 사용자 정보 변수에 저장
            setUserId(data.id);
            setNickName(data.properties.nickname);

            sessionStorage.setItem('nickName',data.properties.nickname);
            sessionStorage.setItem('userId',data.id);
        } catch (err) {
            console.log(err);
        }*/


    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <motion.div style={styleObj} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ duration: 1 }}>
            <Logout/><br/>
            <h2>{window.localStorage.getItem("memberName")}님 환영합니다!</h2>
            <InputText/>
            <Carousel/>
        </motion.div>
    );
}

export default Choice;