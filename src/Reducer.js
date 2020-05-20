export const Reducer = (state = {name: 'porcuppine'}, action) => {

    switch(action.type) {
        case "BUTTON_ACTION": {
            return {
                ...state,
                secretName: action.payload
            }
        }
        default: {
            return state
        }
    }

}