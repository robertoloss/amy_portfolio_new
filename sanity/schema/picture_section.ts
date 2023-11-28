export default {
	name: 'picture_section',
	type: 'document',
	title: 'Picture Section',
	fields: [
		{
			name: 'description',
			type: 'string',
			title: 'Description'
		},
		{
			name: 'background_color',
			type: 'array',
			of: [{type: 'string'}],
			options: {
				list: ['dark blue', 'light gray']
			}
		},
		{
			name: 'pictures',
			type: 'array',
			of: [{type: 'picture_section'}]
		}
	]
}
