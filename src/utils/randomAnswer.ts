import allAnswers, {
	negativeAnswers,
	neutralAnswers,
	positiveAnswers
} from "@/data/answers";
import { answerObject, Err } from "@/data/types";

/**
 * @param {Array} Arr Source array to select a random element from.
 *
 * @returns {unknown} Random element with any type of the source array.
 */
export function randomElement(Arr: Array<unknown>): unknown {
	if (!Arr)
		throw new Err({
			type: "SERV_ERR",
			message: "No array specified to get a random element from.",
			cause: "randomElement() on /utils/functions.ts"
		});
	else return Arr[Math.floor(Math.random() * Arr.length)];
}

/**
 * @param {string} reqType (Default: all) Specifies the type of the random answer you'll get.
 *
 * @returns {answerObject} A random answer-object with the answer and type.
 *
 * @see `/src/data/answers.ts` for the list of answers.
 */
export function randomAnswer(reqType?: string): answerObject {
	switch (reqType) {
		case "positive":
			return randomElement(positiveAnswers) as answerObject;
		case "neutral":
			return randomElement(neutralAnswers) as answerObject;
		case "negative":
			return randomElement(negativeAnswers) as answerObject;
		case "all":
		default:
			return randomElement(allAnswers) as answerObject;
	}
}

export function getAnswerByID(id: number | string): answerObject {
	if (typeof id === "string") id = Number(id);
	return allAnswers.filter((answer) => answer.id == id)[0];
}
