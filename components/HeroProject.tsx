import { PortableText, PortableTextComponents } from '@portabletext/react'
import { components } from './Hero';

const componentsBig : PortableTextComponents = {
  block: {
    normal: ({children}) => <h1 className="text-2xl font-normal leading-6">{children}</h1>,
  },
}

export default async function HeroProject({ project } : {project: any}) {
		
	
	return (
		<div className="w-full min-h-[200px] flex flex-col justify-center items-center pt-40 pb-20">
			<div className="flex flex-col max-w-[780px] w-full justify-center items-center gap-y-4 "> 
				<h1 className="text-[24px] text-destructive font-semibold">{project.name}</h1>
				<h1 className="text-[32px]">{project.title}</h1>
				<div className="w-full h-0 border-t border-[B8B9BA]"/>
				<div className='flex flex-row gap-x-4'>
					<PortableText components={componentsBig} value={project.description_left} />
					<PortableText components={components} value={project.description_right} />
				</div>
			</div>
		</div>
	)
}
