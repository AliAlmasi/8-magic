import allAnswers, {
	negativeAnswers,
	neutralAnswers,
	positiveAnswers
} from "@/data/answers";
import { answersArray, Err } from "@/data/types";

function getAllAnswers(arr: answersArray, n: number): answersArray {
	if (n === 0) return arr;
	else {
		const shuffled: answersArray = arr.slice();

		if (n > arr.length)
			throw new RangeError(
				`Requested number of elements exceeds array length (length: ${arr.length})`
			);

		for (let i: number = shuffled.length - 1; i > 0; i--) {
			const j: number = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}

		return shuffled.slice(0, n);
	}
}

export function getTypeAnswers(type: string, n: number): answersArray {
	switch (type) {
		case "👍":
		case "positive":
			return getAllAnswers(positiveAnswers, n);
		case "🤷":
		case "neutral":
			return getAllAnswers(neutralAnswers, n);
		case "👎":
		case "negative":
			return getAllAnswers(negativeAnswers, n);
		case "all":
			return getAllAnswers(allAnswers, n);
		default:
			throw new Err({
				type: "REQ_ERR",
				message:
					"Invalid type specified, choose 'positive', 'negative', 'neutral' or 'all'",
				cause: "getTypeAnswers() on /app/allAnswers/route.ts"
			});
	}
}
