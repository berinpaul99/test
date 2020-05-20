export const Reducer = (state = { name: "bp" }, action) => {
    switch (action.type) {
        case "button_action":
            return {
                ...state,
                code: action.value
            }

        default: {
            return state
        }
    }
}