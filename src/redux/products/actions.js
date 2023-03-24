import { ADD_PRODUCT, REMOVE_PRODUCT } from "./types";
//액션작성
export const addProduct = () => {
  return {
    type: ADD_PRODUCT,
  };
};
export const removeProduct = () => {
  return {
    type: REMOVE_PRODUCT,
  };
};
