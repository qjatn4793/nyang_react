import React, {Component} from "react";
import Slider from "react-slick";
import "../css/slick.css";
import "../css/slick-theme.css";

import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';
import img7 from '../img/7.png';
import img8 from '../img/8.png';
import img9 from '../img/9.png';
import img10 from '../img/10.png';
import img11 from '../img/11.png';
import img12 from '../img/12.png';
import img13 from '../img/13.png';
import img14 from '../img/14.png';
import img15 from '../img/15.png';

export default class SimpleSlider extends Component {
    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: "0px",
            centerMode: true,
            slickCurrentSlide: 1,
            className: "center",

            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };

        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <h1>선택!</h1>
                        <img src={img1} alt={1}/>
                        <h2>흰냥</h2>
                        <p>온통 하얀색의 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img2} alt={1}/>
                        <h2>하얀 삼색냥</h2>
                        <p>흰 털이 많은 삼색 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img3} alt={1}/>
                        <h2>검은 삼색냥</h2>
                        <p>잘 보아야 삼색 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img4} alt={1}/>
                        <h2>완전 치즈냥</h2>
                        <p>멀리서 보면 치즈같은 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img5} alt={1}/>
                        <h2>흰턱 치즈냥</h2>
                        <p>턱이 하얀 치즈 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img6} alt={1}/>
                        <h2>앞머리만 치즈냥</h2>
                        <p>앞머리만 노란 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img7} alt={1}/>
                        <h2>턱시도냥</h2>
                        <p>점잖은 복장의 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img8} alt={1}/>
                        <h2>가면쓴 턱시도냥</h2>
                        <p>검은 가면을 쓴 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img9} alt={1}/>
                        <h2>카오스냥</h2>
                        <p>패셔니스트 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img10} alt={1}/>
                        <h2>검은냥</h2>
                        <p>밤에 보이지 않는 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img11} alt={1}/>
                        <h2>회색 무늬냥</h2>
                        <p>회색 호랑이 무늬 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img12} alt={1}/>
                        <h2>갈색 무늬냥</h2>
                        <p>갈색 호랑이 무늬 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img13} alt={1}/>
                        <h2>흰 장모냥</h2>
                        <p>부숭한 흰 털의 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img14} alt={1}/>
                        <h2>회색 장모냥</h2>
                        <p>부숭한 회색 털의 고양이다.</p>
                    </div>
                    <div>
                        <h1>선택!</h1>
                        <img src={img15} alt={1}/>
                        <h2>검은 장모냥</h2>
                        <p>부숭한 검은 털의 고양이다.</p>
                    </div>
                </Slider>
            </div>
        );
    }
}