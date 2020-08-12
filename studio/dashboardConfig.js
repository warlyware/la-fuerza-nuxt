export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: 'deploy-status',
                  title: 'Content Editor',
                  name: 'la-fuerza-nuxt-studio-78kv3cho',
                  apiId: '885c515a-aad1-4615-a6fb-bd509db74774'
                },
                {
                  buildHookId: 'deploy-status',
                  title: 'La Fuerza Website',
                  name: 'la-fuerza-nuxt-web',
                  apiId: '503abbce-b99e-4322-85e2-ee4012605774'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/warlyware/la-fuerza-nuxt',
            category: 'Code'
          },
          { title: 'Frontend', value: '', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
