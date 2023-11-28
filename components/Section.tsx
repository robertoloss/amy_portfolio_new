import SectionTop from "./SectionTop"
import { createColumns } from "@/utils/CreateColumns"
import ThreeColumns from "./ThreeColumns"
import Quote from "./Quote"

type Props = {
	section: any
}

export default function Section({ section } : Props) {

	const columns = createColumns(section.three_cols_in_section) 
	console.log("section : ", section)

	return (<>
		<SectionTop section={section} />
		{section.three_cols_yesNo && <ThreeColumns columns={columns}/>}
		{section.quote && <Quote quote={section.quote.quote} author={section.quote.author} /> }
	</>)
}
