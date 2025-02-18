import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import AccountHeader from './AccountHeader';
import { accountLinks } from 'utils/lang';
import { getI18n } from 'hooks/useI18n';

export default {
  title: 'templates/AccountHeader',
  component: AccountHeader,
} as ComponentMeta<typeof AccountHeader>;

const Template: ComponentStory<typeof AccountHeader> = (args) => (
  <AccountHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  hideOnScroll: true,
  backToShopLabel: 'Back to shop',
  storeUrl: 'https://horizon-demo.swell.store/',
  logo: {
    src: '/images/placeholder/logo.svg',
    width: 132.3,
    height: 20,
    alt: 'Horizon logo',
  },
  mobileMenuLinks: accountLinks(getI18n(null)),
  pageTitle: 'Orders and Returns',
};

export const NoMobileMenu = Template.bind({});
NoMobileMenu.args = {
  hideOnScroll: true,
  backToShopLabel: 'Back to shop',
  storeUrl: 'https://horizon-demo.swell.store/',
  logo: {
    src: '/images/placeholder/logo.svg',
    width: 132.3,
    height: 20,
    alt: 'Horizon logo',
  },
};
