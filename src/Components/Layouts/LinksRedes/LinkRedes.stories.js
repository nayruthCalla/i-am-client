/*eslint-disable */
import LinkRedes from './index.js'
export default {
  title: 'Layout/LinkRedes',
  component: LinkRedes,
}

const Template = (args) => <LinkRedes {...args} />

export const Dashboard = Template.bind({})
Dashboard.args = {
  links: [
    {
      link: 'https://upbeat-murdock-084166.netlify.app/',
      name: 'github',
    },
    {
      link: 'https://github.com/nayruthCalla/rick-morty-react',
      name: 'linkedin',
    },
    {
      link: 'https://upbeat-murdock-084166.netlify.app/',
      name: 'gmail',
    },
    {
      link: 'https://github.com/nayruthCalla/rick-morty-react',
      name: 'instagram',
    },
    {
      link: 'https://upbeat-murdock-084166.netlify.app/',
      name: 'facebook',
    },
  ],
}
