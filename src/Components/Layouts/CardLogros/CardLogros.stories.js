/*eslint-disable */
import CardLogro from './index.js'
export default {
  title: 'Layout/CardLogro',
  component: CardLogro,
}

const Template = (args) => <CardLogro {...args} />

export const Dashboard = Template.bind({})
Dashboard.args = {
  colorBtn: 'dasboard',
  title: 'Developer Mobile',
  description:
    'Fuí una de las acreedoras de una beca de Make It Real un bootcamp intensivo de 4 meses que simula un entorno laboral a través de la metodología ágil Scrum y Kanban. Donde he potenciando mis habilidades blandas y técnicas como Full Stack Javascript developer.',
}
export const Portflio = Template.bind({})
Portflio.args = {
  colorBtn: 'template',
  title: 'Developer Mobile',
  description:
    'Fuí una de las acreedoras de una beca de Make It Real un bootcamp intensivo de 4 meses que simula un entorno laboral a través de la metodología ágil Scrum y Kanban. Donde he potenciando mis habilidades blandas y técnicas como Full Stack Javascript developer.',
}
