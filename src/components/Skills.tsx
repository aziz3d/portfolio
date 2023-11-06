import {
	AngularIcon,
	AstroIcon,
	AzureIcon,
	CSSIcon,
	FigmaIcon,
	GitIcon,
	HTMLIcon,
	JavaScriptIcon,
	NodejsIcon,
	PHPIcon,
	PythonIcon,
	ReactIcon,
	SassIcon,
	ServerIcon,
	VercelIcon,
} from "@/assets/svg";

export default function Skills() {
	return (
		<section id="section" className="flex justify-center items-center p-8 bg-gray-950">
			<div className="relative flex flex-col gap-8 p-6 sm:p-8 w-full max-w-6xl bg-gradient-to-tr from-yellow-400 via-yellow-300 to-yellow-200 rounded-2xl shadow-inner">
				<div className="flex flex-col gap-4 z-10">
					<h2 className="text-yellow-600 text-3xl font-bold">
						Skills
					</h2>
					<p className="text-gray-800 text-lg font-medium">
						These are the tools and technologies I wield to create
						seamless, modern web applications.
						<br />
						Proficient in a diverse tech stack, I specialize in:
					</p>
				</div>
				<div className="flex justify-center items-center flex-wrap gap-4 z-10">
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<JavaScriptIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							JavaScript
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<ReactIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							React
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<ReactIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							React Native
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<VercelIcon className="w-5 h-5 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							Next
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<PythonIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							Python
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<NodejsIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							Node
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<FigmaIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							Figma
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<PHPIcon className="w-10 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							Figma
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<HTMLIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							HTML 5
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<CSSIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							CSS 3
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<SassIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							Sass
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<AstroIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							Astro
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<AngularIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							Angular
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<GitIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							Git
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<AzureIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							Azure
						</span>
					</div>
					<div className="flex justify-center items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 h-14 bg-yellow-400 hover:bg-yellow-200 hover:outline hover:outline-offset-4 hover:outline-yellow-200 rounded-full duration-200">
						<ServerIcon className="w-8 h-8 fill-yellow-800" />
						<span className="text-sm sm:text-base text-yellow-800 font-semibold">
							Server
						</span>
					</div>
				</div>
				<div className="absolute top-16 left-4 grid grid-cols-3 grid-rows-3 gap-4 w-fit opacity-40 z-0">
					<div className="h-7 w-7 rounded-full bg-yellow-500" />
					<div className="h-7 w-7 rounded-full bg-yellow-500" />
					<div className="h-7 w-7 rounded-full bg-yellow-500" />
					<div className="h-7 w-7 rounded-full bg-yellow-500" />
					<div className="h-7 w-7 rounded-full bg-yellow-500" />
					<div className="h-7 w-7 rounded-full bg-yellow-500" />
					<div className="h-7 w-7 rounded-full bg-yellow-500" />
					<div className="h-7 w-7 rounded-full bg-yellow-500" />
					<div className="h-7 w-7 rounded-full bg-yellow-500" />
				</div>
				<div className="absolute bottom-8 right-14 grid grid-cols-3 grid-rows-3 gap-4 w-fit opacity-20 z-0">
					<div className="h-10 w-10 rounded-full bg-yellow-500" />
					<div className="h-10 w-10 rounded-full bg-yellow-500" />
					<div className="h-10 w-10 rounded-full bg-yellow-500" />
					<div className="h-10 w-10 rounded-full bg-yellow-500" />
					<div className="h-10 w-10 rounded-full bg-yellow-500" />
					<div className="h-10 w-10 rounded-full bg-yellow-500" />
					<div className="h-10 w-10 rounded-full bg-yellow-500" />
					<div className="h-10 w-10 rounded-full bg-yellow-500" />
					<div className="h-10 w-10 rounded-full bg-yellow-500" />
				</div>
			</div>
		</section>
	);
}
