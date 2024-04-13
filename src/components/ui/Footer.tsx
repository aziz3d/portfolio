import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="flex h-[88px] w-full items-center justify-center gap-12">
			<div className="flex max-w-[1280px] shrink grow basis-0 flex-col items-start justify-start gap-8 py-8">
				<div className="flex items-center justify-between gap-6 self-stretch max-xl:flex-col-reverse">
					<span className="font-montserrat font-medium leading-6 text-neutral-500">
						© 2024 Daniel Peñaloza. All rights reserved.
					</span>
					<div className="flex flex-wrap gap-6 px-4">
						<Link
							href={"/projects"}
							rel="noopener noreferrer"
							className="font-montserrat font-medium leading-6 text-neutral-500 hover:text-indigo-500"
						>
							Projects
						</Link>
						<Link
							href={"#experience"}
							rel="noopener noreferrer"
							className="font-montserrat font-medium leading-6 text-neutral-500 hover:text-indigo-500"
						>
							Experience
						</Link>
						<Link
							href={"#work-with-me"}
							rel="noopener noreferrer"
							className="font-montserrat font-medium leading-6 text-neutral-500 hover:text-indigo-500"
						>
							Work with me
						</Link>
						<Link
							href={"/#download"}
							rel="noopener noreferrer"
							className="font-montserrat font-medium leading-6 text-neutral-500 hover:text-indigo-500"
						>
							Download CV
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
