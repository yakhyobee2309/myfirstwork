import React from 'react';
import "../styles/Body.css"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
import img6 from "../images/img6.png"
import img7 from "../images/img7.png"
import img8 from "../images/img8.png"
import img9 from "../images/img9.png"
import img10 from "../images/img10.png"
import img11 from "../images/img11.png"
import img13 from "../images/img13.png"
import img14 from "../images/img14.png"
import n1 from "../images/1.jpg"
import n2 from "../images/2.jpg"
import n3 from "../images/3.jpg"
import n4 from "../images/4.jpg"
import n5 from "../images/5.jpg"
import n6 from "../images/6.jpg"
import n7 from "../images/7.jpg"
import n8 from "../images/8.jpg"
import n9 from "../images/8.jpg"
import swg1 from "../images/swg1.svg"
import swg3 from "../images/swg3.svg"
import {AiOutlineUser, AiOutlineHeart, AiOutlineSearch} from "react-icons/ai"




function Body() {
    return (
        <div className="Body">
            <div class="searchBar">
                <div class="container">
                    <div class="search">
                        <AiOutlineSearch class="fa-search"/>
                        <input type="text" placeholder="760 234 e'lonlar yoningizda" />
                    </div>
                    <div class="location">
                        <input type="text" placeholder="Butun O`zbekiston"class="loc-btn" />
                        <i class="fal fa-map-marker-alt"></i>
                        
                    </div>
                    <div class="searchBtn">
                        <button class="btn-search">Qidiruv<AiOutlineSearch class="fa-search"/></button>
                    </div>
                </div>
            </div>

            <div class="main-category">
                <div class="container">
                    <h1>Bosh toifalar</h1>
                    <div class="categorys">
                        <div class="category">
                            <div class="icon">
                                <img src={img1} alt=""/>
                            </div>
                            <h3>Bolalar dunyosi</h3>
                        </div>
                        <div class="category">
                            <div class="icon">
                                <img src={img2} alt=""/>
                            </div>
                            <h3>Kochmas mulk</h3>
                        </div>
                        <div class="category">
                            <div class="icon">
                                <img src={img3} alt=""/>
                            </div>
                            <h3>Transport</h3>
                        </div>
                        <div class="category">
                            <div class="icon">
                                <img src={img4} alt=""/>
                            </div>
                            <h3>Ish</h3>
                        </div>
                        <div class="category">
                            <div class="icon">
                                <img src={img5} alt=""/>
                            </div>
                            <h3>Hayvonlar</h3>
                        </div>
                        <div class="category">
                            <div class="icon">
                                <img src={img6} alt=""/>

                            </div>
                            <h3>Uy va bog`</h3>
                        </div>
                        <div class="category">
                            <div class="icon">
                                <img src={img7} alt=""/>
                            </div>
                            <h3>Electr zanjiri</h3>
                        </div>
                    <div class="category">
                        <div class="icon">
                            <img src={img8} alt=""/>

                        </div>
                        <h3>Xizmatlar</h3>
                    </div>
                    <div class="category">
                        <div class="icon">
                            <img src={img9} alt=""/>

                        </div>
                        <h3>Moda va still</h3>
                    </div>
                    <div class="category">
                        <div class="icon">
                            <img src={img10} alt=""/>

                        </div>
                        <h3>Xobbi va dam olish Sport</h3>
                    </div>
                    <div class="category">
                        <div class="icon">
                            <img src={img11} alt=""/>

                        </div>
                        <h3>Tekinga beraman</h3>
                    </div>
                    <div class="category">
                        <div class="icon">
                            <img src={img13} alt=""/>

                        </div>
                        <h3>Ayirboshlash</h3>
                    </div>
                    <div class="category">
                        <div class="icon">
                            <img src={img14} alt=""/>
                        </div>
                            <h3>OLx ga murojat</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main">
        <div class="container">
            <h1>PREMIUM E`LONLAR</h1>
            <div class="main-card">
                <div class="card">
                    <div class="card-img">
                        <img src={n1} alt=""/>
                    </div>
                    <div class="card-paragraph">
                        <h4>Замонавий ун тегирмон сотамиз, Туркия, GENÇ</h4>
                        <h5>Ташкент, Алмазарский район 15 авг.</h5>
                        <div class="text">
                            <h3>1.500 000 so`m</h3>
                            <button class="btnHeart">
                                <AiOutlineHeart class="fa-heart"/>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img">
                        <img src={n2} alt=""/>
                    </div>
                    <div class="card-paragraph">
                        <h4>Замонавий ун тегирмон сотамиз, Туркия, GENÇ</h4>
                        <h5>Ташкент, Алмазарский район 15 авг.</h5>
                        <div class="text">
                            <h3>1.500 000 so`m</h3>
                            <button class="btnHeart">
                                <AiOutlineHeart class="fa-heart"/>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img">
                        <img src={n3} alt=""/>
                    </div>
                    <div class="card-paragraph">
                        <h4>Замонавий ун тегирмон сотамиз, Туркия, GENÇ</h4>
                        <h5>Ташкент, Алмазарский район 15 авг.</h5>
                        <div class="text">
                            <h3>1.500 000 so`m</h3>
                            <button class="btnHeart">
                                <AiOutlineHeart class="fa-heart"/>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img">
                        <img src={n4} alt=""/>
                    </div>
                    <div class="card-paragraph">
                        <h4>Замонавий ун тегирмон сотамиз, Туркия, GENÇ</h4>
                        <h5>Ташкент, Алмазарский район 15 авг.</h5>
                        <div class="text">
                            <h3>1.500 000 so`m</h3>
                            <button class="btnHeart">
                                <AiOutlineHeart class="fa-heart"/>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img">
                        <img src={n5} alt=""/>
                    </div>
                    <div class="card-paragraph">
                        <h4>Замонавий ун тегирмон сотамиз, Туркия, GENÇ</h4>
                        <h5>Ташкент, Алмазарский район 15 авг.</h5>
                        <div class="text">
                            <h3>1.500 000 so`m</h3>
                            <button class="btnHeart">
                                <AiOutlineHeart class="fa-heart"/>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img">
                        <img src={n6} alt=""/>
                    </div>
                    <div class="card-paragraph">
                        <h4>Замонавий ун тегирмон сотамиз, Туркия, GENÇ</h4>
                        <h5>Ташкент, Алмазарский район 15 авг.</h5>
                        <div class="text">
                            <h3>1.500 000 so`m</h3>
                            <button class="btnHeart">
                                <button class="btnHeart">
                                    <AiOutlineHeart class="fa-heart"/>
                                </button>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img">
                        <img src={n7} alt=""/>
                    </div>
                    <div class="card-paragraph">
                        <h4>Замонавий ун тегирмон сотамиз, Туркия, GENÇ</h4>
                        <h5>Ташкент, Алмазарский район 15 авг.</h5>
                        <div class="text">
                            <h3>1.500 000 so`m</h3>
                            <button class="btnHeart">
                                <button class="btnHeart">
                                    <AiOutlineHeart class="fa-heart"/>
                                </button>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img">
                        <img src={n8} alt=""/>
                    </div>
                    <div class="card-paragraph">
                        <h4>Замонавий ун тегирмон сотамиз, Туркия, GENÇ</h4>
                        <h5>Ташкент, Алмазарский район 15 авг.</h5>
                        <div class="text">
                            <h3>1.500 000 so`m</h3>
                            <button class="btnHeart">
                                <button class="btnHeart">
                                    <AiOutlineHeart class="fa-heart"/>
                                </button>
                            </button>
                        </div>
                    </div>
                </div>

                    <div class="card">
                        <div class="card-img">
                            <img src={n9} alt=""/>
                        </div>
                        <div class="card-paragraph">
                            <h4>Замонавий ун тегирмон сотамиз, Туркия, GENÇ</h4>
                            <h5>Ташкент, Алмазарский район 15 авг.</h5>
                            <div class="text">
                                <h3>1.500 000 so`m</h3>
                                <button class="btnHeart">
                                    <AiOutlineHeart class="fa-heart"/>
                                </button>
                            </div>
                        </div>
                    </div>
                 </div>
                    <button class="see-All">Hammasini Ko`rish</button>
                </div>
            </div>
            <section class="your-Business">
                <div class="container">
                    <div class="business">
                        <div class="image-business">
                            <img src={swg1}alt=""/>
                        </div>
                        <div class="text-business">
                            <h1>OLX bilan Internetda o`z biznesingizni boshlang!</h1>
                        </div>
                        <div class="btn-business">
                            <button class="detail">Batafsil</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="olx">
        <div class="container">
            <h1>o l x</h1>
            <p>Oʻzbekistonda 1-raqamli eʼlonlar servisi
                Oʻzbekiston xususiy eʼlonlari OLX (avvalgi torg.uz) – bu yerda izlaganingizni topasiz.
                "Eʼlon joylashtirish" tugmasiga bosib, siz istalgan mavzuga oid onlayn-eʼlonni joylashtira olasiz – ish
                qidirish, xizmat koʻrsatish, avtomobillar, koʻchmas mulk, elektronika va boshqalar savdosi.
                OLX Oʻzbekiston servisi yordamida siz deyarli barcha istagan narsangizni sotish yoki sotib olishingiz
                mumkin. Qidiruv funksiyasidan foydalanib, oʻzingizni qiziqtirgan mavzuga oid sersisda mavjud eʼlonlarni
                hech bir qiyinchiliksiz topa olasiz.
                OLX Oʻzbekiston – sizning ishonchli va tengi yoʻq yordamchingiz.</p>
        </div>
    </section>
    <section class="service">
        <div class="container">
            <img src={swg3} alt=""/>
            <h1>OLX servisining boʻlimlari: <span>Bolalar dunyosi, Ko'chmas mulk, Transport, Ish, Hayvonlar, Uy va bog',
                Elektr jihozlari, Xizmatlar, Moda va stil, Xobbi, dam olish sport, Tekinga beraman, Ayirboshlash</span> </h1>
        </div>
    </section>
        </div>
    )
}

export default Body;
