import { $products, $totalPrice } from './store';
import {  increaseCount, decreaseCount, deleteProduct } from './events';

export const modelCart = {
  $products,
  //$isProductsLoading,
  $totalPrice,
  //loadProducts,
  increaseCount,
  decreaseCount,
  deleteProduct
};