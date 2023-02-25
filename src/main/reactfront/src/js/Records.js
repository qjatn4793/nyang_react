import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../css/Records.css'
import { motion } from "framer-motion";
import moment from "moment";
import CalModal from './CalModal';
import DeleteModal from './DeleteModal';
import MiniModal from './MiniModal';
import ViewModal from './ViewModal';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";


export default function Records() {

    const calStyle = {
        width: '100vw',
        height: '100vh',
    };

    const mainCalStyle = {
        marginTop: '20%',
        '@media (minWidth: 800px)': {
            width: '50%',
            marginLeft: '25%',
        }
    };

    const titleStyle = {
        textAlign: 'center',
        fontSize: 'xxx-large'
    };

    const [catList, setCatList] = useState([]);
    const [viewList, setViewList] = useState([]);

    useEffect(() => {
        const localStorageArray = JSON.parse(localStorage.getItem("catList")) || [];
        setCatList(localStorageArray);
    }, []);

    const [selectedCat, setSelectedCat] = useState('');

    function handleChange(event) {
        setSelectedCat(event.target.value);
    }

    const [value, onChange] = useState(new Date());
    const [value2, onChange2] = useState(new Date());
    const [modalOpen, setModalOpen] = useState(false);
    const [modalViewOpen, setModalViewOpen] = useState(false);
    const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
    const [miniModalOpen, setMiniModalOpen] = useState(false);
    const [inputs, setInputs] = useState({
        purpose: '',
        records:'',
    });

    const [marks, setMarks] = useState([]);

    const {purpose, records} = inputs;

    const onChangeInputText = (e) => {
        const {name, value} = e.target;
        const nextInputs = {
            ...inputs,
            [name]: value, //e.target의 name과 value이다.
        };

        setInputs(nextInputs)
    };

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const openViewModal = () => {
        setModalViewOpen(true);
    };
    const closeViewModal = () => {
        setModalViewOpen(false);
    };
    const openModalDelete = () => {
        setModalDeleteOpen(true);
    };
    const closeModalDelete = () => {
        setModalDeleteOpen(false);
    };
    const openMiniModal = () => {
        setMiniModalOpen(true);
    };
    const closeMiniModal = () => {
        setMiniModalOpen(false);
    };

    if (selectedCat === '') {
        setSelectedCat(JSON.parse(localStorage.getItem("catList"))[0].catName);
    }

    const recordsData = {
        memberId:localStorage.getItem('memberId'),
        catName:selectedCat,
        purpose:purpose,
        records:records,
        choiceDate:moment(value).format("DD-MM-YYYY")/*,
        visitDate:moment(value2).format("DD-MM-YYYY")*/
    };

    const viewRecords = () => {
        for(let i=0; i < marks.length; i++) {
            if ((moment(value).format("DD-MM-YYYY") === marks[i])){
                setModalViewOpen(true);
            }
        }

        axios.get("/records",
            {params : recordsData})
            .then( function(response) {
                setViewList(response.data);

                if(response.data === "") {
                    alert("등록된 일정이 없습니다.");
                }
            })
            .catch(function(error){
                console.log(error);
            });


    };

    const createRecords = () => {
        let dupCheck;

        for(let i=0; i < marks.length; i++) {
            if ((moment(value).format("DD-MM-YYYY") === marks[i])){
                dupCheck = true;
            }
        }

        if (dupCheck === true) {
            alert("이미 일정이 등록되어 있습니다.");
        }else {
            axios.post("/records",recordsData)
                .then( function(response) {
                    console.log(response);
                    alert("일정이 등록 되었습니다.");
                    window.location.reload();
                })
                .catch(function(error){
                    console.log(error);
                    alert("일정이 등록되지 않았습니다.");
                });

            setModalOpen(false);
        }

    };

    /*const updateRecords = () => {

        axios.put("/records",recordsData)
            .then( function(response) {
                console.log(response);
                alert("일정이 수정 되었습니다.");
            })
            .catch(function(error){
                console.log(error);
                alert("일정이 수정되지 않았습니다.");
            });

        setModalOpen(false);
    };*/

    const deleteRecords = () => {

        axios.delete("/records",
            {params : recordsData})
            .then( function(response) {
                alert("일정이 삭제 되었습니다.");
                window.location.reload();
            })
            .catch(function(error){
                console.log(error);
                alert("일정이 삭제되지 않았습니다.");
            });

        setModalDeleteOpen(false);
    };

    const footerStyle = {
        textAlign: 'center'
    };

    const textStyle = {
        width: "100%",
        height: "250px",
        resize: "none"
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



    useEffect(() => {
        axios.post("/recordsList", {memberId : localStorage.getItem('memberId')})
            .then(function(response) {
                setMarks(response.data);
        })
        .catch(function(error){
            console.log(error);
            alert("알 수 없는 오류");
            localStorage.clear();
            navigate("/");
        });
    }, []);

    const navigate = useNavigate();

    const goToPrev = () => {
        navigate("/contents");
    };

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ duration: 1 }}>
            <h1 style={titleStyle}>나의 냥냥일지</h1>
            <Calendar style={mainCalStyle} onChange={onChange} value={value}
              tileClassName={({ date, view }) => {
                if (marks.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
                    return "highlight";
                }
              }}
            />
            <button style={styleStart} onClick={viewRecords}>
                일정 확인하기
            </button>
            <button style={styleStart} onClick={openModal}>
                일정 추가하기
            </button>
            <button style={styleStart} onClick={openModalDelete}>
                일정 삭제하기
            </button>
            <button style={styleStart} onClick={goToPrev}>
                뒤로 가기
            </button>

            {/*일정 확인하기 모달*/}
            <ViewModal open={modalViewOpen} close={closeViewModal}>
                <main>
                    사용자 이름 : <input value={viewList.memberId} readOnly={true}/>
                    <br/>
                    고양이 이름 : <input value={viewList.catName} readOnly={true}/>
                    <br/>
                    방문 날짜 : <input value={moment(value).format("YYYY년 MM월 DD일")} readOnly={true}/>
                    <br/>
                    방문 목적 : <input value={viewList.purpose} readOnly={true}/>
                    <br/>
                    진료 기록
                    <textarea style={textStyle} value={viewList.records} readOnly={true}/>
                    {/*주의 사항 : <input/>
                    <br/>
                    다음 내원일 : <input onClick={openMiniModal} readOnly value={moment(value2).format("YYYY년 MM월 DD일")}/>*/}
                </main>
                <footer style={footerStyle}>
                    {/*<button className="submit" onClick={updateRecords}>
                        일정 수정하기
                    </button>*/}
                    <button className="close" onClick={closeViewModal}>
                        확인
                    </button>
                </footer>
            </ViewModal>
            {/*일정 추가하기 모달*/}
            <CalModal open={modalOpen} close={closeModal}>
                <main>
                    사용자 이름 : <input value={window.localStorage.getItem('memberId')} readOnly={true}/>
                    <br/>
                    고양이 이름 :
                    <select onChange={handleChange}>
                        {catList.map(cat => (
                            <option key={cat.catSeq} value={cat.catName}>{cat.catName}</option>
                        ))}
                    </select>
                    <br/>
                    선택 날짜 : <input readOnly value={moment(value).format("YYYY년 MM월 DD일")}/>
                    <br/>
                    방문 목적 : <input name="purpose" onChange={onChangeInputText}/>
                    <br/>
                    진료 기록
                    <textarea style={textStyle} name="records" onChange={onChangeInputText}/>
                    {/*주의 사항 : <input/>
                    <br/>
                    다음 내원일 : <input onClick={openMiniModal} readOnly value={moment(value2).format("YYYY년 MM월 DD일")}/>*/}
                </main>
                <footer style={footerStyle}>
                    <button className="submit" onClick={createRecords}>
                        저장
                    </button>
                    <button className="close" onClick={closeModal}>
                        취소
                    </button>
                </footer>
            </CalModal>
            {/*일정 추가하기 > 다음내원일 모달*/}
            <MiniModal open={miniModalOpen} close={closeMiniModal}>
                <Calendar style={calStyle} onChange={onChange2} value={value2}/>
            </MiniModal>
            {/*일정 삭제하기 모달*/}
            <DeleteModal open={modalDeleteOpen} close={closeModalDelete} date={moment(value).format("YYYY년 MM월 DD일")}>
                <footer style={footerStyle}>
                    <button className="submit" onClick={deleteRecords}>
                        네
                    </button>
                    <button className="close" onClick={closeModalDelete}>
                        아니오
                    </button>
                </footer>
            </DeleteModal>

        </motion.div>
    );
}
