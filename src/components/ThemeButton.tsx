"use client";

import { MoonIcon, SunIcon } from "@/assets/svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	if (resolvedTheme === "dark") {
		<button
			onClick={() => setTheme("light")}
			type="button"
			title="Toggle dark mode"
			className="rounded-full fill-white hover:fill-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
		>
			<MoonIcon className="h-6 w-6 fill-inherit" />
		</button>;
	} else {
		<button
			onClick={() => setTheme("dark")}
			type="button"
			title="Toggle dark mode"
			className="rounded-full fill-white hover:fill-yellow-400 focus:outline-offset-4 focus:outline-yellow-400"
		>
			<SunIcon className="h-6 w-6 fill-inherit" />
		</button>;
	}
};

export default ThemeSwitcher;
