import { NextRequest } from "next/server";
import { failOptions, successOptions } from "@/app/api/v1/headers";
import { errorJSON } from "@/app/api/v1/responses";
import { getTypeAnswers } from "@/app/api/v1/functions";
import { getTypeLength } from "@/data/answers";

/**
 *
 * @example ```/allAnswers?type={ positive | neutral | negative }&number=5```
 * @example ```/allAnswers?t=neutral&n=3```
 *
 */
export async function GET(req: NextRequest): Promise<Response> {
	try {
		const type: string =
			new URL(req.url).searchParams.get("type")?.trim()?.toLowerCase() ||
			new URL(req.url).searchParams.get("t")?.trim()?.toLowerCase() ||
			"all";
		const number: number =
			Number(new URL(req.url).searchParams.get("number")?.trim()) ||
			Number(new URL(req.url).searchParams.get("n")?.trim()) ||
			0;

		return new Response(
			JSON.stringify({
				status: "success",
				data: {
					type,
					length: number !== 0 ? number : getTypeLength(type),
					answers: getTypeAnswers(type, number)
				}
			}),
			successOptions("Got the answers")
		);
	} catch (error: unknown) {
		return new Response(errorJSON(error), failOptions());
	}
}
