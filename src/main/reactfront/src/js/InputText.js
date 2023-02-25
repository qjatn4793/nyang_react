import React, { useState } from 'react'; //Hooks를 통한 useState불러오기
import Modal from './Modal';
import SpaceModal from './SpaceModal';

function InputText() {
    //스타일처리
    const style = {
        width: "300px",
        padding: '10px',
        margin: 'auto',
        /*border: '1px solid black'*/
    };

    const styleStart = {
        color:"white",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 100,
        borderStyle: 'solid',
        textDecoration: 'none',
        backgroundColor: "black",
        marginLeft: "10px"
    };

    //useState() - 값이 변화되는 것을 저장
    const [catId, setCatId] = useState(''); //처음 기본값 비우기
    const [catImg, setCatImg] = useState(''); //처음 기본값 비우기

    //state값이 변화되는 함수 - input에 쓴 값으로 바뀜
    const onTextChange = (e) => {
        //e : 이벤트 객체
        setCatId(e.target.value); //이벤트를 받는 타겟의 value값으로 변경
    };

    const [modalOpen, setModalOpen] = useState(false);
    const [spaceModalOpen, setSpaceModalOpen] = useState(false);

    const openModal = () => {

        console.log({catId});

        if({catId}.catId === '' || {catId}.catId === ' '){
            setSpaceModalOpen(true);
        }else {
            let index = parseInt(document.getElementsByClassName('slick-current')[0].getAttribute("data-index"));
            setCatImg(index + 1);

            setModalOpen(true);
        }

    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const closeSpaceModal = () => {
        setSpaceModalOpen(false);
    };

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            openModal();
        }
    };

    return (
        <div style={ style }>
            고양이 이름 : <input type="text" onKeyPress={onKeyPress} onChange={onTextChange} value={catId}/>
            <button style={ styleStart } onClick={openModal}>
                확인
            </button>
            <Modal open={modalOpen} close={closeModal} catId={ catId } catImg={ catImg }>
                <main> { catId } </main>으로 시작하시겠어요?
            </Modal>
            <SpaceModal open={spaceModalOpen} close={closeSpaceModal}>
                <main> 앗! 아직 이름을 입력하지 않았어요! </main>
            </SpaceModal>
        </div>
    );
}

export default InputText;