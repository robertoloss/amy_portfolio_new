import NavBar from "./NavBar";
import Link from "next/link";

export default function HeaderBar() {


	return (
		<div className="h-20 w-full bg-background">
			<div className="flex flex-row h-full max-w-7xl justify-between items-center text-foreground p-4" >
				<Link 
					className="w-fit text-2xl font-semibold"
					href={"/"}
				>
					Amy N Jackson
				</Link>
				<NavBar	/>
			</div>
		</div>
	)
}
