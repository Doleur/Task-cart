export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return {
        cart: state.cart.some((element) => element.id === action.productData.id)
          ? [...state.cart]
          : [...state.cart, action.productData],
        countsProducts: {
          ...state.countsProducts,
          [action.productData.id]:
            (state.countsProducts[action.productData.id] || 0) + action.count
        }
      };
    case 'REMOVE_PRODUCT_FROM_CART': {
      const index = state.cart.findIndex(
        (element) => action.productData.id === element.id
      );
      if (index > -1) {
        state.cart.splice(index, 1);
      }
      return { ...state, cart: [...state.cart] };
    }
    case 'UPDATE_PRODUCT_COUNT': {
      const prevCount = state.countsProducts[action.id]
        ? state.countsProducts[action.id]
        : 1;
      return {
        ...state,
        countsProducts: {
          ...state.countsProducts,
          [action.id]:
            prevCount + action.count > 0 ? prevCount + action.count : prevCount
        }
      };
    }
    case 'NEW_COUNT_INPUT': {
      return {
        ...state,
        countsProducts: {
          ...state.countsProducts,
          [action.id]: action.count > 99 ? 99 : action.count
        }
      };
    }
    default:
      throw state;
  }
}
