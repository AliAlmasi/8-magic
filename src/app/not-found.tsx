"use client";

import { JetBrains_Mono } from "next/font/google";
import { errorCodeToText } from "@/app/(api)/api/v1/headers";

const mono = JetBrains_Mono({
	style: ["normal"],
	subsets: ["latin"]
});

export default function Page() {
	return (
		<div className="flex-col w-full h-full text-center select-none flex-center">
			<h1 className="text-red-400 text-9xl">404</h1>
			<p className="pb-2 text-6xl border-b-2 border-gray-400 dark:border-gray-800 dark:text-red-50 text-red-950">
				{errorCodeToText(404)}
			</p>
			<button
				className={`${mono.className} px-4 py-2 m-4 text-xl text-gray-500 border-2 rounded-lg cursor-pointer dark:hover:bg-gray-900 dark:hover:text-gray-300 hover:text-gray-800 hover:bg-gray-200`}
				onClick={() => history.back()}
			>
				history.back()
			</button>
		</div>
	);
}
