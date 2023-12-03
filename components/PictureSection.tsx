import Image from "next/image"
import { urlFor } from "@/sanity/sanity-utils"


type Props = {
	pictureSection: any
}

export default function PictureSection({ pictureSection } : Props) {
	
	const width = pictureSection.extra_wide ? 1000 : 960
	const bgColor = pictureSection.background_blue ? 'bg-bigpic' : 'bg-background'
	const height = pictureSection.height ? pictureSection.height : 200

	//console.log("Height = ", height)

	return (
		<div className={`flex flex-col w-[calc(100%+64px)] ${bgColor} py-20 px-8 gap-y-4 items-center`}>
		<div className={ `flex flex-col w-full ` }
			style={{
				width: 'full',
				maxWidth: `${width}px` 
			}}
		>
			<div className={`flex flex-col h-full w-full`}>
				<div className={`flex flex-row justify-between  gap-x-8`}>
					{pictureSection.pictures.map((picture: any, key: number) => {
						
						const imgUrl = urlFor(picture.image).width(1200).url() 

						return (
							<div className={ `flex flex-col relative w-full h-max-[1200px] w-max-[2000px]` }
								style={{
									height: `${height}px` 
								}}>
								<Image 
									alt="" 
									src={imgUrl} 
									key={key}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									style={{
										objectFit: 'contain'
									}}
								/>
							</div>
						)
					})}	
				</div>
				<h1 className="text-background text-base w-fit font-normal ">{pictureSection.description}</h1>
			</div>
		</div>
		</div>
	)
}
