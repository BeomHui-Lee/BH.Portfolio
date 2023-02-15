import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TitleBox } from "./index";

export default {
  title: "portfolio/TitleBox",
  component: TitleBox,
  argTypes: {
    bgColor: {
      control: "color",
    },
    textColor: { control: "color" },
  },
} as ComponentMeta<typeof TitleBox>;

const Template: ComponentStory<typeof TitleBox> = args => <TitleBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "기본 타이틀",
};
