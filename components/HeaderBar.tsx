'use client'
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Link from "next/link";


export default function HeaderBar() {
	const [shadow, setShadow] = useState<boolean>(false)

	useEffect(()=>{
    const scroll = () => {
      if (window.scrollY > 20) setShadow(true)
			else setShadow(false)
    }
    window.addEventListener("scroll", scroll, false);
    return  () => window.removeEventListener("scroll", scroll, false);
  },[])
	
	return (
		<div className="top-0 sticky z-50 flex flex-col items-center h-20 w-full bg-background"
			style={{
			boxShadow: `${shadow ? "0px 2px 2px rgb(130,130,130,0.2)" : ''}`,
				transition: 'all 0.5s '
			}}
		>
			<div className="flex flex-row h-full w-full max-w-7xl justify-between items-center text-foreground p-4" >
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
