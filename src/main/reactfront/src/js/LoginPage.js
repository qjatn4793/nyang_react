import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPopup, setShowPopup] = useState(false);

    const formStyle = {
        textAlign: "center",
        marginTop: "15%",
        border: "solid 1px",
        width: "300px",
        marginLeft: "43%"
    };

    const btnStyle = {
        color:"white",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 100,
        borderStyle: 'solid',
        textDecoration: 'none',
        backgroundColor: "black",
    };

    const onSubmit = (data) => {
        axios
            .post('/login', data)
            .then((response) => {

                console.log(response);

                if (response.data === '') {
                    alert("id 또는 pw를 확인해주세요");
                    window.location.replace("/login");
                }else {
                    alert("로그인 성공");
                    localStorage.setItem("memberId", response.data.memberId);
                    localStorage.setItem("memberName", response.data.memberName);
                    // 로그인 성공 시
                    setShowPopup(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const handleExistingCat = () => {
        // 기존 고양이 보기 클릭 시 /contents 경로로 이동
        window.location.href = "/contents";
    };

    const handleNewCat = () => {
        // 신규 고양이 추가 클릭 시 /choice 경로로 이동
        window.location.href = "/choice";
    };

    return (
        <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
            <h1>나의 냥냥일지</h1>
            <div>
                <input type="text" placeholder="아이디" {...register("memberId", { required: true })} />
                {errors.memberId && <span>아이디를 입력하세요.</span>}
            </div>
            <div>
                <input type="password" placeholder="비밀번호" {...register("memberPw", { required: true })} />
                {errors.memberPw && <span>비밀번호를 입력하세요.</span>}
            </div>
            <button style={btnStyle} type="submit">로그인</button>

            {showPopup && (
                <div>
                    <p>{window.localStorage.getItem("memberName")}님 로그인 되었습니다.</p>
                    <button style={btnStyle} onClick={handleExistingCat}>기존 고양이 보기</button>
                    <button style={btnStyle} onClick={handleNewCat}>신규 고양이 추가</button>
                </div>
            )}
        </form>
    );
}

export default LoginPage;