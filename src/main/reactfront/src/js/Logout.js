import {Link, useNavigate} from "react-router-dom";
import React from "react";


const Logout = () => {

    const styleStart = {
        color:"white",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 100,
        borderStyle: 'solid',
        textDecoration: 'none',
        backgroundColor: "black",
    };

    const navigate = useNavigate();

    const logout = async () => {
        /*try {
            // Kakao SDK API를 이용해 사용자 정보 획득
            let data = await window.Kakao.API.request({
                url: "/v1/user/unlink",
            });
            sessionStorage.removeItem('nickName');
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('catName');
            sessionStorage.removeItem('currentCatImg');
            sessionStorage.removeItem('currentCatSeq');



            alert("로그아웃 성공");
            navigate("/");
        } catch (err) {
            alert(err);
            console.log(err);
        }*/
        try {
            localStorage.clear();
            alert("로그아웃 성공");
            navigate("/");
        }catch (err) {
            alert("알 수 없는 에러");
            console.log(err);
        }
    };

    return(
        <Link style={styleStart} onClick={logout} to="/">메인으로 가기</Link>
    );
};

export default Logout;