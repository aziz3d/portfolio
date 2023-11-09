"use client";

import { ChevronIcon } from "@/assets/svg";
import React, { useState } from "react";
import * as DATA from "../data/experience.json";

const FILTERS = [
	"React",
	"React Native",
	"Next",
	"Node",
	"PHP",
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"Tailwind",
	"Bootstrap",
	"SASS",
	"Git",
];

export default function Experience() {
	const [showMore, setShowMore] = useState(false);
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

	/**
	 * Handles the click event of a filter button.
	 *
	 * This code defines a function handleFilterClick that takes a string argument filter. If filter is already in the selectedFilters array, it is removed. If it is not in the array, it is added. If the length of selectedFilters is greater than 3, a boolean variable showMore is set to true. If selectedFilters length is less than 7, showMore is set to false.
	 *
	 * @param {string} filter - The filter that was clicked.
	 * @return {void} This function does not return anything.
	 */
	const handleFilterClick = (filter: string) => {
		if (selectedFilters.includes(filter)) {
			setSelectedFilters(selectedFilters.filter((f) => f !== filter));

			if (selectedFilters.length < 7) {
				setShowMore(false);
			}
		} else {
			setSelectedFilters([...selectedFilters, filter]);

			if (selectedFilters.length > 3) {
				setShowMore(true);
			}
		}
	};

	/**
	 * Set the remaining filters
	 *
	 * The callback function checks if the current filter is included in the selectedFilters array using the includes method. If it is not included, the callback function returns true, indicating that the element should be included in the leftFilters array.
	 */
	const leftFilters = FILTERS.filter(
		(filter) => !selectedFilters.includes(filter)
	);

	return (
		<section
			id="experience"
			className="flex justify-center items-center px-8 py-24 bg-gradient-to-b from-gray-900 to-gray-950"
		>
			<div className="flex flex-col justify-center items-start gap-4 w-full max-w-6xl">
				<h2 className="text-white text-3xl font-bold">Experience</h2>
				<div
					className={`flex ${
						showMore
							? "flex-col justify-center"
							: "items-center gap-4"
					} text-gray-300`}
				>
					<span className="flex items-center h-8">Tags:</span>
					<ul className="flex gap-2 flex-wrap text-gray-400">
						{selectedFilters.map((filter) => (
							<li
								key={filter}
								title={`Deselect ${filter}`}
								onClick={() => handleFilterClick(filter)}
								className="px-2.5 py-1 bg-gray-800 hover:bg-gray-600 rounded-full cursor-pointer duration-100"
							>
								{filter}
							</li>
						))}
						{selectedFilters.length > 0 && (
							<li>
								<div className="w-0.5 h-8 bg-gray-800" />
							</li>
						)}
						{leftFilters
							.slice(0, showMore ? FILTERS.length : 5)
							.map((filter) => (
								<li
									key={filter}
									title={`Select ${filter}`}
									onClick={() => handleFilterClick(filter)}
									className="px-2.5 py-1 bg-gray-800 hover:bg-gray-600 rounded-full cursor-pointer duration-100"
								>
									{filter}
								</li>
							))}
						<li>
							<button
								type="button"
								onClick={() => setShowMore(!showMore)}
								className="flex items-center gap-2 px-2.5 py-1 text-gray-400 fill-gray-400 hover:text-gray-200 hover:fill-gray-200 cursor-pointer duration-100"
							>
								{showMore ? "Less tags" : "More tags"}
								<ChevronIcon
									className={`w-3 h-3 fill-inherit ${
										!showMore && "scale-flip"
									} duration-100`}
								/>
							</button>
						</li>
					</ul>
				</div>
				<div className="self-start flex flex-col items-center gap-4 mt-4">
					<ul className="flex flex-col gap-4">
						{DATA.map((item) => (
							<li
								key={item.company}
								className="flex-1 flex gap-4 w-full overflow-hidden"
							>
								<div className="flex flex-col justify-center items-center flex-grow-0 gap-4">
									<div className="h-10 w-10 min-h-[2.5rem] min-w-[2.5rem] max-h-[2.5rem] max-w-[2.5rem] bg-gray-700 rounded-full" />
									<div className="h-full w-1 bg-gray-800 rounded-full" />
								</div>
								<div className="flex flex-col flex-grow gap-4 text-gray-300">
									<div className="flex items-center overflow-hidden">
										<span className="flex items-center h-10 max-h-[2.5rem] text-lg text-gray-200 font-semibold">
											{item.company}
										</span>
									</div>
									<div className="flex flex-col gap-1">
										<div className="flex items-center gap-2">
											<span className="text-gray-200 font-semibold">
												Working period
											</span>
											<span className="text-gray-400">
												(1 año 7 meses)
											</span>
										</div>
										<div className="flex gap-2 pl-4">
											<div className="flex items-center gap-2">
												<span className="text-gray-200 font-semibold">
													from:
												</span>
												<span className="text-gray-400">
													{item.from}
												</span>
											</div>
											<span className="text-gray-400">
												/
											</span>
											<div className="flex items-center gap-2">
												<span className="text-gray-200 font-semibold">
													to:
												</span>
												<span className="text-gray-400">
													{item.to}
												</span>
											</div>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-gray-200 font-semibold">
											Job title:
										</span>
										<span className="text-gray-400">
											{item.jobTitle}
										</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-gray-200 font-semibold">
											Modality:
										</span>
										<span className="text-gray-400">
											{item.modality}
										</span>
									</div>
									<div className="flex flex-col">
										<span className="text-gray-200 font-semibold">
											Description:
										</span>
										<p className="text-gray-400">
											{item.description}
										</p>
									</div>
									<div className="flex flex-col gap-1">
										<span className="text-base text-gray-200 font-semibold">
											Tags:
										</span>
										<ul className="flex flex-wrap gap-2 text-gray-400">
											{item.tags &&
												item.tags.map((tag) => (
													<li
														key={tag}
														title={`Deselect ${tag}`}
														onClick={() =>
															handleFilterClick(
																tag
															)
														}
														className={`px-2.5 py-1 ${
															selectedFilters.includes(
																tag
															)
																? "bg-gray-600 hover:bg-gray-400 text-gray-200"
																: "bg-gray-800 hover:bg-gray-600"
														} rounded-full cursor-pointer duration-100`}
													>
														{tag}
													</li>
												))}
										</ul>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
