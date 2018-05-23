export default function (state = {}, action) {
    switch (action.type) {
        case 'INITIAL_DATA':
            return { ...state, data: action.payload };        
        default:
            return state;
    }
}