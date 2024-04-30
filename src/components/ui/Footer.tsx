import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="flex min-h-[88px] w-full items-center justify-center gap-12 bg-indigo-500 text-white">
			<div className="flex max-w-[1280px] shrink grow basis-0 flex-col items-start justify-start gap-8 py-8">
				<div className="flex items-center justify-between gap-6 self-stretch px-4 max-xl:flex-col-reverse">
					<span className="font-montserrat font-medium leading-6 xl:whitespace-nowrap">
						© 2024 Daniel Peñaloza. All rights reserved.
					</span>
					<div className="flex w-full flex-wrap justify-center gap-6 xl:justify-end">
						<Link
							href={"/projects"}
							rel="noopener noreferrer"
							title="Projects"
							className="font-montserrat font-medium leading-6 hover:text-indigo-200"
						>
							Projects
						</Link>
						<Link
							href={"#experience"}
							rel="noopener noreferrer"
							title="Experience"
							className="font-montserrat font-medium leading-6 hover:text-indigo-200"
						>
							Experience
						</Link>
						<Link
							href={"#work-with-me"}
							rel="noopener noreferrer"
							title="Work with me"
							className="font-montserrat font-medium leading-6 hover:text-indigo-200"
						>
							Work with me
						</Link>
						<Link
							href={"/cv.pdf"}
							target={"_blank"}
							title="Download CV"
							rel="noopener noreferrer"
							aria-label="Download CV"
							role="button"
							tabIndex={0}
							className="font-montserrat font-medium leading-6 hover:text-indigo-200"
							download={"cv.pdf"}
						>
							Download CV
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
