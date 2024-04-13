import { ArrowUpRightSquareIcon, ImagePlaceholder } from "@/assets/svg";
import { ProjectCard } from "@/components";

export default function Projects() {
	return (
		<section
			id="projects"
			className="flex w-full flex-col items-center justify-center gap-8 pb-48 pt-24"
		>
			<div className="flex flex-col items-center gap-6">
				<h1 className="font-montserrat text-5xl font-bold text-neutral-800">
					My projects
				</h1>
				<p className="font-montserrat text-xl font-medium text-neutral-500">
					Here are some of my best projects that showcase my skills
				</p>
			</div>
			<div className="grid grid-cols-4 gap-6">
				<div className="flex max-w-[368px] flex-col gap-4">
					<div className="flex h-[257px] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-200">
						<ImagePlaceholder />
					</div>
					<div className="flex gap-2">
						<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
							Front-end
						</span>
						<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
							Figma
						</span>
						<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
							Back-end
						</span>
					</div>
					<span className="font-montserrat text-2xl font-bold text-neutral-800">
						Project title
					</span>
					<p className="line-clamp-3 font-montserrat text-lg text-neutral-500">
						Description of the project. It can be a bit longer to
						showcase the description.
					</p>
					<div className="flex gap-4">
						<button
							type="button"
							title="Details"
							className="flex items-center justify-center gap-2 rounded-lg bg-indigo-400 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-300"
						>
							Details
						</button>
						<button
							type="button"
							title="Open"
							className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-indigo hover:text-indigo-400"
						>
							Open
							<ArrowUpRightSquareIcon className="h-4 w-4" />
						</button>
					</div>
				</div>
				<div className="flex max-w-[368px] flex-col gap-4">
					<div className="flex h-[257px] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-200">
						<ImagePlaceholder />
					</div>
					<div className="flex gap-2">
						<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
							Front-end
						</span>
						<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
							Figma
						</span>
						<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
							Back-end
						</span>
					</div>
					<span className="font-montserrat text-2xl font-bold text-neutral-800">
						Project title
					</span>
					<p className="line-clamp-3 font-montserrat text-lg text-neutral-500">
						Description of the project. It can be a bit longer to
						showcase the description.
					</p>
					<div className="flex gap-4">
						<button
							type="button"
							title="Details"
							className="flex items-center justify-center gap-2 rounded-lg bg-indigo-400 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-300"
						>
							Details
						</button>
						<button
							type="button"
							title="Open"
							className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-indigo hover:text-indigo-400"
						>
							Open
							<ArrowUpRightSquareIcon className="h-4 w-4" />
						</button>
					</div>
				</div>
				<div className="flex max-w-[368px] flex-col gap-4">
					<div className="flex h-[257px] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-200">
						<ImagePlaceholder />
					</div>
					<div className="flex gap-2">
						<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
							Front-end
						</span>
						<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
							Figma
						</span>
						<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
							Back-end
						</span>
					</div>
					<span className="font-montserrat text-2xl font-bold text-neutral-800">
						Project title
					</span>
					<p className="line-clamp-3 font-montserrat text-lg text-neutral-500">
						Description of the project. It can be a bit longer to
						showcase the description.
					</p>
					<div className="flex gap-4">
						<button
							type="button"
							title="Details"
							className="flex items-center justify-center gap-2 rounded-lg bg-indigo-400 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-300"
						>
							Details
						</button>
						<button
							type="button"
							title="Open"
							className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-indigo hover:text-indigo-400"
						>
							Open
							<ArrowUpRightSquareIcon className="h-4 w-4" />
						</button>
					</div>
				</div>
				<div className="flex max-w-[368px] flex-col gap-4">
					<div className="flex h-[257px] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-200">
						<ImagePlaceholder />
					</div>
					<div className="flex gap-2">
						<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
							Front-end
						</span>
						<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
							Figma
						</span>
						<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
							Back-end
						</span>
					</div>
					<span className="font-montserrat text-2xl font-bold text-neutral-800">
						Project title
					</span>
					<p className="line-clamp-3 font-montserrat text-lg text-neutral-500">
						Description of the project. It can be a bit longer to
						showcase the description.
					</p>
					<div className="flex gap-4">
						<button
							type="button"
							title="Details"
							className="flex items-center justify-center gap-2 rounded-lg bg-indigo-400 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-300"
						>
							Details
						</button>
						<button
							type="button"
							title="Open"
							className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-indigo hover:text-indigo-400"
						>
							Open
							<ArrowUpRightSquareIcon className="h-4 w-4" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
