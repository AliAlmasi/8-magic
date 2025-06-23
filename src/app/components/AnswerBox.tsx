export default function AnswerBox({ answer }: { answer: string }) {
	return (
		<div className="rounded-lg w-55 h-35 bg-gradient-to-bl from-blue-700 to-teal-800 to-80% from-10% flex-center">
			<span className="text-3xl text-center w-3/5 text-white">{answer}</span>
		</div>
	);
}
