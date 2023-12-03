import Image from "next/image";

type Props = {
	imgUrl : string
}


export default function BigPicture({ imgUrl } : Props ) {
	
	return (
		<div className="flex flex-col w-[calc(100%+64px)] h-fit bg-bigpic py-10 px-4 mx-[-16px]">
			<div className="relative flex flex-col w-full h-[584px] ">
				<Image 
					alt="" 
					src={imgUrl} 
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					style={{
						objectFit: 'contain',
					}}
				/>
			</div>
		</div>
	)
}
