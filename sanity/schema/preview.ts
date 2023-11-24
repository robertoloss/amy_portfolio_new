export default {
	name: 'preview',
	type: 'document',
	title: 'Preview',
	fields: [
		{
			name: 'slug',
			type: 'string',
			title: 'Project Slug'
		},
		{
			name: 'picture',
			type: 'picture',
			title: 'Picture'
		},
		{
			name: 'title',
			type: 'string',
			title: 'Title'
		},
		{
			name: 'description',
			type: 'array',
			of: [{type: 'block'}],
			title: 'Description',
		}
	]
}
