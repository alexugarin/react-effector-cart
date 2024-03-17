

import { $products, $totalPrice } from './store';
import { decreaseCount, deleteProduct, increaseCount } from './events';
import { fetchProductsFx } from './fx';


$products.on(deleteProduct, (state, id) => state.filter((_,i) => _.id !== id))
  
    

$totalPrice
  .on($products, (_, products) =>
    products.length > 0
      ? products
        .map(({ price, quantity }) => price * quantity)
        .reduce((accumulator, price) => accumulator + price)
      : 0
  );

