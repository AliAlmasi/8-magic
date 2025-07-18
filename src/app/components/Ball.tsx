import { motion } from "motion/react";
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
		<motion.div
			className="rounded-full w-110 h-110 dark:bg-white bg-black flex-center select-none cursor-pointer shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
			// ? light shading on black spaces of ball
			onClick={onClick}
			animate={{
				y: [0, -10, 0]
				// ? animate ball shadow as it hovers
			}}
			transition={{
				duration: 3,
				repeat: Infinity,
				ease: "easeInOut"
			}}
		>
			<div className="rounded-full w-80 h-80 dark:bg-black bg-white flex-center">
				{!isClicked && (
					<motion.span
						initial={{ opacity: 1 }}
						whileTap={{ opacity: 0 }}
						transition={{ duration: 1.5, ease: "easeInOut" }}
						className="text-8xl dark:text-white text-black"
					>
						8
					</motion.span>
				)}
				{isClicked && (
					// * <div className="bg-neutral-950 h-4/5 w-4/5 rounded-full flex flex-center">
					<AnswerBox answer={answer} />
					// * </div>
				)}
			</div>
		</motion.div>
	);
}
