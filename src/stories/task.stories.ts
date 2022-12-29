
import { Meta, Story } from '@storybook/angular';

import { action } from '@storybook/addon-actions';
import { TaskComponent } from 'src/app/components/tast.component';

export default {
  component: TaskComponent,
  title: 'Task',
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story = args => ({
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'default',
    state: 'default task',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args['task'],
    state: 'pinned task',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args['task'],
    state: 'archived task',
  },
};