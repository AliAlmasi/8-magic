import "./styles.css";
import { mono } from "@/app/fonts";

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="w-full h-full">
			<body className={`${mono.className} antialiased w-full py-6`}>
				<div
					className={`${mono.className} flex w-1/2 mx-auto justify-center flex-col gap-6 text-left`}
				>
					{children}
				</div>
			</body>
		</html>
	);
}
