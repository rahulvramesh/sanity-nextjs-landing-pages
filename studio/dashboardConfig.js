export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f48d79b6a9028141bf18387',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-apny5jvp',
                  apiId: '2ee0995c-3fde-4655-9889-aba363c7bf5f'
                },
                {
                  buildHookId: '5f48d79b4801d51ddb683a73',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t5bhd9q9',
                  apiId: '1b455672-60bb-4810-8e2f-f077c35f81ab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rahulvramesh/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t5bhd9q9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
