import React from 'react';
import KakaoLogin from 'react-kakao-login';

const KakaoLoginButton = () => {

    const responseKakao = (response) => {
        console.log(response);
        // 로그인 성공 시 실행될 코드
    };

    const responseFailKakao = (error) => {
        console.log(error);
        // 로그인 실패 시 실행될 코드
    };

    return (
        <KakaoLogin
            token="lwzu5A7nN6eHl5V28CmBmR3Rr73KBW2l" // 발급받은 클라이언트 아이디
            onSuccess={responseKakao}
            onFailure={responseFailKakao}
            render={(props) => (
                <button onClick={props.onClick}>카카오 계정으로 로그인</button>
            )}
        />
    );
};

export default KakaoLoginButton;