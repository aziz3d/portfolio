import {
	ArrowIcon,
	GithubIcon,
	LinkedinIcon,
	NpmIcon,
	SunIcon,
} from "@/assets/svg";
import Link from "next/link";

export default function Footer() {
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
							href="https://www.linkedin.com/"
							target="_blank"
							className="fill-white hover:fill-yellow-200"
						>
							<LinkedinIcon className="h-7 w-7 fill-inherit" />
						</Link>
						<Link
							href="https://github.com/"
							target="_blank"
							className="fill-white hover:fill-yellow-200"
						>
							<GithubIcon className="h-6 w-6 fill-inherit" />
						</Link>
						<Link
							href="https://www.npmjs.com/"
							target="_blank"
							className="fill-white hover:fill-yellow-200"
						>
							<NpmIcon className="h-5 fill-inherit" />
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-4">
						<span className="text-4xl text-gray-200 font-bold">
							Get in touch
						</span>
						<ArrowIcon className="h-14 fill-yellow-400" />
					</div>
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
				<ul className="flex flex-wrap gap-8">
					<li>
						<button
							type="button"
							title="Home"
							className="text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
						>
							Home
						</button>
					</li>
					<li>
						<button
							type="button"
							title="About"
							className="text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
						>
							About
						</button>
					</li>
					<li>
						<button
							type="button"
							title="Services"
							className="text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
						>
							Services
						</button>
					</li>
					<li>
						<button
							type="button"
							title="Porfolio"
							className="text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
						>
							Porfolio
						</button>
					</li>
					<li>
						<button
							type="button"
							title="Get in touch"
							className="text-white rounded-full hover:text-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
						>
							Get in touch
						</button>
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
				</ul>
				<div>Copyright © Daniel Peñaloza</div>
			</div>
		</footer>
	);
}
