export default  {
	name: 'section',
	type: 'document',
	title: 'Section',
	fields: [
		{
			title: 'Project',
      name: 'project',
      type: 'reference',
      to: [{type: 'project'}] 
    },
		{
			title: 'Section Number',
			name: 'section_number',
			type: 'number'
		},
		{
			title: 'Section Title',
			name: 'section_title',
			type: 'string'
		},
		{
			title: 'Section Content',
			name: 'section_content',
			type: 'array',
			of: [{type: 'block'}]
		},
		{
			name: 'three_cols_yesNo',
			type: 'boolean',
			title: 'Three Columns?'
		},
		{
			name: 'thre_cols_in_section',
			type: 'three_cols',
			title: 'Three Columns',
		}
	]
}
