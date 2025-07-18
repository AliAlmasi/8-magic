import Logo from "@/app/Logo";
import { Err } from "@/data/types";
import { ImageResponse } from "next/og";

async function loadGoogleFont(font: string) {
	const url = `https://fonts.googleapis.com/css2?family=${font}`;
	const css = await (await fetch(url)).text();
	const resource = css.match(
		/src: url\((.+)\) format\('(opentype|truetype)'\)/
	);

	if (resource) {
		const response = await fetch(resource[1]);
		if (response.status == 200) return await response.arrayBuffer();
	}

	throw new Err({
		type: "SERV_ERR",
		message: "failed to load font data",
		code: 500,
		cause: "loadGoogleFont() on /src/app/api/ogp/route.tsx"
	});
}

export async function GET() {
	return new ImageResponse(
		(
			<div
				style={{
					backgroundColor: "#fafafa",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "1200px",
					height: "630px",
					fontFamily: "Bebas Neue",
					fontSize: 30,
					lineHeight: 1
				}}
			>
				<div style={{ display: "flex", alignItems: "center" }}>
					<Logo
						style={{
							width: 150,
							height: 150
						}}
					/>
					<h1 style={{ fontSize: 100 }}>{"-Magic"}</h1>
				</div>
				<p>A clairvoyant piece of application</p>
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: "Bebas Neue",
					data: await loadGoogleFont("Bebas Neue"),
					style: "normal"
				}
			]
		}
	);
}
