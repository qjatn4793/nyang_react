import React, { useEffect } from 'react';
import '../css/Modal.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Navigation from "react-calendar/dist/esm/Calendar/Navigation";
import Logout from "./Logout";

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, catId, catImg } = props;

    const navigate = useNavigate();

    const memberId = window.localStorage.getItem("memberId");

    const goToNext = () => {

        const catName = {
            "catName" : catId,
            "catImg" : catImg,
            "memberId" : memberId
        };

        axios
            .post('/cat', catName)
            .then((response) => {
                if (response.data === 1) {
                    alert("고양이 생성!");
                }else {
                    alert("고양이 생성실패");
                    localStorage.clear();
                    navigate("/");
                }
            })
            .catch((error) => {
                console.log(error);
            });

        /*let get_catName = sessionStorage.getItem("catName");

        if (get_catName == null) {
            get_catName = [];
        } else {
            get_catName = JSON.parse(get_catName);
        }*/

        /*get_catName = get_catName.concat(catName);
        get_catName = new Set(get_catName);
        get_catName = [...get_catName];

        sessionStorage.setItem("catName", JSON.stringify(get_catName));*/

        navigate("/Contents", {state:{catId, catImg}});
    };

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button className="submit" onClick={goToNext}>
                            네
                        </button>
                        <button className="close" onClick={close}>
                            아니오
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default Modal;