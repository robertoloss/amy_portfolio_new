import Column from "./Column"
import { ColumnType } from "@/utils/CreateColumns"

type Props = {
	columns: ColumnType[]
}

export default function ThreeColumns({ columns } : Props) {

	console.log("Cols in Three cols: ", columns)
	
	return (
		<div className="flex flex-row py-14 w-full max-w-[720px] justify-between">
			{columns.map(( column: ColumnType ) => 
				<Column column={column} />
			)}	
		</div> 
	)
}
