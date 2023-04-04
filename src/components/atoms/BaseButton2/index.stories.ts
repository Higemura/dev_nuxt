import type { Meta, StoryObj } from "@storybook/vue3";
import BaseButton2 from "./index.vue";

type Story = StoryObj<typeof BaseButton2>;

const meta: Meta<typeof BaseButton2> = {
  title: "BaseButton2",
  component: BaseButton2,
};

export const Default: Story = {
  render: () => ({
    components: { BaseButton2 },
    template: "<BaseButton2></BaseButton2>",
  }),
};

export default meta;