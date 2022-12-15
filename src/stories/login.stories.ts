import { Story, Meta } from '@storybook/angular/types-6-0';
import { LoginComponent } from 'src/app/login/login.component';

export default {
  title: 'Login',
  component: LoginComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  props: args,
});

export const LoginForm = Template.bind({});
LoginForm.args = {
  headerName: 'Login Form',
};