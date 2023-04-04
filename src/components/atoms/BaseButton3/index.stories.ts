import type { Meta, StoryObj } from "@storybook/vue3";
import BaseButton3 from "./index.vue";

type Story = StoryObj<typeof BaseButton3>;

const meta: Meta<typeof BaseButton3> = {
  title: "BaseButton3",
  component: BaseButton3,
};

export const Default: Story = {
  render: () => ({
    components: { BaseButton3 },
    template: "<BaseButton3></BaseButton3>",
  }),
};

export default meta;