import BaseButton from './index.vue';

export default {
  component: BaseButton,
  title: 'Atoms/BaseButton',
};

const Template = (args, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template: '<BaseButton :colorClass="colorClass" :label="label">{{slot}}</BaseButton>',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  colorClass: '_Primary',
  slot: 'ベースボタン'
};

export const Default = Template.bind({});
Default.args = {
  colorClass: '',
  slot: 'ベースボタン'
};
