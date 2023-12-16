"use client";

import { ChevronIcon } from "@/assets/svg";
import React, { useState } from "react";
import * as DATA from "../data/experience.json";
import getFormat, { formatDateUTC } from "@/utils/format";

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
			className="flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-950 px-8 py-24"
		>
			<div className="flex w-full max-w-6xl flex-col items-start justify-center gap-4">
				<h2 className="text-3xl font-bold text-white">Experience</h2>
				<div
					className={`flex ${
						showMore
							? "flex-col justify-center"
							: "items-center gap-4"
					} text-gray-300`}
				>
					<span className="flex h-8 items-center">Tags:</span>
					<ul className="flex flex-wrap gap-2 text-gray-400">
						{selectedFilters.map((filter) => (
							<li
								key={filter}
								title={`Deselect ${filter}`}
								onClick={() => handleFilterClick(filter)}
								className="cursor-pointer rounded-full bg-gray-800 px-2.5 py-1 duration-100 hover:bg-gray-600"
							>
								{filter}
							</li>
						))}
						{selectedFilters.length > 0 && (
							<li>
								<div className="h-8 w-0.5 bg-gray-800" />
							</li>
						)}
						{leftFilters
							.slice(0, showMore ? FILTERS.length : 5)
							.map((filter) => (
								<li
									key={filter}
									title={`Select ${filter}`}
									onClick={() => handleFilterClick(filter)}
									className="cursor-pointer rounded-full bg-gray-800 px-2.5 py-1 duration-100 hover:bg-gray-600"
								>
									{filter}
								</li>
							))}
						<li>
							<button
								type="button"
								onClick={() => setShowMore(!showMore)}
								className="flex cursor-pointer items-center gap-2 fill-gray-400 px-2.5 py-1 text-gray-400 duration-100 hover:fill-gray-200 hover:text-gray-200"
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
				<div className="mt-4 flex w-full flex-col items-center gap-4 self-start">
					<ul className="flex w-full flex-col gap-4">
						{DATA.map((item) => (
							<li
								key={item.company}
								className="flex w-full flex-1"
							>
								<div className="flex flex-grow-0 flex-col items-center justify-center gap-4">
									<div className="h-10 max-h-[2.5rem] min-h-[2.5rem] w-10 min-w-[2.5rem] max-w-[2.5rem] rounded-full bg-gray-700" />
									<div className="h-full w-1 rounded-full bg-gray-800" />
								</div>
								<div className="flex flex-grow flex-col gap-4 truncate pl-4 text-gray-300">
									<div className="flex items-center">
										<span className="flex h-10 max-h-[2.5rem] items-center truncate text-lg font-semibold text-gray-200">
											{item.company}
										</span>
									</div>
									<div className="flex w-full flex-col gap-1">
										<div className="flex w-full items-center gap-2">
											<span className="font-semibold text-gray-200">
												Working period
											</span>
											<span className="text-gray-400">
												(1 año 7 meses)
											</span>
										</div>
										<div className="flex w-full flex-col gap-2 pl-4 sm:flex-row">
											<div className="flex items-center gap-2">
												<span className="font-semibold text-gray-200">
													from:
												</span>
												<span className="text-gray-400">
													{formatDateUTC(
														item.from
													).shortDate()}
												</span>
											</div>
											<span className="hidden text-gray-400 sm:block">
												/
											</span>
											<div className="flex items-center gap-2">
												<span className="font-semibold text-gray-200">
													to:
												</span>
												<span className="text-gray-400">
													{item.to}
												</span>
											</div>
										</div>
									</div>
									<div className="flex w-full items-center gap-2">
										<span className="font-semibold text-gray-200">
											Job title:
										</span>
										<span className="text-gray-400">
											{item.jobTitle}
										</span>
									</div>
									<div className="flex w-full items-center gap-2">
										<span className="font-semibold text-gray-200">
											Modality:
										</span>
										<span className="text-gray-400">
											{item.modality}
										</span>
									</div>
									<div className="flex w-full flex-col">
										<span className="font-semibold text-gray-200">
											Description:
										</span>
										<p className="w-full whitespace-break-spaces text-gray-400">
											{item.description}
										</p>
									</div>
									<div className="flex w-full flex-col gap-1">
										<span className="text-base font-semibold text-gray-200">
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
