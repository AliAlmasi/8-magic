"use server";

import { NextRequest } from "next/server";

import { randomAnswer } from "@/utils/randomAnswer";
import { failOptions, successOptions } from "@/app/api/v1/headers";
import { errorJSON, getAnswerJSON } from "@/app/api/v1/responses";

/**
 * @example ```/getAnswer?type=negative```
 *
 * @example ```/getAnswer?t=negative```
 */
export async function GET(req: NextRequest): Promise<Response> {
	try {
		const reqType: string =
			new URL(req.url).searchParams.get("type") ||
			new URL(req.url).searchParams.get("t") ||
			"";

		return new Response(
			getAnswerJSON(randomAnswer(reqType)),
			successOptions("Here's your answer")
		);
	} catch (error: unknown) {
		return new Response(errorJSON(error), failOptions());
	}
}
