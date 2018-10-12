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


        case 'CHOOSE_GENDER_SUCCESS' : {
            return {
                ...state,
                genderVisible: action.target,
                error: undefined,
                status: 'choose success',
            }
        }
        case 'CHOOSE_HAIRCOLOR_SUCCESS' : {
            return {
                ...state,
                hairColorVisible: action.target,
                error: undefined,
                status: 'choose success',
            }
        }
        case 'CHOOSE_MASS_SUCCESS' : {
            return {
                ...state,
                massVisible: action.target,
                error: undefined,
                status: 'choose success',
            }
        }
        case 'CHOOSE_FAILURE' : {
            return {
                ...state,
                error: action.error,
                status: 'choose failure',
            }
        }


        case 'ARROW_NAME_SUCCESS' : {
            return {
                ...state,
                arrowName: action.arrowClass,
                arrowHeight: 'fa fa-arrows-v',
                arrowMass:'fa fa-arrows-v',
                arrowBirthYear:'fa fa-arrows-v',
                error: undefined,
                status: 'change icons success',
            }
        }
        case 'ARROW_HEIGHT_SUCCESS' : {
            return {
                ...state,
                arrowHeight: action.arrowClass,
                arrowName:'fa fa-arrows-v',
                arrowMass:'fa fa-arrows-v',
                arrowBirthYear:'fa fa-arrows-v',
                error: undefined,
                status: 'change icons success',
            }
        }
        case 'ARROW_MASS_SUCCESS' : {
            return {
                ...state,
                arrowMass: action.arrowClass,
                arrowHeight: 'fa fa-arrows-v',
                arrowName:'fa fa-arrows-v',
                arrowBirthYear:'fa fa-arrows-v',
                error: undefined,
                status: 'change icons success',
            }
        }
        case 'ARROW_BRIRTHYEAR_SUCCESS' : {
            return {
                ...state,
                arrowBirthYear: action.arrowClass,
                arrowHeight: 'fa fa-arrows-v',
                arrowName: 'fa fa-arrows-v',
                arrowMass: 'fa fa-arrows-v',
                error: undefined,
                status: 'change icons success',
            }
        }
        case 'ARROW_FAILURE' : {
            return {
                ...state,
                error: action.error,
                status: 'change icons failure',
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









