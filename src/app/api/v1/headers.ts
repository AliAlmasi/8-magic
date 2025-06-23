import { Err, strObject, httpOptionsObject } from "@/data/types";

export const headers = (contentType: string): strObject => {
	if (!contentType) {
		throw new Err({
			type: "SERV_ERR",
			message: "Content-Type not defined correctly in HTTP response headers.",
			cause: "headers() on /utils/headers.ts"
		});
	}
	return {
		"Content-Type": `${contentType}; charset=UTF-8`,
		"Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
		Pragma: "no-cache",
		Expires: "0"
	};
};

export const successOptions = (
	message: string = "Here's your answer",
	code: number = 200,
	contentType: string = "application/json"
): httpOptionsObject => {
	return {
		status: code,
		statusText: message,
		headers: headers(contentType)
	};
};

export const failOptions = (
	code: number = 500,
	message: string = "Server Error",
	contentType: string = "application/json"
): httpOptionsObject => {
	return {
		status: code,
		statusText: message,
		headers: headers(contentType)
	};
};
