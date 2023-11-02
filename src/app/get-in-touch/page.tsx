import { Footer, Navbar } from "@/components";
import React from "react";

export default function GetInTouch() {
	return (
		<>
			<Navbar />
			<section
				id="get-in-touch"
				className="flex justify-between gap-16 p-8 bg-gray-950"
			>
				<form action="" className="flex flex-col gap-4 p-16 min-w-[500px] bg-gray-900 rounded-xl">
					<label htmlFor="name">
						Full name
						<input
							type="text"
							id="name"
							placeholder="Full name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						/>
					</label>
					<label htmlFor="email">
						Email
						<input
							type="email"
							id="email"
							placeholder="Email"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						/>
					</label>
					<label htmlFor="company">
						Company (optional)
						<input
							type="text"
							id="company"
							placeholder="Company"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						/>
					</label>
					<label htmlFor="write">
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
				</form>
				<div>
					<h2 className="text-4xl text-yellow-200 font-bold">
						Get in touch with me
					</h2>
					<p>
						Interested in collaborating or discussing a project?
						Feel free to get in touch! I&apos;m a fullstack
						developer passionate about crafting innovative
						solutions. Whether it&apos;s about web development,
						system architecture, or brainstorming ideas, I&apos;m
						here to explore and create. Let&apos;s connect and bring
						your visions to life!
					</p>
				</div>
			</section>
			<Footer />
		</>
	);
}
