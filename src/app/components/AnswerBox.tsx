import { motion } from "motion/react";

export default function AnswerBox({ answer }: { answer: string }) {
	return (
		<motion.div className="rounded-lg w-50 h-35 bg-gradient-to-bl from-blue-700 to-teal-800 to-80% from-10% flex-center">
			<span className="text-3xl text-center w-3/5 text-white ">{answer}</span>
		</motion.div>
	);
}
