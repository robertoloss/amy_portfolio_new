import { Preview } from "@/utils/sanity_types"
import { IoCloseOutline } from "react-icons/io5";


type Props = {
	previews: Preview[]
	hamMenuHandler: ()=>void
}


export default function NavDrawer({ previews, hamMenuHandler } : Props) {
 
	return (
		<div className="absolute top-0 left-0 w-screen h-screen bg-background p-4">
			<div className="flex flex-row h-fit w-full mt-1 justify-end" onClick={hamMenuHandler}>
				<div className="w-fit -mr-1"><IoCloseOutline size='40px' /></div>
			</div>
			Navigation Drawer
		</div>
	)
}
