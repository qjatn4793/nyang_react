import React from 'react';
import '../css/Modal.css';

const MiniModal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close } = props;

    const footerStyle = {
        textAlign: 'center'
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
                    <footer style={footerStyle}>
                        <button className="submit" onClick={close}>
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

export default MiniModal;