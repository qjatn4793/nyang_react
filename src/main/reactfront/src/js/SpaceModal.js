import React from 'react';
import '../css/Modal.css';
import InputText from "./InputText";
import { useNavigate } from 'react-router-dom';

const SpaceModal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, id, img } = props;

    const navigate = useNavigate();

    const goToNext = () => {
        navigate("/Contents", {state:{id, img}});
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
                        <button className="submit" onClick={close}>
                            네
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default SpaceModal;