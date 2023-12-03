import HeaderBar from "./HeaderBar"
import { Preview } from "@/utils/sanity_types"
import { getPreviews } from "@/sanity/sanity-utils"


export default async function HeaderBarWrapper() {

	const previewsArray : {preview: Preview}[] = await getPreviews();
	const previews = previewsArray.map(obj => obj.preview)
	console.log("previewsArray: ", previewsArray);
	console.log("previews: ", previews);

	return <HeaderBar previews={previews}/>
}
