"use client";

import Ball from "./components/Ball";
import { randomAnswer } from "@/utils/randomAnswer";
import React, { useState } from "react";

export default function Home() {
	const [isClicked, setIsClicked] = useState(false);
	const [answerObject, setAnswerObject] = useState(randomAnswer());

	const handleBallClick = (): void => {
		setIsClicked(true);
		setAnswerObject(randomAnswer());
	};

	return (
		<div className="h-full w-full flex items-center justify-center">
			<Ball
				isClicked={isClicked}
				onClick={handleBallClick}
				answer={answerObject.answer}
			/>
		</div>
	);
}
