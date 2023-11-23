'use client'
import Link from "next/link"
import { useState, useEffect, useRef } from "react"



export default function WorkButton() {
	const [showDropdown, setShowDropdown] = useState<boolean>(false)
	const dropdownRef = useRef(null)

	useEffect(()=>{
		const clickHandler = (e:any) => {
			if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
				setShowDropdown(false)
			}
		}
		document.addEventListener("mousedown",clickHandler)

		return () => document.removeEventListener("mousedown",clickHandler)
	})
	

	function showDropdownHandler() {
		setShowDropdown(e=>!e)
		console.log("showDropdownHandler")
	}

	return (
		<div>
			<div className="text-lg font-semibold cursor-pointer select-none "
				onClick={showDropdownHandler}
			>
					Work
			</div>
			{
				showDropdown && 
				<div
					ref={dropdownRef}
					className="absolute flex flex-col w-20 h-20 bg-red-50 border-foreground border-[1px] rounded-[8px]"
				>
					<Link href={"/projects/project-1"}>
						Project-1
					</Link>
				</div>

			}
		</div>
	)
}
