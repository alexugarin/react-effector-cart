import { createEvent, createStore } from "effector";
import ProductsList from "./services/mockData";

export const removed = createEvent()
export const increase = createEvent()
export const setValue = createEvent()
export const getById = createEvent()
export const $todos = createStore(ProductsList)
$todos.on(removed, (state, id) => state.filter((_, i) => _.id !== id))
$todos.on(setValue, (products, [param]) =>
  products
    .map((product) => product.id === param.id ? { ...product, quantity: param.value } : product))
