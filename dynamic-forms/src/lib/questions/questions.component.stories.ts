import type { Meta, StoryObj } from '@storybook/angular';
import { QuestionsComponent } from './questions.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<QuestionsComponent> = {
  component: QuestionsComponent,
  title: 'QuestionsComponent',
};
export default meta;
type Story = StoryObj<QuestionsComponent>;

export const Primary: Story = {
  args: {
    questions: [],
  },
};

export const Heading: Story = {
  args: {
    questions: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/questions works!/gi)).toBeTruthy();
  },
};
