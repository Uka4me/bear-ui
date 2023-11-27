import type { Meta, StoryObj, StoryFn } from '@storybook/vue3';

import Table from './Table.vue';

const meta = {
  title: 'UI components/Elements/Table',
  component: Table,
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
  args: { title: 'Bear Table' },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Table> = (args) => ({
  components: { Table },
  setup() {
    return { args };
  },
  template: `
    <Table v-bind="args" />
  `,
});

/* export const Size: Story = {
  parameters: {
    controls: { expanded: true, exclude: ['size', 'label'] },
  },
  render: (args) => ({
    setup: () => ({ args }),
    components: { Table },
    template: `
      <div style="display: flex; flex-direction: row; gap: 12px;">
        <Button v-bind="args" size="is-large" label="Large" />
        <Button v-bind="args" size="is-medium" label="Medium" />
        <Button v-bind="args" size="is-normal" label="Normal (Default)" />
        <Button v-bind="args" size="is-small" label="Small" />
      </div>
    `,
  }),
}; */


const baseRecords = {
  columns: [
    { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: 'Age', width: 100, dataIndex: 'age', key: 'age' },
    { title: 'Column 1', dataIndex: 'address1', key: '1',
      children: [
          { title: 'Column 2', dataIndex: 'address2', key: '2', width: 100, fixed: 'left' },
          { title: 'Column 3', dataIndex: 'address3', key: '3',
              children: [
                  { title: 'Column 4', dataIndex: 'address2', key: '2' },
                  { title: 'Column 5', dataIndex: 'address3', key: '3', width: 150 },
              ]
          },
          { title: 'Column 6', dataIndex: 'address4', key: '4', width: 150,
              children: [
                  { title: 'Column 7', dataIndex: 'address2', key: '2', width: 150, fixed: 'right' },
                  { title: 'Column 8', dataIndex: 'address3', key: '3', width: 150 },
              ]
          },
      ]
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      key: 'operation',
      fixed: 'right',
      width: 100,
    },
  ],
  dataSources: (count: number) => [...Array(count).keys()]
  .map(i => ({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address1: `London, Park Lane no. ${i}`,
    address2: `London, Park Lane no. ${i}`,
    address3: `London, Park Lane no. ${i}`,
    address4: `London, Park Lane no. ${i}`,
    address5: `London, Park Lane no. ${i}`,
    address6: `London, Park Lane no. ${i}`,
    address7: `London, Park Lane no. ${i}`,
    address8: `London, Park Lane no. ${i}`,
    operation: `Operation ${i}`,
  })),
};

export const Base: Story = {
  args: {
    columns: baseRecords.columns,
    dataSources: baseRecords.dataSources(5),
  },
  parameters: {
    controls: { expanded: true, exclude: ['columns', 'dataSources'] },
  },
  render: Template.bind({}),
};

export const ScrollAndSticky: Story = {
  args: {
    columns: baseRecords.columns,
    dataSources: baseRecords.dataSources(50),
    sticky: true,
    scroll: true,
    height: '350px',
  },
  parameters: {
    controls: { expanded: true, exclude: ['columns', 'dataSources'] },
  },
  render: Template.bind({}),
};
