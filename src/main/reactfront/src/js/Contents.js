import React, { useState, useEffect } from 'react';
import axios from 'axios';

import img1 from "../img/motion/1.gif";
import img2 from '../img/motion/2.gif';
import img3 from '../img/motion/3.gif';
import img4 from '../img/motion/4.gif';
import img5 from '../img/motion/5.gif';
import img6 from '../img/motion/6.gif';
import img7 from '../img/motion/7.gif';
import img8 from '../img/motion/8.gif';
import img9 from '../img/motion/9.gif';
import img10 from '../img/motion/10.gif';
import img11 from '../img/motion/11.gif';
import img12 from '../img/motion/12.gif';
import img13 from '../img/motion/13.gif';
import img14 from '../img/motion/14.gif';
import img15 from '../img/motion/15.gif';
import {Link} from "react-router-dom";

import lBtn from "../img/btn/lBtn.png";
import {motion} from "framer-motion";
import Logout from "./Logout";

export default function Contents() {
    const [catList, setCatList] = useState([]);
    const [selectedCat, setSelectedCat] = useState('');
    const [selectedImg, setSelectedImg] = useState('');
    const imgList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
    const imgNum = {selectedImg}.selectedImg;

    const headerStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "white",
        color: "white",
        height: "15vh",
        width: "100vw",
    };

    const styleStart = {
        color:"white",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 100,
        borderStyle: 'solid',
        textDecoration: 'none',
        backgroundColor: "black",
    };

    const styleOption = {
        color:"white",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 100,
        borderStyle: 'solid',
        textDecoration: 'none',
        backgroundColor: "black",
        float:"right"
    };

    const componentStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        width:"55vw",
        height:"69vh",
    };

    const navStyle = {
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

    const navBtnStyle = {
        color:"white",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 100,
        borderStyle: 'solid',
        textDecoration: 'none',
        backgroundColor: "white",
    };

    useEffect(() => {
        axios.post('/catLists', { memberId: localStorage.getItem('memberId')})
            .then(response => {
                setCatList(response.data);
                setSelectedCat(response.data[0].catSeq);
                setSelectedImg(response.data[0].catImg);
                localStorage.setItem('catList', JSON.stringify(response.data));
            })
            .catch(error => {
                alert("고양이를 생성해 주세요! 로그아웃 합니다.");
                localStorage.clear();
                window.location.replace("/");
            });
    }, []);

    const deleteCat = () => {

        console.log(selectedCat);

        const deleteCatData = {
            "catSeq" : selectedCat,
            "memberId" : localStorage.getItem("memberId")
        };


        axios.delete('/cat', {data : deleteCatData})
            .then((response) => {
                if (response.data === 1) {
                    alert("고양이가 삭제되었어요 ㅠㅠ");
                    window.location.reload();
                }else {
                    alert("고양이 삭제실패");
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.log(error);
            });

    };

    function handleChange(event) {
        const index = catList.findIndex(cat => parseInt(cat.catSeq) === parseInt(event.target.value));
        setSelectedCat(event.target.value);
        setSelectedImg(catList[index].catImg);
    }

    return (
        <div>
            <header style={headerStyle}>
                <Link style={styleStart} to="/">{window.localStorage.getItem("memberName")} 님 환영합니다!</Link>
                <Logout/>
                <select value={selectedCat} onChange={handleChange}>
                    {catList.map(cat => (
                        <option key={cat.catSeq} value={cat.catSeq}>{cat.catName}</option>
                    ))}
                </select>
                <Link style={styleOption} to="/choice">고양이 추가</Link>
                <a style={styleOption} onClick={deleteCat}>고양이 삭제</a>
                <Link style={styleOption} to="/">환경설정</Link>
                <Link style={styleOption} to="/">캡처</Link>
            </header>
            <motion.div style={navStyle} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ duration: 1 }}>
                <Link style={navBtnStyle} to="/records"><img src={lBtn}/></Link><br/><br/>
            </motion.div>
            <img style={componentStyle} src={imgList[imgNum - 1]} alt={'motion' + imgNum} />
        </div>
    );
}