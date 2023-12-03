import BigPicture from "@/components/BigPicture"
import HeroProject from "@/components/HeroProject"
import ThreeColumns from "@/components/ThreeColumns"
import { getProject } from "@/sanity/sanity-utils"
import { urlFor } from "@/sanity/sanity-utils"
import { createColumns } from "@/utils/CreateColumns"
import Section from "@/components/Section"
import { Project } from "@/utils/sanity_types"

 
export default async function Project({ params }: { params: { project: string } }) {

	const projectArray = await getProject(params.project)	
	const project : Project = projectArray[0];
	// console.log(projectArray)
	const imgUrl : string = project.wide_picture ? urlFor(project.wide_picture.image)?.width(2400)?.url() : "" 
	const columns = createColumns(project)	

	//console.log("sections : ", project.sections)
	return (
		<div className="flex flex-col items-center px-8 w-full">
			{projectArray.length == 0 && <h1>Uh oh! Something went wrong...</h1>}
			
			{projectArray.length > 0 &&
			<HeroProject project={project} />}
			{project.wide_picture && <BigPicture imgUrl={imgUrl}/>}
			{project.three_cols_yesNo && <ThreeColumns columns={columns} />}
			
			{project.sections?.map((section:any, key: number) => 
				<Section section={section} sectionNum={key} key={key}/>)}
		</div>
	)
}
