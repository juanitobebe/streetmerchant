import {Store} from './store';

export const Costco: Store = {
  currency: '$',
  labels: {
    outOfStock: {
      container: '#productImageOverlay > img.oos-overlay.img-responsive',
      text: ['Out of Stock'],
      type: 'HTMLImageElement',
    },
  },
  links: [
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url:
        'https://www.costco.com/xbox-series-x-1tb-console-with-additional-controller.product.100691493.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.costco.com/xbox-series-x-1tb-console-bundle.product.100757146.html',
    },
  ],
  name: 'costco',
};
