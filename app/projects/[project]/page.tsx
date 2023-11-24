import HeroProject from "@/components/HeroProject"
import { getProject } from "@/sanity/sanity-utils"


 
export default async function Project({ params }: { params: { project: string } }) {

	const project = await getProject(params.project)
	console.log(project)

	return <>
		<HeroProject project={project[0]} />
	</>
}
