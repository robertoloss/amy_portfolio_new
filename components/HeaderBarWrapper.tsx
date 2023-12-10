import HeaderBar from "./HeaderBar"
import { getPreviews } from "@/sanity/sanity-utils"
import { projectId,  } from "@/sanity/env";

export default async function HeaderBarWrapper() {

	const previewsArray : {preview: any}[] = await getPreviews();
	const previews = previewsArray.map(obj => obj.preview)
	console.log("previewsArray: ", previewsArray);
	console.log("previews: ", previews);
	console.log("Project ID: ", projectId);

	return <HeaderBar previews={previews}/>
}
