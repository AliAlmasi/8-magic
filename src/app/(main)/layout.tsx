import { Metadata } from "next";
import "./globals.css";
import { bebas } from "@/app/fonts";

export const metadata: Metadata = {
	title: "8-Magic"
};

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="w-full h-full">
			<body className={`${bebas.className} antialiased w-full h-full`}>
				{children}
			</body>
		</html>
	);
}
