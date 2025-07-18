"use client";

import { mono } from "@/app/fonts";

import { useState } from "react";
import Ball from "@/app/components/Ball";
import { randomAnswer } from "@/utils/randomAnswer";
import Button from "@/app/components/Button";
import { newtab } from "@/app/functions";
import Link from "next/link";

export default function Home() {
	const [isClicked, setIsClicked] = useState(false);
	const [answerObject, setAnswerObject] = useState(randomAnswer());

	const handleBallClick = (): void => {
		setIsClicked(true);
		setAnswerObject(randomAnswer());
	};

	return (
		<div className="flex flex-col w-full h-full gap-6 flex-center">
			<Ball
				isClicked={isClicked}
				onClick={handleBallClick}
				answer={answerObject.answer}
			/>
			<div className={`flex gap-2 ${mono.className} font-bold`}>
				<Button onClick={() => newtab("/api")} theme="secondary">
					API README
				</Button>
				<Button onClick={handleBallClick} theme="primary">
					Shake the ball
				</Button>
				<Button
					onClick={() => newtab("https://github.com/alialmasi/8-magic")}
					theme="secondary"
				>
					Source Code
				</Button>
			</div>
		</div>
	);
}
