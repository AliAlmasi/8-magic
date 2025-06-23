export type answerTypes = "positive" | "neutral" | "negative";

export type answerObject = {
	id: number;
	answer: string;
	type: answerTypes;
	emoji: string;
};

export type answersArray = Array<answerObject>;

export type strObject = { [key: string]: string };

export type httpOptionsObject = {
	status: number;
	statusText: string;
	headers: strObject;
};

type ErrorType = "SERV_ERR" | "REQ_ERR" | "UNKNOWN_ERR";

export class Err extends Error {
	type: ErrorType;
	message: string;
	cause?: string;
	code?: number;

	constructor({
		type,
		message,
		cause,
		code
	}: {
		type: ErrorType;
		message: string;
		cause?: string;
		code?: number;
	}) {
		super();
		this.type = type;
		this.message = message;
		this.cause = cause;
		this.code = code;
	}
}
