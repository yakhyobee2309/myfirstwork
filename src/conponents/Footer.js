import React from 'react'
import "../styles/Footer.css"
import swg2 from "../images/swg2.svg"
import swg4 from "../images/swg4.svg"

function Footer() {
    return (
        <div className="Footer">
            <footer >
        <div class="container">
            <div class="footer">
                <div class="box-1">
                    <ul>
                        <li><a href="#">Mobil ilovalar</a></li>
                        <li><a href="#">Yordam</a></li>
                        <li><a href="#">Pullik xizmatlar</a></li>
                        <li><a href="#">OLX-da biznes</a></li>
                        <li><a href="#">Saytda reklama</a></li>
                        <li><a href="#">Foydalanish shartlari</a></li>
                        <li><a href="#">Maxfiylik siyosati</a></li>
                        <li><a href="#">Hamkorlar</a></li>
                    </ul>
                </div>
                <div class="box-2">
                    <ul>
                        <li><a href="#">Qanday sotib olish va sotish?</a></li>
                        <li><a href="#">Xavfsizlik qoidalari</a></li>
                        <li><a href="#">Sayt xaritasi</a></li>
                        <li><a href="#">Mintaqalar xaritasi</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Teskari aloqa</a></li>
                    </ul>
                </div>
                <div class="box-3">
                    <a href="#"><img src={swg2}alt="" class="playMarket"/></a>
                    <a href="#"><img src={swg4} alt="" class="appStore"/></a>
                    <h6 class="hide">Telefoningiz uchun bepul ilova</h6>
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}

export default Footer
