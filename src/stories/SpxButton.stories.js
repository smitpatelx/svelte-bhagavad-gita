import SpxButton from '../components/generic/SpxButton.svelte';

export default {
  title: 'SpxButton',
  component: SpxButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
    layout: 'centered',
  },
  arguments: {
    label: {control: 'text'},
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'white', 'gray'],
    },
    size: {
      control: {type: 'select'},
      options: ['small', 'medium', 'large']
    }
  }
};

const Template = (args)=>({
  component: SpxButton,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
};

export const White = Template.bind({});
White.args = {
  type: 'white',
  label: 'Button',
};

export const Gray = Template.bind({});
Gray.args = {
  type: 'gray',
  label: 'Button',
};