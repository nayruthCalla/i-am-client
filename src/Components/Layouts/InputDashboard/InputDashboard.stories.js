/*eslint-disable */
import InputDashboard from './index.js'

export default {
  title: 'Layout/DashboardInput',
  component: InputDashboard,
}

const Template = (args) => <InputDashboard {...args} />

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Escribe tu nombre de usuario',
  textLabel: 'Nayruth Calla',
  value: '',
  onChange,
  name: 'userName',
}
