/*eslint-disable */
import CardProyect from './index.js'
export default {
  title: 'Layout/CardProyect',
  component: CardProyect,
}

const Template = (args) => <CardProyect {...args} />

export const Dashboard = Template.bind({})
Dashboard.args = {
  colorBtn: 'dasboard',
  title: 'Rick and Morty',
  description:
    'aplicación web hecha con react, que consume la api de rick and morty y tiene paginación.',
  techFirst: 'React',
  techSecond: 'Styled Components',
  level: 'Facil',
  links: [
    {
      link: 'https://upbeat-murdock-084166.netlify.app/',
      name: 'Demo',
    },
    {
      link: 'https://github.com/nayruthCalla/rick-morty-react',
      name: 'Repo',
    },
  ],
}
export const Portflio = Template.bind({})
Portflio.args = {
  colorBtn: 'template',
  title: 'Rick and Morty',
  description:
    'aplicación web hecha con react, que consume la api de rick and morty y tiene paginación.',
  techFirst: 'React',
  techSecond: 'Styled Componentsd',
  level: 'Facil',
  links: [
    {
      link: 'https://upbeat-murdock-084166.netlify.app/',
      name: 'Demo',
    },
    {
      link: 'https://github.com/nayruthCalla/rick-morty-react',
      name: 'Repo',
    },
  ],
}
