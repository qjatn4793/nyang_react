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

import React, { useState, useEffect } from "react";

function Component(props) {

    const componentStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        width:"55vw",
        height:"69vh",
    };

    //const [selectedValue, setSelectedValue] = useState(localStorage.getItem('selectedValue') || '');

    let currentCatImg = localStorage.getItem('currentCatImg');
    console.log(currentCatImg);

    if (props.component === 1 || currentCatImg === "1") {
        return <img style={componentStyle} src={img1} alt={1}/>;
    }else if (props.component === 2 || currentCatImg === "2"){
        return <img style={componentStyle} src={img2} alt={1}/>;
    }else if (props.component === 3 || currentCatImg === "3"){
        return <img style={componentStyle} src={img3} alt={1}/>;
    }else if (props.component === 4 || currentCatImg === "4"){
        return <img style={componentStyle} src={img4} alt={1}/>;
    }else if (props.component === 5 || currentCatImg === "5"){
        return <img style={componentStyle} src={img5} alt={1}/>;
    }else if (props.component === 6 || currentCatImg === "6"){
        return <img style={componentStyle} src={img6} alt={1}/>;
    }else if (props.component === 7 || currentCatImg === "7"){
        return <img style={componentStyle} src={img7} alt={1}/>;
    }else if (props.component === 8 || currentCatImg === "8"){
        return <img style={componentStyle} src={img8} alt={1}/>;
    }else if (props.component === 9 || currentCatImg === "9"){
        return <img style={componentStyle} src={img9} alt={1}/>;
    }else if (props.component === 10 || currentCatImg === "10"){
        return <img style={componentStyle} src={img10} alt={1}/>;
    }else if (props.component === 11 || currentCatImg === "11"){
        return <img style={componentStyle} src={img11} alt={1}/>;
    }else if (props.component === 12 || currentCatImg === "12"){
        return <img style={componentStyle} src={img12} alt={1}/>;
    }else if (props.component === 13 || currentCatImg === "13"){
        return <img style={componentStyle} src={img13} alt={1}/>;
    }else if (props.component === 14 || currentCatImg === "14"){
        return <img style={componentStyle} src={img14} alt={1}/>;
    }else if (props.component === 15 || currentCatImg === "15"){
        return <img style={componentStyle} src={img15} alt={1}/>;
    }else {
        return <p>잘못된 접근 입니다.</p>;
    }

    /*if (props.component === 1) {
        return <img style={componentStyle} src={img1} alt={1}/>;
    }else if (props.component === 2){
        return <img style={componentStyle} src={img2} alt={1}/>;
    }else if (props.component === 3){
        return <img style={componentStyle} src={img3} alt={1}/>;
    }else if (props.component === 4){
        return <img style={componentStyle} src={img4} alt={1}/>;
    }else if (props.component === 5){
        return <img style={componentStyle} src={img5} alt={1}/>;
    }else if (props.component === 6){
        return <img style={componentStyle} src={img6} alt={1}/>;
    }else if (props.component === 7){
        return <img style={componentStyle} src={img7} alt={1}/>;
    }else if (props.component === 8){
        return <img style={componentStyle} src={img8} alt={1}/>;
    }else if (props.component === 9){
        return <img style={componentStyle} src={img9} alt={1}/>;
    }else if (props.component === 10){
        return <img style={componentStyle} src={img10} alt={1}/>;
    }else if (props.component === 11){
        return <img style={componentStyle} src={img11} alt={1}/>;
    }else if (props.component === 12){
        return <img style={componentStyle} src={img12} alt={1}/>;
    }else if (props.component === 13){
        return <img style={componentStyle} src={img13} alt={1}/>;
    }else if (props.component === 14){
        return <img style={componentStyle} src={img14} alt={1}/>;
    }else if (props.component === 15){
        return <img style={componentStyle} src={img15} alt={1}/>;
    }else {
        return <p>잘못된 접근 입니다.</p>;
    }*/
}

export default Component;
