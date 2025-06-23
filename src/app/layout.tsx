import type { Metadata } from "next";
import "./globals.css";

import { Bebas_Neue } from "next/font/google";

export const metadata: Metadata = {
	title: "8-Magic"
};

const bebas = Bebas_Neue({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bebas"
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full w-full">
			<body className={`${bebas.className} antialiased w-full h-full`}>
				{children}
			</body>
		</html>
	);
}
