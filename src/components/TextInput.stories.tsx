import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your email" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true, // desativar controle no storybook pra essa prop, senão fica um objeto grande
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your email" />,
  },
};

// Default.decorators = [
//   (Story) => (
//     <div style={{ width: 400 }}>
//       <Story />
//     </div>
//   ),
// ];
