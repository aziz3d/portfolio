import { ArrowIcon } from "@/assets/svg";
import React from "react";

export default function Services() {
	return (
		<section
			id="services"
			className="flex flex-col items-center gap-10 py-20 bg-gray-950"
		>
			<h2 className="text-white text-3xl font-bold">Services</h2>
			<div className="flex gap-8">
				<div className="flex flex-col justify-between gap-2 p-8 max-w-sm bg-gray-900 hover:bg-yellow-300 rounded-2xl outline-offset-4 hover:outline hover:outline-offset-4 hover:outline-yellow-200 duration-75 group">
					<h4 className="text-white text-sm font-bold uppercase group-hover:text-yellow-600">
						App development
					</h4>
					<div>
						<h3 className="text-yellow-200 text-2xl font-bold group-hover:text-gray-800">
							iOS & Android
						</h3>
						<p className="mt-2 text-gray-400 text-base group-hover:text-gray-600">
							Let me code your mobile app oriented to
							multiplatform use, from the ground up by listening
							to your idea, analyzing your needs, designing your
							project, implementing that design, and delivering to
							all the app stores.
						</p>
						<ul className="mt-4 space-y-2 text-gray-200 text-base group-hover:text-yellow-700">
							<li className="flex items-center gap-2">
								<span className="h-1.5 w-1.5 bg-yellow-400 rounded-full group-hover:bg-yellow-700" />
								<span>+5 projects</span>
							</li>
							<li className="flex items-center gap-2">
								<span className="h-1.5 w-1.5 bg-yellow-400 rounded-full group-hover:bg-yellow-700" />
								<span>React Native</span>
							</li>
						</ul>
					</div>
					<div className="flex justify-end w-full">
						<button
							type="button"
							className="flex gap-2 hover:gap-6 text-yellow-400 fill-yellow-400 hover:text-yellow-200 hover:fill-yellow-200 duration-200 group-hover:text-gray-800 group-hover:fill-gray-800 group-hover:hover:text-yellow-600 group-hover:hover:fill-yellow-600"
						>
							<span>See more</span>
							<ArrowIcon className="h-6 fill-inherit" />
						</button>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-2 p-8 max-w-sm bg-gray-900 hover:bg-yellow-300 rounded-2xl outline-offset-4 hover:outline hover:outline-offset-4 hover:outline-yellow-200 duration-75 group">
					<h4 className="text-white text-sm font-bold uppercase group-hover:text-yellow-600">
						Web development
					</h4>
					<div>
						<h3 className="text-yellow-200 text-2xl font-bold group-hover:text-gray-800">
							Websites & apps
						</h3>
						<p className="mt-2 text-gray-400 text-base group-hover:text-gray-600">
							Let me code your website or web app, from the ground
							up by listening to your idea, analyzing your needs,
							designing your project, implementing that design,
							and delivering to the web.
						</p>
						<ul className="mt-4 space-y-2 text-gray-200 text-base group-hover:text-yellow-700">
							<li className="flex items-center gap-2">
								<span className="h-1.5 w-1.5 bg-yellow-400 rounded-full group-hover:bg-yellow-700" />
								<span>+9 projects</span>
							</li>
							<li className="flex items-center gap-2">
								<span className="h-1.5 w-1.5 bg-yellow-400 rounded-full group-hover:bg-yellow-700" />
								<span>React.js, Next.js & Astro</span>
							</li>
							<li className="flex items-center gap-2">
								<span className="h-1.5 w-1.5 bg-yellow-400 rounded-full group-hover:bg-yellow-700" />
								<span>Node.js</span>
							</li>
						</ul>
					</div>
					<div className="flex justify-end w-full">
						<button
							type="button"
							className="flex gap-2 hover:gap-6 text-yellow-400 fill-yellow-400 hover:text-yellow-200 hover:fill-yellow-200 duration-200 group-hover:text-gray-800 group-hover:fill-gray-800 group-hover:hover:text-yellow-600 group-hover:hover:fill-yellow-600"
						>
							<span>See more</span>
							<ArrowIcon className="h-6 fill-inherit" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
