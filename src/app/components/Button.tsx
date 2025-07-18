export default function Button({
	onClick,
	theme,
	children
}: {
	onClick?: () => void;
	theme: "primary" | "secondary";
	children: string;
}) {
	if (theme === "primary")
		return (
			<button
				className="relative inline-block text-black cursor-pointer group dark:text-white focus:outline-hidden"
				onClick={onClick}
			>
				<span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-black dark:bg-white transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
				<span className="relative block px-8 py-3 bg-white border border-current dark:bg-black">
					{children}
				</span>
			</button>
		);
	else
		return (
			<button
				className="relative inline-block text-black cursor-pointer group dark:text-white focus:outline-hidden"
				onClick={onClick}
			>
				<span className="absolute inset-0 translate-x-0 translate-y-0 bg-black dark:bg-white transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>
				<span className="relative block px-8 py-3 bg-white border border-current dark:bg-black">
					{children}
				</span>
			</button>
		);
}
