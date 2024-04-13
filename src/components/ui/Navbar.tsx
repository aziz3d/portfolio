import Link from 'next/link';
import React from 'react'

export default function Navbar() {
  return (
		<nav className="flex h-[88px] w-full items-center justify-center gap-12">
			<div className="flex max-w-[1280px] shrink grow basis-0 flex-col items-start justify-start gap-8 px-4 py-8">
				<div className="flex items-center justify-between gap-6 self-stretch">
					<Link
						href={"/"}
						title="Index"
						className="font-montserrat text-lg font-medium leading-6 text-neutral-500"
					>
						Daniel Peñaloza
					</Link>
					<div className="hidden gap-6 md:flex">
						<Link
							href={"/projects"}
							rel="noopener noreferrer"
							className="font-montserrat text-lg font-medium leading-6 text-neutral-500 hover:text-indigo-500"
						>
							Projects
						</Link>
						<Link
							href={"/#experience"}
							rel="noopener noreferrer"
							className="font-montserrat text-lg font-medium leading-6 text-neutral-500 hover:text-indigo-500"
						>
							Experience
						</Link>
						<Link
							href={"/#work-with-me"}
							rel="noopener noreferrer"
							className="font-montserrat text-lg font-medium leading-6 text-neutral-500 hover:text-indigo-500"
						>
							Work with me
						</Link>
						<Link
							href={"/#download"}
							rel="noopener noreferrer"
							className="font-montserrat text-lg font-medium leading-6 text-neutral-500 hover:text-indigo-500"
						>
							Download CV
						</Link>
					</div>
				</div>
			</div>
		</nav>
  );
}
