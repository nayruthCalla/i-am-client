/*eslint-disable */
import TextareaDashboard from './index.js'
export default {
  title: 'Layout/TextareaDashboard',
  component: TextareaDashboard,
}

const Template = (args) => <TextareaDashboard {...args} />

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Escribe tu nombre de usuario',
  textLabel: 'Nayruth Calla',
  value: '',
  onChange,
  name: 'userName',
}
