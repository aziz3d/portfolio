import React from "react";

export default function Navbar() {
	return (
		<nav className="flex justify-between p-8 w-screen bg-gray-950">
			<div>Juan Peñaloza</div>
			<div>
				<ul className="flex gap-8">
					<li>About</li>
					<li>Services</li>
					<li>Projects</li>
					<li>Contact me</li>
					<li>Download CV</li>
				</ul>
			</div>
		</nav>
	);
}
