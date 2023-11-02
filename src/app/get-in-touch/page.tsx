import { ArrowIcon, ArrowUpRightSquareIcon, GithubIcon, LinkedinIcon, NpmIcon } from "@/assets/svg";
import { Footer, Navbar } from "@/components";
import { GITHUB_URL, LINKEDIN_URL, NPM_URL } from "@/constants";
import Link from "next/link";
import React from "react";

export default function GetInTouch() {
	return (
		<>
			<Navbar />
			<section
				id="get-in-touch"
				className="flex flex-col-reverse xl:flex-row justify-center items-center gap-16 pt-16 bg-gray-900"
			>
				<form
					action=""
					className="flex flex-col gap-4 p-16 h-min min-w-[500px] max-w-[500px] bg-gray-800 rounded-4xl"
				>
					<label htmlFor="name" className="flex flex-col gap-2">
						Full name
						<input
							type="text"
							id="name"
							placeholder="Full name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						/>
					</label>
					<label htmlFor="email" className="flex flex-col gap-2">
						Email
						<input
							type="email"
							id="email"
							placeholder="Email"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						/>
					</label>
					<label htmlFor="company" className="flex flex-col gap-2">
						Company (optional)
						<input
							type="text"
							id="company"
							placeholder="Company"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						/>
					</label>
					<label htmlFor="write" className="flex flex-col gap-2">
						Write me a message
						<textarea
							name="write"
							id="write"
							cols={30}
							rows={5}
							placeholder="Type your message here"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						></textarea>
					</label>
					<button
						type="button"
						className="flex items-center self-end gap-2 mt-8 px-6 py-3 w-min bg-yellow-200 rounded-full text-xl text-gray-800 fill-gray-800 font-semibold hover:bg-yellow-100"
					>
						Send
						<ArrowIcon className="h-7 w-7 fill-inherit" />
					</button>
				</form>
				<div className="flex flex-col gap-8 max-w-[500px]">
					<h1 className="text-5xl text-yellow-200 font-bold">
						Get in touch with me
					</h1>
					<p className="text-xl text-gray-400">
						Interested in collaborating or discussing a project?
						Feel free to <strong>get in touch!</strong>
						<br />
						<br />
						I&apos;m a fullstack developer passionate about crafting
						innovative solutions. Whether it&apos;s about web
						development, system architecture, or brainstorming
						ideas, I&apos;m here to explore and create.
						<br />
						<br />
						<span className="text-yellow-200 font-bold underline underline-offset-4">
							Let&apos;s connect and bring your visions to life!
						</span>
					</p>
					<div className="flex justify-start items-center gap-6">
						<Link
							href={LINKEDIN_URL}
							target="_blank"
							className="fill-white hover:fill-yellow-200"
						>
							<LinkedinIcon className="h-12 w-12 fill-inherit" />
						</Link>
						<Link
							href={GITHUB_URL}
							target="_blank"
							className="fill-white hover:fill-yellow-200"
						>
							<GithubIcon className="h-8 w-8 fill-inherit" />
						</Link>
						<Link
							href={NPM_URL}
							target="_blank"
							className="fill-white hover:fill-yellow-200"
						>
							<NpmIcon className="h-6 fill-inherit" />
						</Link>
					</div>
					<hr className="border-gray-600" />
					<div className="grid grid-cols-2 grid-rows-2 gap-4">
						<div className="relative p-4 h-40 w-full bg-gray-800 rounded-4xl">
							<button
								type="button"
								title="See more"
								className="absolute flex items-center gap-2 top-4 right-4 px-4 py-2 bg-gray-600 rounded-full text-sm text-gray-300 fill-gray-300 hover:bg-gray-500"
							>
								See more
								<ArrowUpRightSquareIcon className="h-3 fill-inherit" />
							</button>
						</div>
						<div className="relative p-4 h-40 w-full bg-gray-800 rounded-4xl">
							<button
								type="button"
								title="See more"
								className="absolute flex items-center gap-2 top-4 right-4 px-4 py-2 bg-gray-600 rounded-full text-sm text-gray-300 fill-gray-300 hover:bg-gray-500"
							>
								See more
								<ArrowUpRightSquareIcon className="h-3 fill-inherit" />
							</button>
						</div>
						<div className="relative p-4 h-40 w-full bg-gray-800 rounded-4xl">
							<button
								type="button"
								title="See more"
								className="absolute flex items-center gap-2 top-4 right-4 px-4 py-2 bg-gray-600 rounded-full text-sm text-gray-300 fill-gray-300 hover:bg-gray-500"
							>
								See more
								<ArrowUpRightSquareIcon className="h-3 fill-inherit" />
							</button>
						</div>
						<div className="relative p-4 h-40 w-full bg-gray-800 rounded-4xl">
							<button
								type="button"
								title="See more"
								className="absolute flex items-center gap-2 top-4 right-4 px-4 py-2 bg-gray-600 rounded-full text-sm text-gray-300 fill-gray-300 hover:bg-gray-500"
							>
								See more
								<ArrowUpRightSquareIcon className="h-3 fill-inherit" />
							</button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
