import { EXPERIENCE } from "@/constants";
import { ExperienceCard } from "..";

export default function ExperienceSection() {
	return (
		<section
			id="experience"
			className="flex w-full flex-col items-center justify-center gap-8 bg-indigo-100 px-4 py-24 md:py-48"
		>
			<div className="flex flex-col gap-6 md:items-center">
				<h1 className="font-montserrat text-5xl font-bold text-indigo-900">
					Experience
				</h1>
				<p className="font-montserrat text-xl font-medium text-indigo-400">
					This is my work experience in the IT industry
				</p>
			</div>
			<div className="flex w-full flex-col items-center overflow-hidden">
				{EXPERIENCE.map((item, index) => (
					<ExperienceCard
						key={item.jobTitle}
						item={item}
						isLast={index === EXPERIENCE.length - 1}
					/>
				))}
			</div>
		</section>
	);
}
