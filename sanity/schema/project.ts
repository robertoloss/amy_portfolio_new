export default {
  name: 'project',
  type: 'document',
	title: 'Projects',
  fields: [
		{
			name: 'preview',
			type: 'preview',
			title: 'Preview'
		},
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
		{
			name: 'number',
			type: 'string',
			title: 'Number'
		},
		{
			name: 'description_left_big',
			type: 'array',
			of: [{type: 'block'}],
			title: 'Description Left (Big)'
		},
		{
			name: 'description_right_small',
			type: 'array',
			of: [{type: 'block'}],
			title: 'Description Right (Small)'
		},
		{
			name: 'wide_picture',
			type: 'picture',
			title: 'Wide Picture'
		},
		{
			name: 'three_cols_proj',
			type: 'three_cols',
			title: 'Three Columns (Project)'
		},
		{
			name: 'sections',
			type: 'array',
			of: [{type: 'section'}]
		}
  ]
}
