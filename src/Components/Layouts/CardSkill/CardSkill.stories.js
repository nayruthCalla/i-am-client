/*eslint-disable */
import CardSkill from './index.js'
export default {
  title: 'Layout/CardSkill',
  component: CardSkill,
}

const Template = (args) => <CardSkill {...args} />

export const Dashboard = Template.bind({})
Dashboard.args = {
  colorBtn: 'dasboard',
  text: 'Javascript',
}
export const Portflio = Template.bind({})
Portflio.args = {
  colorBtn: 'template',
  text: 'Javascript',
}
