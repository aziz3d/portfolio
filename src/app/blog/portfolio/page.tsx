import Link from "next/link";

export default function Portfolio() {
	return (
		<>
			<div className="mx-auto flex max-w-screen-xl justify-between px-4 text-neutral-600">
				<article className="mx-auto flex w-full max-w-2xl flex-col gap-6">
					<header className="mb-4 flex flex-col gap-5 text-neutral-500">
						<h1 className="font-montserrat text-3xl font-extrabold leading-tight text-neutral-800 lg:text-4xl">
							A Glimpse into My Creative Sandbox: My Portfolio
							Website
						</h1>
						<div className="flex gap-1 text-base">
							<address className="flex gap-1">
								<span>By</span>
								<span className="font-semibold text-neutral-600">
									Juan Daniel Peñaloza Brito
								</span>
							</address>
							<span>on</span>
							<time dateTime="2024-05-15" title="May 18th, 2024">
								May 18th, 2024
							</time>
						</div>
						<div className="flex flex-wrap gap-2">
							<span
								title="Next.js"
								aria-label="Next.js"
								className="rounded-md px-2.5 py-1 text-sm outline outline-1 outline-neutral-300"
							>
								Next.js
							</span>
							<span
								title="React.js"
								aria-label="React.js"
								className="rounded-md px-2.5 py-1 text-sm outline outline-1 outline-neutral-300"
							>
								React.js
							</span>
							<span
								title="TypeScript"
								aria-label="TypeScript"
								className="rounded-md px-2.5 py-1 text-sm outline outline-1 outline-neutral-300"
							>
								TypeScript
							</span>
							<span
								title="Tailwindcss"
								aria-label="Tailwindcss"
								className="rounded-md px-2.5 py-1 text-sm outline outline-1 outline-neutral-300"
							>
								Tailwindcss
							</span>
						</div>
					</header>
					<h2 className="font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-2xl">
						Introduction
					</h2>
					<p className="lead">
						Hi everyone! My name is{" "}
						<strong>Daniel Pe&ntilde;aloza,</strong> and I&apos;m a
						software developer with a passion for creating{" "}
						<strong>beautiful, user-friendly websites</strong> and{" "}
						<strong>applications.</strong>
					</p>
					<div className="flex w-fit flex-col gap-2 rounded-lg p-4 text-neutral-500 outline outline-1 outline-neutral-300">
						<h2 className="font-montserrat font-semibold leading-tight text-indigo-500 lg:text-lg">
							Index
						</h2>
						<ol className="list-decimal space-y-1 pl-6">
							<li>
								<Link
									className="hover:text-indigo-500" href={"/blog/portfolio#project-conception"}
								>
									Project conception
								</Link>
								<ol className="mt-1 space-y-1 pl-2">
									<li>
										<Link
											className="hover:text-indigo-500" href={
												"/blog/portfolio#identifying-the-need"
											}
										>
											Identifying the need
										</Link>
									</li>
								</ol>
							</li>
							<li>
								<Link
									className="hover:text-indigo-500" href={
										"/blog/portfolio#architectural-blueprint"
									}
								>
									Architectural blueprint
								</Link>
								<ol className="mt-1 space-y-1 pl-2">
									<li>
										<Link
											className="hover:text-indigo-500" href={
												"/blog/portfolio#techonology-stack-breakdown"
											}
										>
											Techonology Stack Breakdown
										</Link>
									</li>
									<li>
										<Link
											className="hover:text-indigo-500" href={
												"/blog/portfolio#system-design"
											}
										>
											System Design
										</Link>
									</li>
								</ol>
							</li>
							<li>
								<Link
									className="hover:text-indigo-500" href={
										"/blog/portfolio#putting-it-all-together"
									}
								>
									Putting it all together
								</Link>
								<ol className="mt-1 space-y-1 pl-2">
									<li>
										<Link
											className="hover:text-indigo-500" href={
												"/blog/portfolio#deployment-and-maintenance"
											}
										>
											Deployment and Maintenance
										</Link>
									</li>
									<li>
										<Link className="hover:text-indigo-500" href={"/blog/portfolio#showcase"}>
											Showcase
										</Link>
									</li>
								</ol>
							</li>
							<li>
								<Link className="hover:text-indigo-500" href={"/blog/portfolio#conclusion"}>
									Conclusion
								</Link>
								<ol className="mt-1 space-y-1 pl-2">
									<li>
										<Link
											className="hover:text-indigo-500" href={
												"/blog/portfolio#project-summary"
											}
										>
											Project Summary
										</Link>
									</li>
									<li>
										<Link
											className="hover:text-indigo-500" href={
												"/blog/portfolio#future-enhancements"
											}
										>
											Future Enhancements
										</Link>
									</li>
								</ol>
							</li>
						</ol>
					</div>
					<p>
						I created this portfolio website as a way to showcase my
						skills and experience in a visually appealing and
						informative way.
					</p>
					<ol className="list-disc space-y-3 pl-6">
						<li className="pl-2">
							My goal is to connect with potential clients,
							employers, or collaborators who are looking for
							someone with my skillset in Software Development
							(Front-End, Back-End, Full-Stack).
						</li>
						<li className="pl-2">
							This platform allows me to share my work in a
							comprehensive format, highlighting the projects
							I&apos;m most proud of and the unique value I can
							bring to the table.
						</li>
					</ol>
					<p>
						But then I found a{" "}
						<a href="https://flowbite.com">
							component library based on Tailwind CSS called
							Flowbite
						</a>
						. It comes with the most commonly used UI components,
						such as buttons, navigation bars, cards, form elements,
						and more which are conveniently built with the utility
						classes from Tailwind CSS.
					</p>
					<figure>
						<img
							src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
							alt=""
						/>
						<figcaption>Digital art by Anonymous</figcaption>
					</figure>
					<h2>Getting started with Flowbite</h2>
					<p>
						First of all you need to understand how Flowbite works.
						This library is not another framework. Rather, it is a
						set of components based on Tailwind CSS that you can
						just copy-paste from the documentation.
					</p>
					<p>
						It also includes a JavaScript file that enables
						interactive components, such as modals, dropdowns, and
						datepickers which you can optionally include into your
						project via CDN or NPM.
					</p>
					<p>
						You can check out the{" "}
						<a href="https://flowbite.com/docs/getting-started/quickstart/">
							quickstart guide
						</a>{" "}
						to explore the elements by including the CDN files into
						your project. But if you want to build a project with
						Flowbite I recommend you to follow the build tools steps
						so that you can purge and minify the generated CSS.
					</p>
					<p>
						You&apos;ll also receive a lot of useful application UI,
						marketing UI, and e-commerce pages that can help you get
						started with your projects even faster. You can check
						out this{" "}
						<a href="https://flowbite.com/docs/components/tables/">
							comparison table
						</a>{" "}
						to better understand the differences between the
						open-source and pro version of Flowbite.
					</p>
					<h2>When does design come in handy?</h2>
					<p>
						While it might seem like extra work at a first glance,
						here are some key moments in which prototyping will come
						in handy:
					</p>
					<ol>
						<li>
							<strong>Usability testing</strong>. Does your user
							know how to exit out of screens? Can they follow
							your intended user journey and buy something from
							the site you&apos;ve designed? By running a
							usability test, you&apos;ll be able to see how users
							will interact with your design once it&apos;s live;
						</li>
						<li>
							<strong>Involving stakeholders</strong>. Need to
							check if your GDPR consent boxes are displaying
							properly? Pass your prototype to your data
							protection team and they can test it for real;
						</li>
						<li>
							<strong>Impressing a client</strong>. Prototypes can
							help explain or even sell your idea by providing
							your client with a hands-on experience;
						</li>
						<li>
							<strong>Communicating your vision</strong>. By using
							an interactive medium to preview and test design
							elements, designers and developers can understand
							each other — and the project — better.
						</li>
					</ol>
					<h3>Laying the groundwork for best design</h3>
					<p>
						Before going digital, you might benefit from scribbling
						down some ideas in a sketchbook. This way, you can think
						things through before committing to an actual design
						project.
					</p>
					<p>
						Let&apos;s start by including the CSS file inside the{" "}
						<code>head</code> tag of your HTML.
					</p>
					<h3>Understanding typography</h3>
					<h4>Type properties</h4>
					<p>
						A typeface is a collection of letters. While each letter
						is unique, certain shapes are shared across letters. A
						typeface represents shared patterns across a collection
						of letters.
					</p>
					<h4>Baseline</h4>
					<p>
						A typeface is a collection of letters. While each letter
						is unique, certain shapes are shared across letters. A
						typeface represents shared patterns across a collection
						of letters.
					</p>
					<h4>Measurement from the baseline</h4>
					<p>
						A typeface is a collection of letters. While each letter
						is unique, certain shapes are shared across letters. A
						typeface represents shared patterns across a collection
						of letters.
					</p>
					<h3>Type classification</h3>
					<h4>Serif</h4>
					<p>
						A serif is a small shape or projection that appears at
						the beginning or end of a stroke on a letter. Typefaces
						with serifs are called serif typefaces. Serif fonts are
						classified as one of the following:
					</p>
					<h4>Old-Style serifs</h4>
					<ul>
						<li>Low contrast between thick and thin strokes</li>
						<li>Diagonal stress in the strokes</li>
						<li>Slanted serifs on lower-case ascenders</li>
					</ul>
					<img
						src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png"
						alt=""
					/>
					<ol>
						<li>Low contrast between thick and thin strokes</li>
						<li>Diagonal stress in the strokes</li>
						<li>Slanted serifs on lower-case ascenders</li>
					</ol>
					<h3>Laying the best for successful prototyping</h3>
					<p>
						A serif is a small shape or projection that appears at
						the beginning:
					</p>
					<blockquote>
						<p>
							Flowbite is just awesome. It contains tons of
							predesigned components and pages starting from login
							screen to complex dashboard. Perfect choice for your
							next SaaS application.
						</p>
					</blockquote>
					<h4>Code example</h4>
					<p>
						A serif is a small shape or projection that appears at
						the beginning or end of a stroke on a letter. Typefaces
						with serifs are called serif typefaces. Serif fonts are
						classified as one of the following:
					</p>
					<pre>
						<code className="language-html">
							<dl className="grid max-w-screen-md grid-cols-2 gap-8 text-neutral-900 sm:grid-cols-3">
								<div className="flex flex-col items-center justify-center">
									<dt className="mb-2 text-3xl font-extrabold">
										73M+
									</dt>
									<dd className="text-lg font-normal text-neutral-500">
										developers
									</dd>
								</div>
								<div className="flex flex-col items-center justify-center">
									<dt className="mb-2 text-3xl font-extrabold">
										1B+
									</dt>
									<dd className="text-lg font-normal text-neutral-500">
										contributors
									</dd>
								</div>
								<div className="flex flex-col items-center justify-center">
									<dt className="mb-2 text-3xl font-extrabold">
										4M+
									</dt>
									<dd className="text-lg font-normal text-neutral-500">
										organizations
									</dd>
								</div>
							</dl>
						</code>
					</pre>
					<h4>Table example</h4>
					<p>
						A serif is a small shape or projection that appears at
						the beginning or end of a stroke on a letter.
					</p>
					<table>
						<thead>
							<tr>
								<th>Country</th>
								<th>Date &amp; Time</th>
								<th>Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>United States</td>
								<td>April 21, 2021</td>
								<td>
									<strong>$2,300</strong>
								</td>
							</tr>
							<tr>
								<td>Canada</td>
								<td>May 31, 2021</td>
								<td>
									<strong>$300</strong>
								</td>
							</tr>
							<tr>
								<td>United Kingdom</td>
								<td>June 3, 2021</td>
								<td>
									<strong>$2,500</strong>
								</td>
							</tr>
							<tr>
								<td>Australia</td>
								<td>June 23, 2021</td>
								<td>
									<strong>$3,543</strong>
								</td>
							</tr>
							<tr>
								<td>Germany</td>
								<td>July 6, 2021</td>
								<td>
									<strong>$99</strong>
								</td>
							</tr>
							<tr>
								<td>France</td>
								<td>August 23, 2021</td>
								<td>
									<strong>$2,540</strong>
								</td>
							</tr>
						</tbody>
					</table>
					<h3>Best practices for setting up your prototype</h3>
					<p>
						<strong>Low fidelity or high fidelity?</strong> Fidelity
						refers to how close a prototype will be to the real
						deal. If you&apos;re simply preparing a quick visual aid
						for a presentation, a low-fidelity prototype — like a
						wireframe with placeholder images and some basic text —
						would be more than enough. But if you&apos;re going for
						more intricate usability testing, a high-fidelity
						prototype — with on-brand colors, fonts and imagery —
						could help get more pointed results.
					</p>
					<p>
						<strong>Consider your user</strong>. To create an
						intuitive user flow, try to think as your user would
						when interacting with your product. While you can
						fine-tune this during beta testing, considering your
						user&apos;s needs and habits early on will save you time
						by setting you on the right path.
					</p>
					<p>
						<strong>Start from the inside out</strong>. A nice way
						to both organize your tasks and create more
						user-friendly prototypes is by building your prototypes
						‘inside out&apos;. Start by focusing on what will be
						important to your user, like a Buy now button or an
						image gallery, and list each element by order of
						priority. This way, you&apos;ll be able to create a
						prototype that puts your users&apos; needs at the heart
						of your design.
					</p>
					<p>
						And there you have it! Everything you need to design and
						share prototypes — right in Flowbite Figma.
					</p>
				</article>
			</div>
		</>
	);
}
