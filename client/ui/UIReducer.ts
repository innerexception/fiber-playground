import { UIReducerActions } from "../../data/enum";
import IntroRegion from '../../data/regions/Intro'

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
        region: IntroRegion,
        myId: null
    }
}