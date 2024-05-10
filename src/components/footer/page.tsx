import React from "react";
import Styled from "./Footer.module.css";
import { Aclonica } from "next/font/google";

// import AppleIcon from './Footer Soical Medias/social.png'
// import PlayMarket from  './Footer Soical Medias/google-play.png'
// import FaceBook from './Footer Soical Medias/facebook.png'
// import Instagram from './Footer Soical Medias/instagram.png'
// import Youtube from './Footer Soical Medias/youtube.png'

export default function Footer() {
	return (
		<footer className={Styled.footer}>
			<section className={Styled.Section}>
				<div className={Styled.About}>
					<h3 className={Styled.h3}>Biz Haqimizda</h3>

					<a href="Topshirish punktlari" className={Styled.a}>
						Topshirish punktlari lorem2562
					</a>
					<a href="Vakansiyalar" className={Styled.a}>
						Vakansiyalar
					</a>
				</div>

				<div className={Styled.Users}>
					<h3>Foydalanuvchilarga</h3>

					<a href="Biz bilan boglanish" className={Styled.a}>
						Biz Bilan Bog'lanish
					</a>
					<a href="Savol Javob" className={Styled.a}>
						Savol-Javob
					</a>
				</div>

				<div className={Styled.Bussines}>
					<h3>Tadbirkorlarga</h3>
					{/* <img src={'AppleIcon'} alt="" /> */}

					<a href="Mealyda Soting" className={Styled.a}>
						Uzumda Soting
					</a>
					<a href="Sotuvchi Kabinetiga kirish" className={Styled.a}>
						Sotuvchi Kabinetiga kirish
					</a>
				</div>
			</section>
		</footer>
	);
}
