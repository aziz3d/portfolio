import { ArrowIcon } from "@/assets/svg";
import { Footer, Navbar } from "@/components";
import React from "react";

export default function Services() {
	return (
		<>
			<Navbar />
			<section
				id="services"
				className="flex flex-col items-center justify-center gap-16 bg-gradient-to-b from-gray-950 to-gray-900 px-8 pt-16 xl:flex-row"
			>
				<div className="flex max-w-[500px] flex-col gap-8">
					<h1 className="text-5xl font-bold text-yellow-200">
						Services
					</h1>
					<p className="text-xl text-gray-400">
						Digital Development Excellence: Empower your digital
						presence with our all-encompassing development services.
                        <br />
                        <br />
						From captivating mobile apps to dynamic websites, we
						specialize in crafting tailored solutions that blend
						innovation with functionality. With expertise in both
						iOS and Android platforms, we deliver seamless and
						user-friendly experiences.
						<br />
						<br />
						<span className="font-bold text-yellow-200 underline underline-offset-4">
							Let&apos;s connect and bring your visions to life!
						</span>
					</p>
				</div>
				<div className="flex flex-col gap-8 px-8 sm:flex-row">
					<div className="group flex max-w-sm flex-col justify-between gap-2 rounded-2xl bg-gray-900 p-8 outline-offset-4 duration-75 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200">
						<h4 className="text-sm font-bold uppercase text-white group-hover:text-yellow-600">
							App development
						</h4>
						<div>
							<h3 className="text-2xl font-bold text-yellow-200 group-hover:text-gray-800">
								iOS & Android
							</h3>
							<p className="mt-2 text-base text-gray-400 group-hover:text-gray-600">
								Let me code your mobile app oriented to
								multiplatform use, from the ground up by
								listening to your idea, analyzing your needs,
								designing your project, implementing that
								design, and delivering to all the app stores.
							</p>
							<ul className="mt-4 space-y-2 text-base text-gray-200 group-hover:text-yellow-700">
								<li className="flex items-center gap-2">
									<span className="h-1.5 w-1.5 rounded-full bg-yellow-400 group-hover:bg-yellow-700" />
									<span>+5 projects</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="h-1.5 w-1.5 rounded-full bg-yellow-400 group-hover:bg-yellow-700" />
									<span>React Native</span>
								</li>
							</ul>
						</div>
						<div className="flex w-full justify-end">
							<button
								type="button"
								className="flex gap-2 fill-yellow-400 text-yellow-400 duration-200 hover:gap-6 hover:fill-yellow-200 hover:text-yellow-200 group-hover:fill-gray-800 group-hover:text-gray-800 group-hover:hover:fill-yellow-600 group-hover:hover:text-yellow-600"
							>
								<span>See more</span>
								<ArrowIcon className="h-6 fill-inherit" />
							</button>
						</div>
					</div>
					<div className="group flex max-w-sm flex-col justify-between gap-2 rounded-2xl bg-gray-900 p-8 outline-offset-4 duration-75 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200">
						<h4 className="text-sm font-bold uppercase text-white group-hover:text-yellow-600">
							Web development
						</h4>
						<div>
							<h3 className="text-2xl font-bold text-yellow-200 group-hover:text-gray-800">
								Websites & apps
							</h3>
							<p className="mt-2 text-base text-gray-400 group-hover:text-gray-600">
								Let me code your website or web app, from the
								ground up by listening to your idea, analyzing
								your needs, designing your project, implementing
								that design, and delivering to the web.
							</p>
							<ul className="mt-4 space-y-2 text-base text-gray-200 group-hover:text-yellow-700">
								<li className="flex items-center gap-2">
									<span className="h-1.5 w-1.5 rounded-full bg-yellow-400 group-hover:bg-yellow-700" />
									<span>+9 projects</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="h-1.5 w-1.5 rounded-full bg-yellow-400 group-hover:bg-yellow-700" />
									<span>React.js, Next.js & Astro</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="h-1.5 w-1.5 rounded-full bg-yellow-400 group-hover:bg-yellow-700" />
									<span>Node.js</span>
								</li>
							</ul>
						</div>
						<div className="flex w-full justify-end">
							<button
								type="button"
								className="flex gap-2 fill-yellow-400 text-yellow-400 duration-200 hover:gap-6 hover:fill-yellow-200 hover:text-yellow-200 group-hover:fill-gray-800 group-hover:text-gray-800 group-hover:hover:fill-yellow-600 group-hover:hover:text-yellow-600"
							>
								<span>See more</span>
								<ArrowIcon className="h-6 fill-inherit" />
							</button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
