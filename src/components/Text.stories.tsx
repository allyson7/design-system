import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "../components/Text";

export default {
  title: "components/text",
  component: Text,
  args: {
    children: "Lorem ipsum.",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <a>Testando</a>,
  },
  argTypes: {
    children: {
      table: {
        disable: true, // desativar controle no storybook pra essa prop, senão fica um objeto grande
      },
    },
  },
};
