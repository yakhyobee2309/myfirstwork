import React from 'react'
import "../styles/Header.css"
import {AiOutlineUser, AiOutlineHeart} from "react-icons/ai"
import {RiMenu3Line} from "react-icons/ri"
function Header() {
    return (
        <div className="Footer">
             <header>
                <div class="container">
                    <div class="navbar">
                        <div class="logo">
                            <h1>O</h1>
                            <h1>l</h1>
                            <h1>x</h1>
                        </div>
                        <div class="navbar-nav">
                            <h3>O`z</h3>
                            <h3>Py</h3>
                            <AiOutlineHeart class="heart-icon"/>
                            <div class="myContact">
                                <a href="#">
                                    <AiOutlineUser  className="user-icon"/>
                                    <h2>Mening Profilim</h2>
                                </a>
                            </div>
                            <button class="btn-send">E'lon yuborish</button>
                        </div>
                        <RiMenu3Line class="menu-icon"/>
                    </div>
                </div>
            </header>            
        </div>
    )
}

export default Header;
