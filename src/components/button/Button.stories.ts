import type { Meta, StoryObj, StoryFn } from '@storybook/vue3';

import Button from './Button.vue';

const meta = {
  title: 'UI components/Elements/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    tag: {
      control: { type: 'select' },
      options: ['a', 'button', 'input', 'router-link', 'nuxt-link', 'n-link', 'RouterLink', 'NuxtLink', 'NLink'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'radio' },
      options: ['is-small', 'is-normal', 'is-medium', 'is-large'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    onClick: { action: 'clicked' },
  },
  args: { label: 'Bear Button' }, // default value
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
    <Button v-bind="args" />
  `,
});

export const Size: Story = {
  parameters: {
    controls: { expanded: true, exclude: ['size', 'label'] },
  },
  render: (args) => ({
    setup: () => ({ args }),
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: row; gap: 12px;">
        <Button v-bind="args" size="is-large" label="Large" />
        <Button v-bind="args" size="is-medium" label="Medium" />
        <Button v-bind="args" size="is-normal" label="Normal (Default)" />
        <Button v-bind="args" size="is-small" label="Small" />
      </div>
    `,
  }),
};

export const Colors: Story = {
  parameters: {
    controls: { expanded: true, exclude: ['color', 'label'] },
  },
  render: (args) => ({
    setup: () => ({ args }),
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 22px;">
        <div style="display: flex; flex-direction: row; gap: 12px;">
          <Button v-bind="args" color="is-white" label="White" />
          <Button v-bind="args" color="is-light" label="Light" />
          <Button v-bind="args" color="is-dark" label="Dark" />
          <Button v-bind="args" color="is-black" label="Black" />
          <Button v-bind="args" color="is-text" label="Text" />
          <Button v-bind="args" color="is-ghost" label="Ghost" />
        </div>
        <div style="display: flex; flex-direction: row; gap: 12px;">
          <Button v-bind="args" color="is-primary" label="Primary" />
          <Button v-bind="args" color="is-primary is-light" label="Primary light" />
          <Button v-bind="args" color="is-link" label="Link" />
          <Button v-bind="args" color="is-link is-light" label="Link light" />
        </div>
        <div style="display: flex; flex-direction: row; gap: 12px;">
          <Button v-bind="args" color="is-info" label="Info" />
          <Button v-bind="args" color="is-info is-light" label="Info light" />
          <Button v-bind="args" color="is-success" label="Success" />
          <Button v-bind="args" color="is-success is-light" label="Success light" />
          <Button v-bind="args" color="is-warning" label="Warning" />
          <Button v-bind="args" color="is-warning is-light" label="Warning light" />
          <Button v-bind="args" color="is-danger" label="Danger" />
          <Button v-bind="args" color="is-danger is-light" label="Danger light" />
        </div>
      </div>
    `,
  }),
};

export const Outlined: Story = {
  args: { 
    label: 'Outlined', 
    outlined: true 
  },
  parameters: {
    controls: { expanded: true },
  },
  render: Template.bind({}),
};

export const Loading: Story = {
  args: { 
    label: 'Loading', 
    loading: true 
  },
  parameters: {
    controls: { expanded: true },
  },
  render: Template.bind({}),
};

export const Rounded: Story = {
  args: { 
    label: 'Rounded', 
    rounded: true 
  },
  parameters: {
    controls: { expanded: true },
  },
  render: Template.bind({}),
};

export const Expanded: Story = {
  args: { 
    label: 'Expanded', 
    expanded: true 
  },
  parameters: {
    controls: { expanded: true },
  },
  render: Template.bind({}),
};

export const Inverted: Story = {
  args: { 
    label: 'Inverted', 
    inverted: true 
  },
  parameters: {
    controls: { expanded: true },
  },
  render: Template.bind({}),
};

export const Responsive: Story = {
  args: { 
    label: 'Responsive', 
    responsive: true 
  },
  parameters: {
    controls: { expanded: true },
  },
  render: Template.bind({}),
};

export const Icon: Story = {
  args: { 
    label: 'Icon', 
    'icon-left': 'github'
  },
  parameters: {
    controls: { expanded: true },
  },
  render: Template.bind({}),
};
