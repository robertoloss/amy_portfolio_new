import Hero from "@/components/Hero";
import PreviewCard from "@/components/PreviewCard";
import { getPreviews } from "@/sanity/sanity-utils";

export default async function Home() {
	const previews : {preview : any}[] = await getPreviews();
	console.log("previews : ", previews);
	
  return (
		<div className="flex flex-col relative px-8 pb-20 items-center">
			<Hero/>
			<div className="flex flex-col gap-y-10">{previews.map(( preview: {preview : any}, index: number ) =>
						<PreviewCard key={index} preview={preview.preview}/>
				)}
			</div>
		</div>
	)
}
