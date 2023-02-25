import React from 'react';
import '../css/Modal.css';

const DeleteModal = (props) => {
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
                    <main>
                        {props.date} 에 지정된 일정을 삭제하시겠습니까?
                    </main>
                    {props.children}
                </section>
            ) : null}
        </div>
    );
};

export default DeleteModal;