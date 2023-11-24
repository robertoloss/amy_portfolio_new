import Hero from "@/components/Hero";
import PreviewCard from "@/components/PreviewCard";
import { getPreviews } from "@/sanity/sanity-utils";


export default async function Home() {

	const previews = await getPreviews();

	
  return (
		<div className="flex flex-col relative items-center">
			<Hero/>
			<div className="flex flex-col gap-y-10">{previews.map(( preview: any, index: number ) =>
					<PreviewCard key={index} preview={preview.preview}/>
					)}</div>
		</div>
	)
}
