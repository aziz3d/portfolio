"use client";

import { BarsMenuIcon, DownloadIcon, SunIcon, XMarkIcon } from "@/assets/svg";
import { delay } from "@/utils";
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeButton";

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
			<nav className="flex w-full justify-between bg-gray-950 p-8">
				<div>Juan Peñaloza</div>
				<div>
					<ul className="flex items-center gap-8">
						<li className="hidden lg:block">
							<Link
								href={"/"}
								title="Home"
								className="hidden rounded-full text-white hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400 lg:block"
							>
								Home
							</Link>
						</li>
						<li className="hidden lg:block">
							<Link
								href={"/about"}
								title="About"
								className="hidden rounded-full text-white hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400 lg:block"
							>
								About
							</Link>
						</li>
						<li className="hidden lg:block">
							<Link
								href={"/services"}
								title="Services"
								className="hidden rounded-full text-white hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400 lg:block"
							>
								Services
							</Link>
						</li>
						<li className="hidden lg:block">
							<Link
								href={"/portfolio"}
								title="Portfolio"
								className="hidden rounded-full text-white hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400 lg:block"
							>
								Portfolio
							</Link>
						</li>
						<li className="hidden lg:block">
							<Link
								href={"/get-in-touch"}
								title="Get in touch"
								className="hidden rounded-full text-white hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400 lg:block"
							>
								Get in touch
							</Link>
						</li>
						<li className="h-6">
							<ThemeSwitcher />
						</li>
						<li className="block h-6 lg:hidden">
							<button
								type="button"
								title="Open menu"
								className="rounded-lg fill-white hover:fill-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
								onClick={showOverlay}
							>
								<BarsMenuIcon className="h-6 w-6 fill-inherit" />
							</button>
						</li>
						<li className="hidden lg:block">
							<button
								type="button"
								title="Download CV"
								className={`group hidden items-center gap-2 rounded-full border-2 border-yellow-400 px-4 py-2 text-yellow-400 duration-150 hover:bg-yellow-400 hover:text-gray-950 focus:outline-yellow-400 disabled:border-yellow-200 disabled:bg-yellow-200 disabled:stroke-gray-400 lg:flex`}
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
				<div className="absolute bottom-0 left-0 right-0 top-0 z-50 flex h-screen flex-col items-center bg-gray-800 p-8">
					<button
						type="button"
						title="Open menu"
						className="self-end"
						onClick={hideOverlay}
					>
						<XMarkIcon className="h-6 w-6 fill-white hover:fill-yellow-400" />
					</button>
					<div className="flex h-full w-full items-center justify-center">
						<ul className="flex flex-col items-center gap-8">
							<li>
								<Link
									href={"/"}
									title="Home"
									className="block rounded-full text-2xl text-white hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
									onClick={hideOverlay}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href={"/about"}
									title="About"
									className="block rounded-full text-2xl text-white hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
									onClick={hideOverlay}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href={"/services"}
									title="Services"
									className="block rounded-full text-2xl text-white hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
									onClick={hideOverlay}
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href={"/portfolio"}
									title="Portfolio"
									className="block rounded-full text-2xl text-white hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
									onClick={hideOverlay}
								>
									Portfolio
								</Link>
							</li>
							<li>
								<Link
									href={"/get-in-touch"}
									title="Get in touch"
									className="block rounded-full text-2xl text-white hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
									onClick={hideOverlay}
								>
									Get in touch
								</Link>
							</li>
							<li>
								<button
									type="button"
									title="Download CV"
									className={`group flex items-center gap-2 rounded-full border-2 border-yellow-400 px-4 py-2 text-yellow-400 duration-150 hover:bg-yellow-400 hover:text-gray-950 focus:outline-yellow-400 disabled:border-yellow-200 disabled:bg-yellow-200 disabled:stroke-gray-400`}
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
