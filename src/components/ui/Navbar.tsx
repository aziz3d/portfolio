import Link from "next/link";
import React from "react";
import { BarsMenuIcon } from "../../assets/svg/index";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
	return (
		<nav className="fixed left-0 right-0 top-0 z-30 flex h-[88px] w-full items-center justify-center gap-12 bg-white/40 backdrop-blur-lg">
			<div className="flex max-w-[1280px] shrink grow basis-0 flex-col items-start justify-start gap-8 px-4 py-8">
				<div className="flex items-center justify-between gap-6 self-stretch">
					<Link
						href={"/"}
						title="Daniel Peñaloza"
						className="font-montserrat text-lg font-medium leading-6 text-neutral-500 hover:text-indigo-500"
					>
						Daniel Peñaloza
					</Link>
					<MobileMenu />
					<div className="hidden gap-6 md:flex">
						<Link
							href={"/projects"}
							rel="noopener noreferrer"
							title="Projects"
							className="font-montserrat text-lg font-medium leading-6 text-neutral-500 hover:text-indigo-500"
						>
							Projects
						</Link>
						<Link
							href={"/#experience"}
							rel="noopener noreferrer"
							title="Experience"
							className="font-montserrat text-lg font-medium leading-6 text-neutral-500 hover:text-indigo-500"
						>
							Experience
						</Link>
						<Link
							href={"/#work-with-me"}
							rel="noopener noreferrer"
							title="Work with me"
							className="font-montserrat text-lg font-medium leading-6 text-neutral-500 hover:text-indigo-500"
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
							className="font-montserrat text-lg font-medium leading-6 text-neutral-500 hover:text-indigo-500"
							download={"cv.pdf"}
						>
							Download CV
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
