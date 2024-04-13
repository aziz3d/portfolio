import { EXPERIENCE } from "@/constants";
import React from "react";

interface ExperienceCardInterface {
	item: (typeof EXPERIENCE)[0];
	isLast?: boolean;
}

export default function ExperienceCard({
	item,
	isLast = false,
}: ExperienceCardInterface) {
	const {
		jobTitle,
		description,
		company,
		startDate,
		endDate,
		modality,
		tags,
	} = item;

	if (!isLast) {
		return (
			<div key={item.jobTitle} className="flex gap-4">
				<div className="flex flex-col items-center overflow-hidden pt-4">
					<span className="h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] rounded-full bg-indigo-300" />
					<span className="min-w-1 h-full min-h-full w-1 bg-indigo-300" />
				</div>
				<div className="flex max-w-[650px] flex-col gap-4 py-4">
					<span className="font-montserrat text-2xl font-bold leading-7 text-indigo-900">
						{jobTitle}
					</span>
					<span className="font-montserrat font-medium text-indigo-900">
						{startDate} - {endDate}
					</span>
					<p className="font-medium text-indigo-900">{description}</p>
                    <hr className="border-indigo-300" />
					<div className="flex gap-2">
						{tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full bg-indigo-300 px-2.5 py-1 text-sm font-medium text-indigo-50"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="flex gap-4">
				<div className="flex flex-col items-center overflow-hidden">
					<span className="min-w-1 h-4 min-h-[1rem] w-1 bg-indigo-300" />
					<span className="h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] rounded-full bg-indigo-300" />
					<span className="min-w-1 h-full min-h-full w-1 bg-gradient-to-b from-indigo-300 via-indigo-100" />
				</div>
				<div className="flex max-w-[650px] flex-col gap-4 py-4">
					<span className="font-montserrat text-2xl font-bold leading-7 text-indigo-900">
						{jobTitle}
					</span>
					<span className="font-montserrat font-medium text-indigo-900">
						{startDate} - {endDate}
					</span>
					<p className="font-medium text-indigo-900">{description}</p>
					<hr className="border-indigo-300" />
					<div className="flex gap-2">
						{tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full bg-indigo-300 px-2.5 py-1 text-sm font-medium text-indigo-50"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		);
	}
}
