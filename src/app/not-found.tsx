// import { headers } from "next/headers";

export default async function Page() {
	// const host = (await headers()).get("host");

	return (
		<div className="w-full h-full flex-center flex-col text-center select-none">
			<h1 className="text-9xl text-red-400">404</h1>
			<p className="text-6xl text-red-200 border-b-2 border-gray-800">
				Not Found
			</p>
			{/* <p className="pt-2 text-4xl text-gray-500">{host}</p> */}
		</div>
	);
}
