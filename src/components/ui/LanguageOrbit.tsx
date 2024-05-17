import React from "react";

const languages = [
	{ id: 1, icon: "typescript" },
	{ id: 2, icon: "javascript" },
	{ id: 3, icon: "python" },
	{ id: 4, icon: "html5" },
	{ id: 5, icon: "css3" },
	{ id: 6, icon: "react" },
];

export default function LanguageOrbit() {
	return (
		<div className="relative h-64 w-64">
			{languages.map((language, index) => (
				<div
					key={language.id}
					className={
						`
						absolute rounded-full bg-gray-200 animate-spin duration-3000",
						delay-${index * 300}ms` // Adjust delay for each orbit
					}
					style={{
						width: `${60 - index * 10}px`,
						height: `${60 - index * 10}px`,
					}} // Adjust size for each orbit
				>
					<span className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gray-300" />
				</div>
			))}
		</div>
	);
}
