import { ArrowUpRightSquareIcon, ImagePlaceholder } from "@/assets/svg";
import Link from "next/link";
import React from "react";

interface ProjectInterface {
	title: string;
	description: string;
	tags: string[];
	image: string;
	url: string;
	blogUrl: string
}

interface ProjectCardInterface {
	project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardInterface) {
	const { title, description, image, url, blogUrl, tags } = project;

	return (
		<div className="flex max-w-[368px] flex-col gap-4">
			<div className="flex h-[257px] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-200">
				<ImagePlaceholder />
			</div>
			<div className="flex gap-2">
				{tags &&
					tags.map((tag) => (
						<span
							key={tag}
							className="rounded-lg bg-indigo-300 px-1.5 py-1 font-montserrat text-sm font-medium text-indigo-50"
						>
							{tag}
						</span>
					))}
			</div>
			<span className="font-montserrat text-2xl font-bold text-neutral-800">
				{title}
			</span>
			<p className="line-clamp-3 font-montserrat text-lg text-neutral-500">
				{description}
			</p>
			<div className="flex gap-4">
				<Link
					href={blogUrl}
					title="Details"
					className="flex items-center justify-center gap-2 rounded-lg bg-indigo-400 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-300"
				>
					Details
				</Link>
				<Link
					href={url}
					rel="noopener noreferrer"
					target={"_blank"}
					title="Open code"
					className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-indigo-500 hover:text-indigo-400"
				>
					Open code
					<ArrowUpRightSquareIcon className="h-4 w-4" />
				</Link>
			</div>
		</div>
	);
}
