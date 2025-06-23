import AnswerBox from "./AnswerBox";

export default function Ball({
	isClicked,
	onClick,
	answer
}: {
	isClicked: boolean;
	onClick: () => void;
	answer: string;
}) {
	return (
		<div
			className="rounded-full w-128 h-128 dark:bg-white bg-black flex-center select-none cursor-pointer"
			onClick={onClick}
		>
			<div className="rounded-full w-86 h-86 dark:bg-black bg-white flex-center">
				{!isClicked && (
					<span className="text-8xl dark:text-white text-black">8</span>
				)}
				{isClicked && <AnswerBox answer={answer} />}
			</div>
		</div>
	);
}
