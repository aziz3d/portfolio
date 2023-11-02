"use client";

import {
	ArrowIcon,
	DownloadIcon,
	GithubIcon,
	LinkedinIcon,
	NpmIcon,
	SunIcon,
} from "@/assets/svg";
import { GITHUB_URL, LINKEDIN_URL, NPM_URL } from "@/constants";
import { delay } from "@/utils";
import Link from "next/link";
import React from "react";

export default function Footer() {
	const [status, setStatus] = React.useState(false);

	const downloadCV = async () => {
		setStatus(true);
		await delay(3000);
		setStatus(false);
	};

	return (
		<footer className="flex flex-col px-6 w-full bg-gray-900">
			<div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 md:gap-2 py-28">
				<div className="flex flex-col gap-10">
					<div className="flex items-center gap-6">
						<div className="h-32 w-32 bg-yellow-200 rounded-full" />
						<div className="flex flex-col gap-2">
							<span className="text-4xl text-gray-200 font-semibold">
								Daniel Peñaloza
							</span>
							<span className="text-2xl text-gray-400 font-medium">
								Fullstack developer
							</span>
						</div>
					</div>
					<div className="flex justify-center md:justify-start items-center gap-6">
						<Link
							href={LINKEDIN_URL}
							target="_blank"
							className="fill-white hover:fill-yellow-200"
						>
							<LinkedinIcon className="h-7 w-7 fill-inherit" />
						</Link>
						<Link
							href={GITHUB_URL}
							target="_blank"
							className="fill-white hover:fill-yellow-200"
						>
							<GithubIcon className="h-6 w-6 fill-inherit" />
						</Link>
						<Link
							href={NPM_URL}
							target="_blank"
							className="fill-white hover:fill-yellow-200"
						>
							<NpmIcon className="h-5 fill-inherit" />
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<Link
						href={"/get-in-touch"}
						title="Get in touch"
						className="flex items-center gap-4 group"
					>
						<span className="text-4xl text-gray-200 font-bold group-hover:underline group-hover:underline-offset-8">
							Get in touch
						</span>
						<ArrowIcon className="h-14 fill-yellow-400 group-hover:ml-4 duration-200" />
					</Link>
					<div>
						<p className="w-72 text-gray-400">
							I&apos;m a fullstack developer eager to bring your{" "}
							<strong>ideas to life.</strong> Let&apos;s discuss
							projects and tech innovations.
						</p>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							className="p-2.5 w-full border rounded-lg text-white text-sm focus:ring-primary-600 focus:border-primary-600 bg-gray-800 border-gray-700 dark:placeholder-gray-400"
						/>
					</div>
				</div>
			</div>
			<hr className="border-gray-400" />
			<div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 py-8">
				<ul className="flex flex-wrap items-center gap-8">
					<li>
						<Link
							href={"/"}
							title="Home"
							className="text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href={"/about"}
							title="About"
							className="text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href={"/services"}
							title="Services"
							className="text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
						>
							Services
						</Link>
					</li>
					<li>
						<Link
							href={"/portfolio"}
							title="Portfolio"
							className="text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
						>
							Portfolio
						</Link>
					</li>
					<li>
						<Link
							href={"/get-in-touch"}
							title="Get in touch"
							className="text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
						>
							Get in touch
						</Link>
					</li>
					<li className="h-6">
						<button
							type="button"
							title="Toggle dark mode"
							className="rounded-full focus:outline-offset-4 focus:outline-yellow-400 fill-white hover:fill-yellow-400"
						>
							<SunIcon className="h-6 w-6 fill-inherit" />
						</button>
					</li>
					<li>
						<button
							type="button"
							title="Download CV"
							className={`flex items-center gap-2 px-4 py-2 text-yellow-400 border-2 border-yellow-400 rounded-full focus:outline-yellow-400 hover:bg-yellow-400 hover:text-gray-950 disabled:bg-yellow-200 disabled:border-yellow-200 disabled:stroke-gray-400 group duration-150`}
							onClick={downloadCV}
							disabled={status}
						>
							{status ? (
								<DownloadIcon className="my-1 h-4 w-4 stroke-inherit" />
							) : (
								<span className="font-medium">Download CV</span>
							)}
						</button>
					</li>
				</ul>
				<div>Copyright © Daniel Peñaloza</div>
			</div>
		</footer>
	);
}
