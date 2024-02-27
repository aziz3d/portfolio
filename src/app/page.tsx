import { CollaborateIcon } from "@/assets/svg";

export default function Home() {
	return (
		<>
			<section id="hero" className="relative flex gap-24 p-24">
				<div className="flex w-full flex-col gap-12">
					<h1 className="montserrat text-[4rem] font-bold text-neutral-800">
						Crafting <br />
						<span className="text-waikawa-500">
							Digital Experiences
						</span>{" "}
						That <br /> Inspire
					</h1>
					<p className="text-[2rem] font-medium text-waikawa-950">
						Welcome to my corner of the web. I&apos;m{" "}
						<strong>Daniel Peñaloza,</strong> a passionate
						full-stack web developer and designer dedicated to
						bringing your digital vision to life.
					</p>
					<div className="flex w-full justify-end">
						<button
							type="button"
							title="Let's collaborate"
							className="flex gap-3 rounded-lg bg-waikawa-500 px-6 py-4 text-waikawa-100 hover:bg-waikawa-400"
						>
							<span className="text-xl font-medium">
								Let&apos;s collaborate
							</span>
							<CollaborateIcon className="h-6 w-6 fill-waikawa-100" />
						</button>
					</div>
				</div>
				<div className="relative mr-[100px] h-[500px] min-h-[500px] w-[500px] min-w-[500px] rounded-3xl bg-waikawa-500">
					<div className="absolute -bottom-16 -right-16 -z-10 h-[350px] min-h-[350px] w-[350px] min-w-[350px] rounded-3xl bg-waikawa-200" />
				</div>
			</section>
		</>
	);
}
