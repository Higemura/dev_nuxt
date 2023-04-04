import type { Meta, StoryObj } from "@storybook/vue3";
import BaseButton from "./index.vue";

type Story = StoryObj<typeof BaseButton>;

const meta: Meta<typeof BaseButton> = {
  title: "BaseButton",
  component: BaseButton,
};

export const Default: Story = {
  render: () => ({
    components: { BaseButton },
    template: "<BaseButton>ボタン</BaseButton>",
  }),
};

export default meta;