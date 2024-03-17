import { createStore } from 'effector';

export const $products = createStore([
    {
      id: 59,
      title: "Spring and summershoes",
      price: 20,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio lacus, ornare in sagittis vel, eleifend eu nunc. Praesent pharetra sollicitudin consequat. Vivamus malesuada consectetur lacus et placerat.',
      quantity: 3,
      thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg",
    },
    {
      id: 88,
      title: "TC Reusable Silicone Magic Washing Gloves",
      price: 29,
      quantity: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio lacus, ornare in sagittis vel, eleifend eu nunc. Praesent pharetra sollicitudin consequat. Vivamus malesuada consectetur lacus et placerat.',
      thumbnail: "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg",
    },
    {
      id: 18,
      title: "Oil Free Moisturizer 100ml",
      price: 40,
      quantity: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio lacus, ornare in sagittis vel, eleifend eu nunc. Praesent pharetra sollicitudin consequat. Vivamus malesuada consectetur lacus et placerat.',
      thumbnail: "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
    },
    {
      id: 95,
      title: "Wholesale cargo lashing Belt",
      price: 930,
      quantity: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio lacus, ornare in sagittis vel, eleifend eu nunc. Praesent pharetra sollicitudin consequat. Vivamus malesuada consectetur lacus et placerat.',
      thumbnail: "https://cdn.dummyjson.com/product-images/95/thumbnail.jpg",
    },
    {
      id: 39,
      title: "Women Sweaters Wool",
      price: 600,
      quantity: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio lacus, ornare in sagittis vel, eleifend eu nunc. Praesent pharetra sollicitudin consequat. Vivamus malesuada consectetur lacus et placerat.',
      thumbnail: "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg",
    },
  ]);
//export const $isProductsLoading = createStore(false);

export const $totalPrice = createStore(0);