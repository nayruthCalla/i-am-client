/*eslint-disable */
import Message from './index.js'
export default {
  title: 'Layout/Message',
  component: Message,
}

const Template = (args) => <Message {...args} />

export const Dashboard = Template.bind({})
Dashboard.args = {
  text: ':( Tu nombre y apellido es obligatorio!',
}
