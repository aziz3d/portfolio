import { FiverrIcon, GitHubIcon, LinkedInIcon } from "@/assets/svg";
import { FIVERR_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants";
import Link from "next/link";
import React from "react";

export default function ContactSection() {
	return (
		<section
			id="work-with-me"
			className="flex w-full items-center justify-center py-48"
		>
			<div className="flex w-full max-w-[1280px] items-center gap-24 max-xl:px-4 max-lg:flex-col max-md:flex-col-reverse">
				<form action="" className="flex w-full flex-col gap-6">
					<div className="grid grid-cols-2 gap-6">
						<input
							type="text"
							name="firstName"
							id="firstName"
							placeholder="First name"
							className="col-span-1 rounded-lg bg-white px-3 py-2 text-neutral-500 outline outline-1 outline-neutral-300 placeholder:text-neutral-500 focus:outline-2 focus:outline-indigo-300"
							autoComplete="given-name"
						/>
						<input
							type="text"
							name="lastName"
							id="lastName"
							placeholder="Last name"
							className="col-span-1 rounded-lg bg-white px-3 py-2 text-neutral-500 outline outline-1 outline-neutral-300 placeholder:text-neutral-500 focus:outline-2 focus:outline-indigo-300"
							autoComplete="family-name"
						/>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							className="col-span-2 rounded-lg bg-white px-3 py-2 text-neutral-500 outline outline-1 outline-neutral-300 placeholder:text-neutral-500 focus:outline-2 focus:outline-indigo-300"
							autoComplete="email"
						/>
						<textarea
							name="message"
							id="message"
							cols={30}
							rows={10}
							placeholder="Message"
							className="col-span-2 max-h-[150px] rounded-lg bg-white px-3 py-2 text-neutral-500 outline outline-1 outline-neutral-300 placeholder:text-neutral-500 focus:outline-2 focus:outline-indigo-300"
						></textarea>
						<button
							type="submit"
							title="Submit"
							className="col-span-2 rounded-lg bg-indigo-500 px-4 py-2.5 font-semibold leading-6 text-indigo-100 hover:bg-indigo-400"
						>
							Submit
						</button>
					</div>
				</form>
				<div className="flex flex-col justify-center gap-8 md:items-center">
					<h1 className="font-montserrat text-5xl font-bold text-indigo-900">
						Let&apos;s connect
					</h1>
					<span className="font-montserrat text-xl text-neutral-500">
						I&apos;m always open to new opportunities. Feel free to
						reach out to me using the form on the left or through my
						social media profiles below.
					</span>
					<div className="flex items-center gap-4">
						<Link href={LINKEDIN_URL} title="LinkedIn">
							<LinkedInIcon className="hover:fill-indigo h-6 w-6 fill-indigo-950" />
						</Link>
						<Link href={GITHUB_URL} title="Github">
							<GitHubIcon className="hover:fill-indigo h-6 w-6 fill-indigo-950" />
						</Link>
						<Link href={FIVERR_URL} title="Fiverr">
							<FiverrIcon className="hover:fill-indigo h-5 fill-indigo-950 hover:opacity-80" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
