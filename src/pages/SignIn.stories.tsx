import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Signin } from "./SignIn";

export default {
  title: "Pages/Sign In",
  component: Signin,
  args: {},
  argTypes: {},
} as Meta;

export const Default: StoryObj = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu email"),
      "allysonlopes0@gmail.com"
    );
    userEvent.type(canvas.getByPlaceholderText("*******"), "12345678");

    userEvent.click(canvas.getByRole("button"));
  },
};
