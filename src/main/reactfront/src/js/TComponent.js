import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Logout from "./Logout";
import axios from "axios";
import moment from "./Records";

function TComponent() {

    const componentStyle = {
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

    const [cats, setCats] = useState([]);
    const [selectedValue, setSelectedValue] = useState(localStorage.getItem('currentCatImg') || '');

    useEffect(() => {

        axios.post('/catLists', { memberId: localStorage.getItem('memberId')})
            .then(response => {
                setCats(response.data);
                localStorage.setItem('currentCatImg', response.data[0].catImg);
                localStorage.setItem('currentCatName', response.data[0].catName);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const SelectCat = () => {
        let catNameControl = cats;
        //catNameControl = JSON.parse(catNameControl);

        let arr = [];
        if (catNameControl.length > 0) {
            for(let i = 0; i < catNameControl.length; i++) {
                arr.push(
                    <option key={i} value={i}>{catNameControl[i].catName}</option>
                );
            }
        }

        return arr;
    };

    const onChangeHandler = (e) => {
        let currentSeq = e.target.selectedOptions.item(0).index;
        let currentCatImg = cats[parseInt(currentSeq)].catImg;  // img ????????? ????????????
        let currentCatName = cats[parseInt(currentSeq)].catName;  // ????????? ?????? ????????????

        localStorage.setItem('currentCatImg', currentCatImg);
        localStorage.setItem('currentCatName', currentCatName);
        //window.location.reload();
    };

    return (
        <header style={componentStyle}>
            <Link style={styleStart} to="/">{window.localStorage.getItem("memberName")} ??? ???????????????!</Link>
            <Logout/>
            <select onChange={onChangeHandler}>
                <SelectCat/>
            </select>
            <Link style={styleOption} to="/choice">????????? ??????</Link>
            <Link style={styleOption} to="/">????????????</Link>
            <Link style={styleOption} to="/">??????</Link>
        </header>
    );
}

export default TComponent;
