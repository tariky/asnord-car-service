"use client";

import Image from "next/image";
import landingImage from "@/public/images/landing.webp";
import aboutUsRed from "@/public/images/aboutusred.webp";
import diagonostic from "@/public/images/diagnostic.webp";
import carkey from "@/public/images/carkey.webp";
import ac from "@/public/images/ac.webp";
import oilchange from "@/public/images/oilchange.webp";
import calling from "@/public/images/calling.webp";
import webshop from "@/public/images/webshop.webp";
import phonecode from "@/public/images/phonecode.svg";
import mapscode from "@/public/images/mapscode.svg";
import engine from "@/public/images/engine2.webp";
import ServiceItem from "@/components/ServiceItem";
import { Element, scroller } from "react-scroll";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-black">
			<div className="flex flex-col relative h-[700px] bg-black container mx-auto">
				<Image
					src={engine}
					alt="landing image"
					fill
					className="object-cover"
				/>
				<nav className="h-[80px] z-10 text-white justify-between items-center flex px-6 sm:px-16">
					<span className="text-xl font-semibold tracking-widest">
						AS NORD
					</span>
				</nav>
				<div className="flex flex-col z-10 px-6 mt-24 sm:mt-36 sm:items-center sm:justify-center">
					<h1 className="text-white text-4xl sm:text-center sm:text-5xl">
						Vratite svoj
						<br /> automobil u{" "}
						<strong className="text-red-600">život</strong>
					</h1>
					<p className="text-xs sm:text-lg w-[300px]  text-white mt-8 sm:text-center sm:w-[800px]">
						Oživite svoje vozilo i ponovno osjetite snagu ceste uz naše
						vrhunske usluge popravke. Naša stručna ekipa posvećena je
						vraćanju vašeg ljubimca u život, pružajući visokokvalitetne
						popravke i pažljivu njegu kako biste ponovno uživali u
						vožnji..
					</p>
					<div className="mt-10">
						<button
							onClick={() => {
								scroller.scrollTo("contact", {
									duration: 1500,
									delay: 100,
									smooth: true,
									offset: -10,
								});
							}}
							className="bg-red-600 px-10 text-lg text-white py-3"
						>
							Zakaži termin
						</button>
					</div>
				</div>
			</div>
			<section className="bg-black py-10 px-6 container mx-auto sm:px-16 sm:mt-10">
				<div className="sm:hidden">
					<span className="uppercase font-medium text-red-600">
						O nama
					</span>
					<h1 className="text-white mt-3 text-2xl sm:text-center">
						Vođeni strašću
						<br /> prema automobilima
					</h1>
				</div>
				<div className="sm:flex sm:gap-16 sm:items-center">
					<Image
						src={aboutUsRed}
						height={400}
						alt="about us image"
						className="mt-6 "
					/>
					<div>
						<div className="hidden sm:flex sm:flex-col">
							<span className="uppercase font-medium text-red-600">
								O nama
							</span>
							<h1 className="text-white mt-3 text-2xl sm:text-4xl">
								Vođeni strašću
								<br /> prema automobilima
							</h1>
						</div>
						<p className="text-white text-xs mt-6 sm:text-sm sm:w-[400px]">
							Naša misija je ne samo popraviti vaše vozilo, već i pružiti
							vam sigurnost i povjerenje u svakoj vožnji. Nudimo širok
							spektar usluga popravki, prilagođenih vašim potrebama.
							Vjerujte u nas kao partnere koji su tu da ožive vaše vozilo
							i osiguraju da svaki trenutak na cesti bude siguran i
							uživanje
						</p>
					</div>
				</div>
			</section>
			<section className="py-10 sm:py-20 px-6 container mx-auto sm:px-16 bg-white">
				<div className="sm:flex sm:flex-col sm:items-center">
					<span className="uppercase font-medium text-red-600">
						USLUGE
					</span>
					<h1 className=" mt-3 text-2xl sm:text-center sm:text-3xl">
						Rješavamo
						<br />
						vaše probleme
					</h1>
				</div>
				<div className="mt-10 sm:mt-16 flex gap-10 flex-col sm:grid sm:grid-cols-2">
					<ServiceItem
						image={diagonostic}
						title="Diagnostika"
						subtitle="Otkrijte bezbrižnost vožnje: naša dijagnostika kvarova osigurava preciznu analizu vašeg vozila. Pouzdano i brzo identificiramo probleme kako biste se vratili na cestu bez nepotrebnih briga!"
					/>
					<ServiceItem
						image={carkey}
						title="Kopiranje ključeva"
						subtitle="Sigurnost na prvi pogled: pružamo uslugu kopiranja ključeva. Brzo i precizno, obezbijedite sebi rezervni ključ bez nepotrebnih trzavica."
					/>
					<ServiceItem
						image={ac}
						title="Klima uređaji"
						subtitle="Udobnost na svakom putovanju: pružamo usluge održavanja i popravka klima uređaja i grijanja. Osigurajte prijatnu vožnju bez obzira na vremenske prilike."
					/>
					<ServiceItem
						image={oilchange}
						title="Redovno održavanje"
						subtitle="Vaš vozni partner: Redovno održavanje vozila za bezbrižnu vožnju. Pružamo pouzdan servis vašeg voznog ljubimca kako biste uživali u svakoj vožnji."
					/>
				</div>
			</section>
			<Element name="contact">
				<section className="py-10 px-6 bg-black relative h-[350px] container mx-auto sm:px-16">
					<Image
						src={calling}
						fill
						alt="image"
						className="object-cover z-0 sm:object-[0px_-480px] lg:object-[0px_-620px]"
					/>
					<div className="flex justify-between">
						<div>
							<div className="z-10 flex flex-col">
								<span className="uppercase font-medium text-red-600 z-10">
									Kontakt
								</span>
								<h1 className="text-white mt-3 text-2xl z-10 sm:text-3xl">
									Pozovi nas i<br />
									zakaži termin
								</h1>
							</div>
							<div className="flex mt-10 items-center gap-4 z-10">
								<div className="h-[50px] w-[5px] bg-red-600 z-10" />
								<h1 className="text-3xl text-white font-bold z-10 sm:text-4xl">
									+387 61 176 077
								</h1>
							</div>
						</div>
						<div className="sm:flex flex-col z-10 items-center gap-3 py-6 hidden">
							<div className="relative w-[200px] h-[200px] flex flex-col">
								<Image
									src={phonecode}
									alt="phonecode"
									fill
									className="object-fit"
								/>
							</div>
							<span className="text-white text-xs">
								Za brži i jednostavniji kontakt skeniraj kod
							</span>
						</div>
					</div>
				</section>
			</Element>
			<section className="py-10 sm:py-20 px-6 sm:gap-16 bg-white sm:flex sm:items-center sm:justify-between container mx-auto sm:px-16">
				<div className="relative w-[500px] h-[300px] shrink-0 hidden sm:flex">
					<Image
						src={webshop}
						fill
						className="object-cover"
						alt="webshop image"
					/>
				</div>
				<div className="sm:w-full">
					<span className="uppercase font-medium text-red-600">SHOP</span>
					<h1 className=" mt-3 text-2xl sm:text-3xl">
						Posjeti naš
						<br />
						web shop
					</h1>
					<p className="mt-4 text-xs sm:w-[400px] sm:text-sm">
						Otkrijte izvanrednu ponudu: Vaše online odredište za
						kvalitetnu opremu i dijelove. Sa brzom dostavom na kućnu
						adresu...
					</p>
					<div className="mt-10">
						<a
							href="https://shop.asnord-servis.com"
							className="bg-red-600 px-10 text-lg text-white py-3"
						>
							Web shop
						</a>
					</div>
				</div>
			</section>
			<section className="py-10 sm:py-16 px-6 sm:flex sm:items-center sm:justify-between bg-black container mx-auto sm:px-16">
				<div>
					<span className="uppercase font-medium text-red-600">
						LOKACIJA
					</span>
					<h1 className="mt-3 text-2xl text-white sm:text-4xl">
						Kako doći do nas
					</h1>
					<p className="text-white text-sm mt-4 sm:hidden ">
						Nalazimo se u mjestu Jelah na adresi Rosulje 242. Da biste nas
						jednostavnije i lakše pronašli kliknite na dugme ispod.
					</p>
					<p className="text-white text-sm mt-4 hidden sm:flex w-[500px] sm:text-sm">
						Nalazimo se u mjestu Jelah na adresi Rosulje 242. Da biste nas
						jednostavnije i lakše pronašli skeniraj QR code sa strane.
					</p>
					<div className="mt-10 sm:hidden flex">
						<a
							href="https://maps.app.goo.gl/658NEeYsCQK6kgGL6"
							className="bg-red-600 px-10 text-lg text-white py-3"
						>
							Google Maps lokacija
						</a>
					</div>
				</div>
				<div className="sm:flex flex-col z-10 items-center gap-3 py-6 hidden">
					<div className="relative w-[200px] h-[200px] flex flex-col">
						<Image
							src={mapscode}
							alt="maspcode"
							fill
							className="object-fit"
						/>
					</div>
					<span className="text-white text-xs">
						Za brži i jednostavniju uputu skeniraj kod
					</span>
				</div>
			</section>
			<section className="py-4 px-6 bg-white container mx-auto sm:px-16">
				<span>AS NORD d.o.o. - Sva prava zadržana - 2023</span>
			</section>
			<footer className="py-2 px-6 bg-black container mx-auto sm:px-16">
				<span className="text-white text-xs">
					Dizajn i razvoj web stranice: lunatik.agency
				</span>
			</footer>
		</main>
	);
}
