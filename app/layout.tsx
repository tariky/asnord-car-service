import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
	title: "AS NORD - Auto servis i auto elektrika",
	description:
		"Tražite stručnjake za popravke automobila, kopiranje ključeva i autoelektriku? Naš tim visokokvalificiranih tehničara nudi sveobuhvatne usluge za vaše vozilo. Bez obzira trebate li redovan servis, popravak motora ili električnih sistema, garantujemo vrhunsku uslugu i brzu intervenciju. Naša stručnost u kopiranju ključeva za različite marke automobila omogućava vam da brzo i sigurno riješite situacije s izgubljenim ključevima. Oslonite se na nas za pouzdane usluge koje će održati vaše vozilo u besprijekornom stanju.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={GeistSans.className}>{children}</body>
		</html>
	);
}
