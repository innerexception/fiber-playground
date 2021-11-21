import { UIReducerActions } from "../../data/enum";


const appReducer = (state = getInitialState(), action:any):RState => {
    switch (action.type) {
        case UIReducerActions.LOGOUT:
            return getInitialState()
        default:
            return state
    }
};

export default appReducer;

const getInitialState = (): RState => {
    return {
        boxes: 3
    }
}