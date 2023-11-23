import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import WorkButton from "./WorkButton";




export default function NavBar() {

	return (
		<div
			className="flex flex-row bg-background space-x-8 items-center"
		>
			<Link href={"/about"} className="text-lg font-semibold">
				About
			</Link>
			<WorkButton/>		
			<Link href={"/contact"} className="text-lg font-semibold">
				Contact
			</Link>
			<ThemeToggle/>
		</div>
	)
}
