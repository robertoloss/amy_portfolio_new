
// export function generateStaticParams() {
//   return [{ id: 'uno' }, { id: 'due' }, { id: 'tre' }]
// }

 
export default function Project({ params }: { params: { project: string } }) {

	return <>
		<div className="w-20 h-20 bg-red-800">
			<h1 className="text-white">{params.project}</h1>
		</div>
	</>

}
