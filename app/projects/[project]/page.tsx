import BigPicture from "@/components/BigPicture"
import HeroProject from "@/components/HeroProject"
import ThreeColumns from "@/components/ThreeColumns"
import { getProject } from "@/sanity/sanity-utils"
import { urlFor } from "@/sanity/sanity-utils"
import { createColumns } from "@/utils/CreateColumns"
import Section from "@/components/Section"
 
 
export default async function Project({ params }: { params: { project: string } }) {

	const project = await getProject(params.project)	
	console.log(project)
	const imgUrl : string = project[0].wide_picture ? urlFor(project[0].wide_picture.image)?.width(2400)?.url() : "" 
	const columns = createColumns(project[0])	

	console.log("sections : ", project[0].sections)
	return (
		<div className="flex flex-col items-center px-4 w-full">
			{project.length == 0 && <h1>Uh oh! Something went wrong...</h1>}
			{project.length > 0 &&
			<HeroProject project={project[0]} />}
			{project[0].wide_picture && <BigPicture imgUrl={imgUrl}/>}
			{project[0].three_cols_yesNo && <ThreeColumns columns={columns} />}
			{
				project[0].sections.map((section:any, key: number) => 
				<Section section={section} key={key}/>)
			}
		</div>
	)
}
