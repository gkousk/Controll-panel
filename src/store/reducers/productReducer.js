const initState = {
    products: [
    ],
    createProduct:null,
    orderDetails:null,
    productDetails:null,
    sendMessage:null
};
const productReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            console.log('created product', action.product)
            return {
                ...state,
                createProduct:"NEW PRODUCT ADDED"
            }
        case 'CREATE_PRODUCT_ERROR':
            console.log('create product error', action.err);
            return {
                ...state,
                createProduct:"CANT ADD PRODUCT"
            }
        case 'ADD_HOT':
            console.log('product added to hot', action.product)
            return {
                ...state,
                productDetails:"PRODUCT ADDED TO HOT"
            }
        case 'ADD_HOT_ERROR':
            console.log('product cant add to hot', action.err);
            return {
                ...state,
                productDetails:"CANT ADD PRODUCT TO HOT"
            }
        case 'DELETE_HOT':
            console.log('product deleted from hot', action.product)
            return {
                ...state,
                productDetails:"PRODUCT DELETED FROM HOT"
            }
        case 'DELETE_HOT_ERROR':
            console.log('product deleted from hot error', action.err);
            return {
                ...state,
                productDetails:"PRODUCT COULDNT DELETE FROM HOT"
            }
        case 'ADD_MESSAGE':
            console.log('message send', action.state.content)
            return {
                ...state,
                sendMessage:"MESSAGE SEND"
            }
        case 'ADD_MESSAGE_ERROR':
            console.log('message send error', action.err);
            return {
                ...state,
                sendMessage:"CANT SEND MESSAGE"
            }
        case 'UPDATE_PRODUCT':
            console.log('update product', action.id)
            return {
                ...state,
                productDetails:"PRODUCT UPDATED"
            }
        case 'UPDATE_PRODUCT_ERROR':
            console.log('update product error', action.err);
            return {
                ...state,
                productDetails:"CANT UPDATE PRODUCT"
            }
        case 'UPDATE_ORDER':
            console.log('order completed', action.id);
            return {
                ...state,
                orderDetails:"ORDER COMPLETED"
            }
        case 'UPDATE_ORDER_ERROR':
            console.log('order complete error', action.err);
            return {
                ...state,
                orderDetails:"ORDER COULDNT COMPLETE"
            }
        case 'DELETE_PRODUCT':
            console.log('product deleted', action.id1);
            return {
                ...state,
                productDetails:"PRODUCT DELETED"
            }
        case 'DELETE_PRODUCT_ERROR':
            console.log('product delete error', action.err);
            return {
                ...state,
                productDetails:"PRODUCT CANT BE DELETED "
            }
        default:
            return state;
    }
}
export default productReducer;