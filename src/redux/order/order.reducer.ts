import OrderActionTypes from "./order.types";

const INITIAL_STATE = {
    orderItems: [],
};

const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OrderActionTypes.ADD_ORDER:
            return {
                ...state,
                orderItems: [...state.orderItems, action.payload]
            }
    }
}

export default orderReducer;