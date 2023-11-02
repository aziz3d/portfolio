"use client";

import { DownloadIcon, SunIcon } from "@/assets/svg";
import { delay } from "@/utils";
import Link from "next/link";
import React from "react";

export default function Navbar() {
	const [status, setStatus] = React.useState(false);

	const downloadCV = async () => {
		setStatus(true);
		await delay(3000);
		setStatus(false);
	};

	return (
		<nav className="flex justify-between p-8 w-full bg-gray-950">
			<div>Juan Peñaloza</div>
			<div>
				<ul className="flex items-center gap-8">
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
			</div>
		</nav>
	);
}
