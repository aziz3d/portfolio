import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import { Footer, Navbar } from "@/components";
import Providers from "../providers";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Juan Daniel Peñaloza Brito | Projects",
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
	return <div className="mt-[88px]">{children}</div>;
}
