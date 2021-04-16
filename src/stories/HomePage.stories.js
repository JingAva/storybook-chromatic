import React from 'react';

import { HomePage } from './HomePage';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Home Page',
  component: HomePage,
};

const Template = (args) => <Page {...args} />;

export const HomePage = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};