

const empty_cart = (cart,item) => cart.filter(i => i.id !== item.id)
const item_in_cart = (cart,item) => cart.find(i => i.id === item.id)

const add_to_cart = (cart,item) => {
    const result = item_in_cart(cart,item)
    return result === undefined

    ? [...empty_cart(cart,item), { ...item, qty: 1 }]
    : [...empty_cart(cart,item), { ...result, qty: result.qty + 1 }]
}

const remove_one_item = (cart,items) => {
    return items.qty === 1
    ? [...empty_cart(cart,items)]
    : [...empty_cart(cart,items), { ...items, qty: items.qty - 1 }]
}

const remove_all_items = (cart,items) => {
    return items.qty === 1
    ? [...empty_cart(cart,items)]
    : [...empty_cart(cart,items)]
}

export default function(state,action){
    switch(action.type){
        case 'ADD_TO_CART':
            return add_to_cart(state, action.payload)
        case 'REMOVE_ONE_ITEM':
            return remove_one_item(state, action.payload)
        case 'REMOVE_ALL_ITEMS':
            return remove_all_items(state, action.payload)
        case 'CLEAR_CART':
            return []
        default:
            return state
    }
}