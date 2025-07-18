import { SpeedInsights } from "@vercel/speed-insights/next";

import { Metadata } from "next";
import "./globals.css";
import { bebas } from "@/app/fonts";

export const metadata: Metadata = {
	title: "8-Magic",
	authors: { name: "Ali Almasi", url: "https://alialmasi.ir" },
	description: "A clairvoyant piece of application",
	openGraph: {
		type: "website",
		url: "https://8.alialmasi.ir",
		title: "8-Magic",
		description: "A clairvoyant piece of application",
		siteName: "8-Magic",
		images: [
			{
				// url: "https://8.alialmasi.ir/api/ogp",
				url: "https://8-magic.vercel.app/api/ogp",
				width: 1200,
				height: 630
			}
		]
	}
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
				<SpeedInsights />
			</body>
		</html>
	);
}
