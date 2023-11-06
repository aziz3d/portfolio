import { Hero, Navbar, Services, Skills } from "@/components";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Skills />
			<Services />
			<Footer />
		</>
	);
}
