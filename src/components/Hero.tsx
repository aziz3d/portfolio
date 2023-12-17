import React from "react";
import { InnovationIcon, LarryIcon } from "../assets/svg/index";

export default function Hero() {
	return (
		<section
			id="hero"
			className="light:bg-gray-200 relative overflow-hidden px-8 py-32 dark:bg-gray-950"
		>
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-24 lg:grid-cols-2">
				<div className="relative z-10 flex flex-col justify-center gap-8">
					<div className="flex flex-col gap-2">
						<h1 className="text-5xl font-bold text-yellow-200">
							Daniel Peñaloza
						</h1>
						<h2 className="text-3xl font-medium text-gray-400">
							Fullstack developer
						</h2>
					</div>
					<p className="text-gray-300">
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
					<InnovationIcon className="absolute bottom-0 right-0 hidden h-56 sm:block lg:hidden" />
				</div>
				<div className="hidden lg:block">
					<InnovationIcon />
				</div>
			</div>
		</section>
	);
}
