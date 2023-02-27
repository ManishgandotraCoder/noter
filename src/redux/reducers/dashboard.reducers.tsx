const initialState = 0;
const change = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_PRODUCTS": return action.payload;
        
        default: return state;
    }
}
export default change;