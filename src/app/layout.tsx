import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./global.css";

import Providers from "./providers";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Juan Daniel Peñaloza Brito | Software Developer",
	description:
		"I'm a fullstack software developer specializing in web and mobile app development. See my projects and expertise here.",
	icons: {
		icon: "/icon.svg",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.className} ${montserrat.className} bg-white`}
			>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
