import { Story, Meta } from '@storybook/angular/types-6-0';
import { CalculatorComponent } from 'src/app/calculator/calculator.component';

export default {
  title: 'Calculator',
  component: CalculatorComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CalculatorComponent> = (args: CalculatorComponent) => ({
  props: args,
});

export const DemoMultiplication = Template.bind({});
DemoMultiplication.args = {
  flag: true,
  aValue: 4,
  bValue: 3,
  btnName: 'Multiplication of two numbers',
};

export const DemoAddition = Template.bind({});
DemoAddition.args = {
  flag: false,
  aValue: 4,
  bValue: 3,
  btnName: 'Addition of two numbers',
};

export const DemoSubtraction = Template.bind({});
DemoSubtraction.args = {
  flag: undefined,
  aValue: 4,
  bValue: 3,
  btnName: 'Subtraction of two numbers'
}