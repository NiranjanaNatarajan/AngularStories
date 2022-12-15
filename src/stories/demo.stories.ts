import { Story, Meta } from '@storybook/angular/types-6-0';
import { DemoComponent } from 'src/app/demo/demo.component';

export default {
  title: 'Demo',
  component: DemoComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<DemoComponent> = (args: DemoComponent) => ({
  props: args,
});
export const DemoGreen = Template.bind({});
DemoGreen.args = {
  color: false,
  btnName: 'Click Me',
};
export const DemoRed = Template.bind({});
DemoRed.args = {
  color: true,
  btnName: 'Click Me',
};
