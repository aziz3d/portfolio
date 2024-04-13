import {
	ArrowUpRightSquareIcon,
	ChevronIcon,
	FiverrIcon,
	GitHubIcon,
	ImagePlaceholder,
	LinkedInFullIcon,
	LinkedInIcon,
	LongArrowIcon,
} from "@/assets/svg";
import { ExperienceCard } from "@/components";
import { EXPERIENCE, FIVERR_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<section
				id="hero"
				className="flex w-full items-center justify-center py-48"
			>
				<div className="flex w-full max-w-[1280px] items-center gap-24 px-4 max-lg:flex-col">
					<div className="flex w-screen max-w-[521px] flex-col gap-7">
						<div className="flex items-center gap-4">
							<Link
								href={LINKEDIN_URL}
								target={"_blank"}
								rel="noopener noreferrer"
								className="group max-h-8 w-fit rounded-2xl bg-gradient-to-br from-linkedin-400 via-linkedin-200 to-linkedin-400 p-0.5 duration-500 ease-out hover:scale-110 hover:bg-gradient-to-t hover:from-linkedin-200 hover:via-linkedin-300 hover:to-linkedin-200"
							>
								<div className="relative flex w-[82px] items-center gap-1 rounded-full bg-linkedin-200 px-2 py-1.5 leading-4 text-linkedin duration-500 ease-out group-hover:w-[95px] group-hover:bg-linkedin-100">
									<LinkedInFullIcon className="h-4 min-w-[63px]" />
									<ChevronIcon className="h-3 w-3 rotate-90" />
								</div>
							</Link>
							<Link
								href={FIVERR_URL}
								target={"_blank"}
								rel="noopener noreferrer"
								className="group w-fit rounded-2xl bg-gradient-to-br from-fiverr-400 via-fiverr-200 to-fiverr-400 p-0.5 duration-500 ease-out hover:scale-110 hover:bg-gradient-to-t hover:from-fiverr-200 hover:via-fiverr-300 hover:to-fiverr-200"
							>
								<div className="relative flex max-h-8 w-[62px] items-center gap-1 rounded-full bg-fiverr-200 px-2 py-1.5 leading-4 text-fiverr duration-500 ease-out group-hover:w-[77px] group-hover:bg-fiverr-100">
									<FiverrIcon className="h-3.5 min-h-[0.875rem] w-11 min-w-[2.75rem]" />
									<ChevronIcon className="h-3 w-3 rotate-90" />
								</div>
							</Link>
						</div>
						<h1 className="font-montserrat text-[64px] font-bold leading-[4rem] text-neutral-800">
							Hi, I&apos;m a Web & Mobile Developer
						</h1>
						<span className="text-xl font-medium leading-6 text-neutral-500">
							I build beautiful and performant web and mobile
							applications.
						</span>
						<div className="flex gap-4">
							<Link
								href={"/projects"}
								rel="noopener noreferrer"
								title="View projects"
								className="rounded-lg px-4 py-2.5 font-semibold leading-6 text-indigo-500 outline outline-2 outline-indigo-500 duration-150 ease-in hover:text-indigo-400 hover:outline-indigo-400"
							>
								View projects
							</Link>
							<Link
								href={"#work-with-me"}
								rel="noopener noreferrer"
								title="Contact me"
								className="rounded-lg bg-indigo-500 px-4 py-2.5 font-semibold leading-6 text-white duration-150 ease-in hover:bg-indigo-400"
							>
								Contact me
							</Link>
						</div>
					</div>
					<div className="relative flex h-full w-[calc(100%-4rem)] items-center justify-center rounded-lg bg-neutral-200 max-2xl:mr-[3.75rem] lg:w-full">
						<ImagePlaceholder />
						<div className="absolute -bottom-[50px] -right-[50px]">
							<div className="relative h-[230px] w-[150px]">
								<div className="absolute left-[50px] top-0 h-[180px] w-[100px] rounded-lg bg-indigo-200" />
								<div className="absolute left-0 top-[130px] h-[100px] w-[100px] rounded-lg bg-indigo-300" />
								<div className="absolute left-[50px] top-[130px] h-[50px] w-[50px] rounded-bl-lg rounded-tr-lg bg-indigo-100" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				id="projects"
				className="flex w-full flex-col items-center justify-center gap-8 py-48"
			>
				<div className="flex flex-col items-center gap-6">
					<h1 className="font-montserrat text-5xl font-bold text-neutral-800">
						Featured projects
					</h1>
					<p className="font-montserrat text-xl font-medium text-neutral-500">
						Here are some of my best projects that showcase my
						skills
					</p>
				</div>
				<div className="grid grid-cols-2 gap-6 duration-300 ease-out xl:grid-cols-3 2xl:grid-cols-4">
					<div className="flex max-w-[368px] flex-col gap-4">
						<div className="flex h-[257px] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-200">
							<ImagePlaceholder />
						</div>
						<div className="flex gap-2">
							<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
								Front-end
							</span>
							<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
								Figma
							</span>
							<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
								Back-end
							</span>
						</div>
						<span className="font-montserrat text-2xl font-bold text-neutral-800">
							Project title
						</span>
						<p className="line-clamp-3 font-montserrat text-lg text-neutral-500">
							Description of the project. It can be a bit longer
							to showcase the description.
						</p>
						<div className="flex gap-4">
							<button
								type="button"
								title="Details"
								className="flex items-center justify-center gap-2 rounded-lg bg-indigo-400 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-300"
							>
								Details
							</button>
							<button
								type="button"
								title="Open"
								className="text-indigo flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold hover:text-indigo-400"
							>
								Open
								<ArrowUpRightSquareIcon className="h-4 w-4" />
							</button>
						</div>
					</div>
					<div className="flex max-w-[368px] flex-col gap-4">
						<div className="flex h-[257px] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-200">
							<ImagePlaceholder />
						</div>
						<div className="flex gap-2">
							<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
								Front-end
							</span>
							<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
								Figma
							</span>
							<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
								Back-end
							</span>
						</div>
						<span className="font-montserrat text-2xl font-bold text-neutral-800">
							Project title
						</span>
						<p className="line-clamp-3 font-montserrat text-lg text-neutral-500">
							Description of the project. It can be a bit longer
							to showcase the description.
						</p>
						<div className="flex gap-4">
							<button
								type="button"
								title="Details"
								className="flex items-center justify-center gap-2 rounded-lg bg-indigo-400 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-300"
							>
								Details
							</button>
							<button
								type="button"
								title="Open"
								className="text-indigo flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold hover:text-indigo-400"
							>
								Open
								<ArrowUpRightSquareIcon className="h-4 w-4" />
							</button>
						</div>
					</div>
					<div className="flex max-w-[368px] flex-col gap-4">
						<div className="flex h-[257px] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-200">
							<ImagePlaceholder />
						</div>
						<div className="flex gap-2">
							<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
								Front-end
							</span>
							<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
								Figma
							</span>
							<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
								Back-end
							</span>
						</div>
						<span className="font-montserrat text-2xl font-bold text-neutral-800">
							Project title
						</span>
						<p className="line-clamp-3 font-montserrat text-lg text-neutral-500">
							Description of the project. It can be a bit longer
							to showcase the description.
						</p>
						<div className="flex gap-4">
							<button
								type="button"
								title="Details"
								className="flex items-center justify-center gap-2 rounded-lg bg-indigo-400 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-300"
							>
								Details
							</button>
							<button
								type="button"
								title="Open"
								className="text-indigo flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold hover:text-indigo-400"
							>
								Open
								<ArrowUpRightSquareIcon className="h-4 w-4" />
							</button>
						</div>
					</div>
					<div className="flex max-w-[368px] flex-col gap-4">
						<div className="flex h-[257px] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-200">
							<ImagePlaceholder />
						</div>
						<div className="flex gap-2">
							<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
								Front-end
							</span>
							<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
								Figma
							</span>
							<span className="rounded-lg bg-indigo-400 px-1.5 py-1 font-montserrat text-sm font-semibold text-indigo-50">
								Back-end
							</span>
						</div>
						<span className="font-montserrat text-2xl font-bold text-neutral-800">
							Project title
						</span>
						<p className="line-clamp-3 font-montserrat text-lg text-neutral-500">
							Description of the project. It can be a bit longer
							to showcase the description.
						</p>
						<div className="flex gap-4">
							<button
								type="button"
								title="Details"
								className="flex items-center justify-center gap-2 rounded-lg bg-indigo-400 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-300"
							>
								Details
							</button>
							<button
								type="button"
								title="Open"
								className="text-indigo flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold hover:text-indigo-400"
							>
								Open
								<ArrowUpRightSquareIcon className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>
			</section>
			<section
				id="experience"
				className="flex w-full flex-col items-center justify-center gap-8 bg-indigo-100 px-4 py-48"
			>
				<div className="flex flex-col items-center gap-6">
					<h1 className="font-montserrat text-5xl font-bold text-indigo-900">
						Experience
					</h1>
					<p className="font-montserrat text-xl font-medium text-indigo-500">
						This is my work experience in the IT industry
					</p>
				</div>
				<div className="flex flex-col items-center">
					{EXPERIENCE.map((item, index) => (
						<ExperienceCard
							key={item.jobTitle}
							item={item}
							isLast={index === EXPERIENCE.length - 1}
						/>
					))}
				</div>
			</section>
			<section
				id="testimonials"
				className="flex w-full flex-col items-center justify-center gap-8 px-4 py-48"
			>
				<div className="flex flex-col items-center gap-6">
					<h1 className="font-montserrat text-5xl font-bold text-neutral-800">
						Testiomials
					</h1>
					<p className="font-montserrat text-xl font-medium text-neutral-500">
						This is my work experience in the IT industry
					</p>
				</div>
				<div className="flex flex-col items-center gap-6 pt-14">
					<svg
						width="54"
						height="54"
						viewBox="0 0 54 54"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clipPath="url(#clip0_77_596)">
							<path
								d="M39.6875 43.6562C37.4167 43.6562 35.3854 42.9688 33.5938 41.5938C31.8229 40.2188 30.6354 38.4375 30.0312 36.25C29.6146 34.7292 29.4062 33.125 29.4062 31.4375C29.4062 28.875 29.9062 26.2812 30.9062 23.6562C31.9062 21.0104 33.2812 18.5208 35.0312 16.1875C36.7812 13.8542 38.8021 11.6771 41.0938 9.65625C43.4062 7.61458 45.8854 5.82292 48.5312 4.28125L53.0625 8.8125C48.3542 12.5833 45.1354 15.5 43.4062 17.5625C41.6979 19.625 40.8125 21.6771 40.75 23.7188C43.2917 24.0104 45.4167 25.1042 47.125 27C48.8333 28.8958 49.6875 31.1146 49.6875 33.6562C49.6875 36.4271 48.7083 38.7917 46.75 40.75C44.8125 42.6875 42.4583 43.6562 39.6875 43.6562ZM12.1875 43.6562C9.91667 43.6562 7.88542 42.9688 6.09375 41.5938C4.32292 40.2188 3.13542 38.4375 2.53125 36.25C2.11458 34.7292 1.90625 33.125 1.90625 31.4375C1.90625 28.875 2.40625 26.2812 3.40625 23.6562C4.40625 21.0104 5.78125 18.5208 7.53125 16.1875C9.28125 13.8542 11.3021 11.6771 13.5938 9.65625C15.9062 7.61458 18.3854 5.82292 21.0312 4.28125L25.5625 8.8125C20.8542 12.5833 17.6354 15.5 15.9062 17.5625C14.1979 19.625 13.3125 21.6771 13.25 23.7188C15.7917 24.0104 17.9167 25.1042 19.625 27C21.3333 28.8958 22.1875 31.1146 22.1875 33.6562C22.1875 36.4271 21.2083 38.7917 19.25 40.75C17.3125 42.6875 14.9583 43.6562 12.1875 43.6562Z"
								fill="#262626"
							/>
						</g>
						<defs>
							<clipPath id="clip0_77_596">
								<rect width="54" height="54" fill="white" />
							</clipPath>
						</defs>
					</svg>
					<p className="max-w-[850px] text-center font-montserrat text-2xl text-neutral-800">
						“Nullam vitae vestibulum ex, quis ornare lectus. Morbi
						dictum sem sed orci semper, ut lobortis nisl feugiat.
						Donec pharetra orci id velit efficitur viverra non sed
						dui.”
					</p>
					<div className="flex gap-2">
						<span className="h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] rounded-full bg-indigo-300" />
						<span className="font-montserrat font-medium text-neutral-800">
							Alexander Dumpty
						</span>
					</div>
					<div className="flex gap-2">
						<button
							type="button"
							title="Previous"
							className="text-indigo-900 hover:text-indigo-500"
						>
							<LongArrowIcon className="h-6 w-6 rotate-180" />
						</button>
						<button
							type="button"
							title="Next"
							className="text-indigo-900 hover:text-indigo-500"
						>
							<LongArrowIcon className="h-6 w-6" />
						</button>
					</div>
				</div>
			</section>
			<section
				id="work-with-me"
				className="flex w-full items-center justify-center py-48"
			>
				<div className="flex w-full max-w-[1280px] items-center gap-24 max-lg:flex-col max-lg:px-4">
					<form action="" className="flex w-full flex-col gap-6">
						<div className="grid grid-cols-2 gap-6">
							<input
								type="text"
								name="firstName"
								id="firstName"
								placeholder="First name"
								className="col-span-1 rounded-lg px-3 py-2 text-neutral-500 outline outline-1 outline-neutral-300 placeholder:text-neutral-500 focus:outline-2 focus:outline-indigo-300"
								autoComplete="given-name"
							/>
							<input
								type="text"
								name="lastName"
								id="lastName"
								placeholder="Last name"
								className="col-span-1 rounded-lg px-3 py-2 text-neutral-500 outline outline-1 outline-neutral-300 placeholder:text-neutral-500 focus:outline-2 focus:outline-indigo-300"
								autoComplete="family-name"
							/>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Email"
								className="col-span-2 rounded-lg px-3 py-2 text-neutral-500 outline outline-1 outline-neutral-300 placeholder:text-neutral-500 focus:outline-2 focus:outline-indigo-300"
								autoComplete="email"
							/>
							<textarea
								name="message"
								id="message"
								cols={30}
								rows={10}
								placeholder="Message"
								className="col-span-2 max-h-[150px] rounded-lg px-3 py-2 text-neutral-500 outline outline-1 outline-neutral-300 placeholder:text-neutral-500 focus:outline-2 focus:outline-indigo-300"
							></textarea>
							<button
								type="submit"
								title="Submit"
								className="col-span-2 rounded-lg bg-indigo-500 px-4 py-2.5 font-semibold leading-6 text-indigo-100 hover:bg-indigo-400"
							>
								Submit
							</button>
						</div>
					</form>
					<div className="flex flex-col items-center justify-center gap-8">
						<h1 className="font-montserrat text-5xl font-bold text-indigo-900">
							Let&apos;s connect
						</h1>
						<span className="font-montserrat text-xl text-indigo-500">
							I&apos;m always open to new opportunities. Feel free
							to reach out to me using the form on the left or
							through my social media profiles below.
						</span>
						<div className="flex items-center gap-4">
							<Link href={LINKEDIN_URL} title="LinkedIn">
								<LinkedInIcon className="hover:fill-indigo h-6 w-6 fill-indigo-950" />
							</Link>
							<Link href={GITHUB_URL} title="Github">
								<GitHubIcon className="hover:fill-indigo h-6 w-6 fill-indigo-950" />
							</Link>
							<Link href={FIVERR_URL} title="Fiverr">
								<FiverrIcon className="hover:fill-indigo h-5 fill-indigo-950 hover:opacity-80" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
