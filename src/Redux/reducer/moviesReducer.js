import { ALLMOVIES } from "../type/tpye";

// 2- create reducer
const initialvalue = {
    name :'',
    movies : [] ,
    pageCount : 0   ,
}
export const moviesReduser = (state = initialvalue,action ) => {

    switch(action.type){
        case ALLMOVIES : 
        return {movies :action.data , pageCount :action.pages ,ditals:action.ditalsMovie};
        default :return state
    }
}
