"use client";

import { BarsMenuIcon, DownloadIcon, SunIcon, XMarkIcon } from "@/assets/svg";
import { delay } from "@/utils";
import Link from "next/link";
import React from "react";

export default function Navbar() {
	const [status, setStatus] = React.useState(false);
	const [visible, setVisible] = React.useState(false);

	const downloadCV = async () => {
		setStatus(true);
		await delay(3000);
		setStatus(false);
	};

	const showOverlay = () => {
		const element = document.getElementById("layout");

		if (element) {
			element.classList.add("overflow-hidden");
		}

		setVisible(true);
	};

	const hideOverlay = async () => {
		const element = document.getElementById("layout");

		if (element) {
			element.classList.remove("overflow-hidden");
		}

		await delay(1000);

		setVisible(false);
	};

	return (
		<>
			<nav className="flex justify-between p-8 w-full bg-gray-950">
				<div>Juan Peñaloza</div>
				<div>
					<ul className="flex items-center gap-8">
						<li className="hidden lg:block">
							<Link
								href={"/"}
								title="Home"
								className="hidden lg:block text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
							>
								Home
							</Link>
						</li>
						<li className="hidden lg:block">
							<Link
								href={"/about"}
								title="About"
								className="hidden lg:block text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
							>
								About
							</Link>
						</li>
						<li className="hidden lg:block">
							<Link
								href={"/services"}
								title="Services"
								className="hidden lg:block text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
							>
								Services
							</Link>
						</li>
						<li className="hidden lg:block">
							<Link
								href={"/portfolio"}
								title="Portfolio"
								className="hidden lg:block text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
							>
								Portfolio
							</Link>
						</li>
						<li className="hidden lg:block">
							<Link
								href={"/get-in-touch"}
								title="Get in touch"
								className="hidden lg:block text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
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
						<li className="block lg:hidden h-6">
							<button
								type="button"
								title="Open menu"
								className="rounded-lg focus:outline-offset-4 focus:outline-yellow-400 fill-white hover:fill-yellow-400"
								onClick={showOverlay}
							>
								<BarsMenuIcon className="h-6 w-6 fill-inherit" />
							</button>
						</li>
						<li className="hidden lg:block">
							<button
								type="button"
								title="Download CV"
								className={`hidden lg:flex items-center gap-2 px-4 py-2 text-yellow-400 border-2 border-yellow-400 rounded-full focus:outline-yellow-400 hover:bg-yellow-400 hover:text-gray-950 disabled:bg-yellow-200 disabled:border-yellow-200 disabled:stroke-gray-400 group duration-150`}
								onClick={downloadCV}
								disabled={status}
							>
								{status ? (
									<DownloadIcon className="my-1 h-4 w-4 stroke-inherit" />
								) : (
									<span className="font-medium">
										Download CV
									</span>
								)}
							</button>
						</li>
					</ul>
				</div>
			</nav>
			{visible && (
				<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center p-8 h-screen bg-gray-800 z-50">
					<button
						type="button"
						title="Open menu"
						className="self-end"
						onClick={hideOverlay}
					>
						<XMarkIcon className="h-6 w-6 fill-white hover:fill-yellow-400" />
					</button>
					<div className="flex justify-center items-center h-full w-full">
						<ul className="flex flex-col items-center gap-8">
							<li>
								<Link
									href={"/"}
									title="Home"
									className="block text-2xl text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
									onClick={hideOverlay}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href={"/about"}
									title="About"
									className="block text-2xl text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
									onClick={hideOverlay}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href={"/services"}
									title="Services"
									className="block text-2xl text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
									onClick={hideOverlay}
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href={"/portfolio"}
									title="Portfolio"
									className="block text-2xl text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
									onClick={hideOverlay}
								>
									Portfolio
								</Link>
							</li>
							<li>
								<Link
									href={"/get-in-touch"}
									title="Get in touch"
									className="block text-2xl text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
									onClick={hideOverlay}
								>
									Get in touch
								</Link>
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
										<span className="font-medium">
											Download CV
										</span>
									)}
								</button>
							</li>
						</ul>
					</div>
				</div>
			)}
		</>
	);
}
