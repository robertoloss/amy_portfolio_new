import { NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { urlFor } from "@/sanity/sanity-utils"
import Link from "next/link"
import Image from "next/image"
import { PortableTextComponents, PortableText } from "@portabletext/react"

type Props = {
	previews: any[]
}
const components : PortableTextComponents = {
  block: {
    normal: ({children}) => <h1 className="text-sm font-normal leading-1 ">{children}</h1>,
  },
	marks: {
    em: ({children}) => <p className="text-lg font-normal text-destructive leading-6">{children}</p>,
	},
}

export default function ProjectsNavBar({ previews } : Props) {

	return (
		<div className="w-[320px] p-4" >
			{previews?.map(( preview, key ) => { 
				const imgUrl = preview.picture ? urlFor(preview.picture?.image)?.width(240)?.url() : ""
				return (
					<div className="w-full" key={key}>
						<Link href={`/projects/${preview.slug}`} legacyBehavior passHref >
							<NavigationMenuLink >
								<div className="flex flex-col w-full h-20 hover:bg-accent p-1">
									<div className="flex flex-row h-full justify-start gap-x-4 items-center">
										<div className="relative flex flex-col w-fit h-full justify-center">
											<Image 
												alt="" 
												src={imgUrl} 
												width={96}
												height={40}
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
												style={{
													objectFit: 'contain',
												}}
											/>
										</div>
										<div className="flex flex-col h-full w-full overflow-hidden text-ellipsis items-start justify-center">
											<h1 className="w-full font-bold"> {preview.title} </h1>
												<PortableText components={components} value={preview.navBarDescription}/>
										</div>
									</div>
								</div>
							</NavigationMenuLink>
						</Link>
					</div>
				)
			})}
		</div>
	)
}
