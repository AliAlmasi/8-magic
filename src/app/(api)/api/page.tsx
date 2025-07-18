import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "8-Magic API"
};

export default function Page() {
	return (
		<>
			<h1 className="header-1">8-Magic API</h1>
			<p>
				This project comes with a easy-to-use API for other apps and services to
				use the 8-Magic answers.
			</p>
			<p>
				This API is currently at major version 1, and is available to use with
				the URL:
			</p>
			<Link href="/api/v1" className="link">
				/api/v1/
			</Link>
			<p>
				If you encountered any unexpected behavior (aka bugs), I&apos;ll be
				happy to check them out on{" "}
				<Link
					href="https://github.com/alialmasi/8-magic/issues"
					className="link"
				>
					GitHub issues
				</Link>
				.
			</p>
		</>
	);
}
