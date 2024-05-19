import { FiverrFlatIcon, FiverrIcon, GitHubIcon, LinkedInIcon } from "@/assets/svg";
import { FIVERR_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants";
import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="flex min-h-[88px] w-full items-center justify-center gap-12 bg-indigo-500 text-white">
			<div className="flex max-w-[1000px] shrink grow basis-0 flex-col items-start justify-start gap-8 py-8">
				<div className="flex flex-col items-center justify-between gap-6 self-stretch px-4">
					<div className="flex flex-wrap justify-center gap-6 xl:justify-end">
						<Link
							href={"/projects"}
							rel="noopener noreferrer"
							title="Projects"
							className="font-montserrat font-medium leading-6 hover:text-indigo-200"
						>
							Projects
						</Link>
						<Link
							href={"/#experience"}
							rel="noopener noreferrer"
							title="Experience"
							className="font-montserrat font-medium leading-6 hover:text-indigo-200"
						>
							Experience
						</Link>
						<Link
							href={"/#work-with-me"}
							rel="noopener noreferrer"
							title="Work with me"
							className="font-montserrat font-medium leading-6 hover:text-indigo-200"
						>
							Work with me
						</Link>
						<Link
							href={"/cv_JUANDANIELPENALOZA.pdf"}
							target={"_blank"}
							title="Download CV"
							rel="noopener noreferrer"
							aria-label="Download CV"
							role="button"
							tabIndex={0}
							className="font-montserrat font-medium leading-6 hover:text-indigo-200"
							download={"cv_JUANDANIELPENALOZA.pdf"}
						>
							Download CV
						</Link>
					</div>
					<span className="font-montserrat text-sm font-medium leading-6 text-indigo-200">
						© 2023-{new Date().getFullYear()} Daniel Peñaloza. All
						Rights Reserved.
					</span>
					<ul className="flex justify-center space-x-5">
						<li>
							<Link
								href={LINKEDIN_URL}
								target="_blank"
								title="LinkedIn"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="text-indigo-200 hover:text-indigo-50"
							>
								<LinkedInIcon className="h-5 w-5" />
							</Link>
						</li>
						<li>
							<Link
								href={GITHUB_URL}
								target="_blank"
								title="GitHub"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="text-indigo-200 hover:text-indigo-50"
							>
								<GitHubIcon className="h-5 w-5" />
							</Link>
						</li>
						<li>
							<Link
								href={FIVERR_URL}
								target="_blank"
								title="LinkedIn"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="text-indigo-200 hover:text-indigo-50"
							>
								<FiverrFlatIcon className="h-5" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
