import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import '../src/styles/fonts.css';
// import '../src/styles/tailwind.css';
// import '../src/styles/global.css';
// import '../src/styles/stats-table.css';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(Story => (
  <div style={{ margin: '1rem' }}>
    <Story />
  </div>
))
