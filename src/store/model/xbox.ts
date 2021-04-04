import {Store} from './store';

export const Xbox: Store = {
  currency: '$',
  labels: {
    outOfStock: {
      container:
        '#BodyContent > section > div > div > div > div > div > div.pb-4.col-md-3 > button',
      text: ['out of stock'],
      type: 'innerHTML'
    },
  },
  links: [
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.xbox.com/en-us/configure/8WJ714N3RBTL',
    },
  ],
  name: 'xbox',
};
