import React from "react";
import { InnovationIcon, LarryIcon } from "../assets/svg/index";

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative px-8 py-32 bg-gray-950 overflow-hidden"
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mx-auto max-w-6xl">
				<div className="relative flex flex-col justify-center gap-8 z-10">
					<div className="flex flex-col gap-2">
						<h1 className="text-5xl text-yellow-200 font-bold">
							Daniel Peñaloza
						</h1>
						<h2 className="text-3xl text-gray-400 font-medium">
							Fullstack developer
						</h2>
					</div>
					<p>
						I&apos;m Daniel Peñaloza, a Full-Stack Web Developer
						with a deep love for creating seamless, user-friendly
						web applications.
					</p>
					<ul className="text-gray-300">
						<li>💻 Front-end: React, Next.js, JavaScript</li>
						<li>🚀 Back-end: Node.js</li>
						<li>🌐 Full-Stack Development</li>
						<li>🎨 UI/UX Design Principles</li>
						<li>🌟 Responsive Web Development</li>
						<li>📈 Database Management</li>
						<li>🛡️ Security Best Practices</li>
						<li>🎨 Figma (UI/UX Design)</li>
					</ul>
					<InnovationIcon className="hidden sm:block lg:hidden absolute bottom-0 right-0 h-56" />
				</div>
				<div className="hidden lg:block">
					<InnovationIcon />
				</div>
			</div>
		</section>
	);
}
