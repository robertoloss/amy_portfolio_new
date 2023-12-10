'use client'
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import NavDrawer from "./NavDrawer";

type Props = {
	previews: any[]
}

export default function HeaderBar({ previews } : Props) {
	const [shadow, setShadow] = useState<boolean>(false)
	const [navDrawer, setNavDrawer] = useState<boolean>(false)

	useEffect(()=>{
    const scroll = () => {
      if (window.scrollY > 20) setShadow(true)
			else setShadow(false)
    }
    window.addEventListener("scroll", scroll, false);
    return  () => window.removeEventListener("scroll", scroll, false);
  },[])

	function hamMenuHandler() {
		setNavDrawer(prev => !prev)
	}
	
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
				<div className="hidden md:block"><NavBar previews={previews}/></div>
				<div className="block md:hidden" onClick={hamMenuHandler}><RxHamburgerMenu size='32px'/></div>
				{navDrawer && <NavDrawer previews={previews} hamMenuHandler={hamMenuHandler}/> }
			</div>
		</div>
	)
}
