/*eslint-disable */
import ButtonDashboard from './index.js'
export default {
  title: 'Layout/ButtonDashboard',
  component: ButtonDashboard,
}

const Template = (args) => <ButtonDashboard {...args} />

export const Basic = Template.bind({})
Basic.args = {
  text: 'Sobre mí',
  screen: '',
}
