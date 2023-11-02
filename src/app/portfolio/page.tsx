import { ArrowUpRightSquareIcon, NodejsIcon, ReactIcon } from "@/assets/svg";
import { Footer, Navbar } from "@/components";
import Image from "next/image";
import React from "react";

export default function Portfolio() {
	return (
		<>
			<Navbar />
			<section
				id="portfolio"
				className="flex flex-col justify-center items-center gap-16 py-28 bg-gray-950"
			>
				<h1 className="text-5xl text-yellow-200 font-bold">
					Portfolio
				</h1>
				<div className="grid grid-cols-3 grid-rows-3 gap-8 px-8 w-full">
					<div className="relative col-span-3 col-start-1 col-end-4 flex flex-col justify-between gap-4 p-8 h-72 w-full bg-gradient-to-tl from-gray-800 to-gray-600 hover:from-gray-800 hover:to-gray-500 rounded-3xl cursor-pointer group overflow-hidden hover:outline hover:outline-offset-4 hover:outline-gray-600 duration-150">
						<div className="flex justify-between items-center gap-4 z-10">
							<h3 className="text-3xl text-gray-400 font-bold group-hover:text-gray-200 select-none duration-200 group-hover:underline group-hover:underline-offset-4">
								Portfolio
							</h3>
							<div className="flex items-center gap-4 self-end">
								<button
									type="button"
									title="React"
									className="flex justify-center items-center gap-2 px-4 py-2.5 w-min hover:bg-gray-500 rounded-full duration-200 cursor-pointer group/tag select-none"
								>
									<span className="text-gray-300 font-medium">
										Open
									</span>
									<ArrowUpRightSquareIcon className="w-4 h-4 fill-gray-300" />
								</button>
								<div className="h-8 w-[2px] bg-gray-500" />
								<button
									type="button"
									title="React"
									className="flex justify-center items-center gap-2 px-4 py-2.5 w-min bg-gray-500 bg-opacity-60 hover:bg-opacity-100 rounded-full duration-200 cursor-pointer group/tag select-none"
								>
									<ReactIcon className="w-5 h-5 fill-blue-400" />
									<span className="text-gray-400 font-semibold">
										React
									</span>
								</button>
								<button
									type="button"
									title="Node"
									className="flex justify-center items-center gap-2 px-4 py-2.5 w-min bg-gray-500 bg-opacity-60 hover:bg-opacity-100 rounded-full duration-200 cursor-pointer group/tag select-none"
								>
									<NodejsIcon className="w-5 h-5 fill-emerald-400" />
									<span className="text-gray-400 font-semibold">
										Node
									</span>
								</button>
							</div>
						</div>
						<p className="max-w-xs text-gray-500 font-medium group-hover:text-gray-400 select-none duration-200 z-10">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
						<div className="absolute -bottom-20 -right-60 -rotate-12 grid grid-cols-2 grid-rows-2 gap-4 z-0 opacity-60 group-hover:opacity-80 duration-500">
							<Image
								src="/portfolio0.png"
								alt="Portfolio"
								width={500}
								height={350}
								objectFit="contain"
								className="col-start-1 col-end-2 row-start-1 row-end-2 mt-16 rounded-3xl"
							/>
							<Image
								src="/portfolio2.png"
								alt="Portfolio"
								width={500}
								height={350}
								objectFit="contain"
								className="col-start-1 col-end-2 row-start-2 row-end-3 rounded-3xl"
							/>
							<Image
								src="/portfolio1.png"
								alt="Portfolio"
								width={500}
								height={350}
								objectFit="contain"
								className="col-start-2 col-end-3 row-start-2 row-end-3 rounded-3xl"
							/>
						</div>
					</div>
					<div className="col-start-1 col-end-2 row-span-2 row-start-2 row-end-4 w-full bg-gray-600 rounded-3xl"></div>
					<div className="col-span-2 col-start-2 col-end-4 row-start-2 row-end-3 w-full bg-gray-600 rounded-3xl"></div>
					<div className="col-start-2 col-end-3 row-start-3 row-end-4 w-full bg-gray-600 rounded-3xl"></div>
					<div className="col-start-3 col-end-4 row-start-3 row-end-4 w-full bg-gray-600 rounded-3xl"></div>
				</div>
			</section>
			<Footer />
		</>
	);
}
