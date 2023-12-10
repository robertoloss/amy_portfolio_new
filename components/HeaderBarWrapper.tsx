import HeaderBar from "./HeaderBar"
import { Preview } from "@/utils/sanity_types"
import { getPreviews } from "@/sanity/sanity-utils"
import { projectId,  } from "@/sanity/env";

export default async function HeaderBarWrapper() {

	const previewsArray : {preview: Preview}[] = await getPreviews();
	const previews = previewsArray.map(obj => obj.preview)
	console.log("previewsArray: ", previewsArray);
	console.log("previews: ", previews);
	console.log("Project ID: ", projectId);

	return <HeaderBar previews={previews}/>
}
