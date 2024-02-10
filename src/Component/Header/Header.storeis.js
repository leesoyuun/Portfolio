import Header from "./Header";

export default {
  title: "Practice/Header",
  component: Header,

  // 이번에 작성한 전달인자의 타입은 Storybook을 보고 직접 확인해보세요.
  argTypes: {
    
  },
};

export const StorybookButton = (args) => <Header {...args}></Header>;
