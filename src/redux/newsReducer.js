import { GET_NEWS } from "../action/types";

initialState={news:[]}
export default function(state=initialState,action){
    switch(action.type){
        case GET_NEWS:
            // console.log(action.payload,"in the reducer")
        return {...state,news:action.payload}
        default:
        return state

    }
}