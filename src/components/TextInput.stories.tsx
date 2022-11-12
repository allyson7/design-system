import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputInputProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
  args: {
    placeholder: "Type your email",
  },
} as Meta<TextInputInputProps>;

export const Default: StoryObj<TextInputInputProps> = {};

Default.decorators = [
  (Story) => (
    <div style={{ width: 400 }}>
      <Story />
    </div>
  ),
];
