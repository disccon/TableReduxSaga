import initialState from "../stubs/initialState";





export default function stateReducer(state = initialState,action) {
    switch (action.type) {
        case 'LOADING_PENDING' : {
            return {
                ...state,
                status: 'loading',
            }
        }
        case 'LOADING_SUCCESS' : {
            return {
                ...state,
                results: action.results.results,
                error: undefined,
                status: 'loading success',
            }
        }
        case 'LOADING_FAILURE' : {
            return {
                ...state,
                entity: action.result,
                error: action.error,
                status: 'loading failure',
            }
        }





        case 'NEWTABLE_PENDING' : {
            return {
                ...state,
                status: 'newTable pending',
            }
        }
        case 'NEWTABLE_LOADING_SUCCESS' : {
            return {
                ...state,
                results: action.results,
                error: undefined,
                status: 'newTable loading success',
            }
        }
        case 'NEWTABLE_DELETE' : {
            return {
                ...state,
                results: action.results,
                error: undefined,
                status: 'newTable delete',
            }
        }


        default:
            return state;
    }
}









