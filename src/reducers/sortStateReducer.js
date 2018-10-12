import arrowsState from "../stubs/arrowsState";

const SortStateReducer = (state = arrowsState, action ) => {
    switch (action.type) {
        case 'ARROW_NAME_SUCCESS' : {
            return {
                ...state,
                arrowName: action.arrowClass,
                arrowHeight: 'fa fa-arrows-v',
                arrowMass:'fa fa-arrows-v',
                arrowBirthYear:'fa fa-arrows-v',
                error: undefined,
                status: 'change arrow Name class success',
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
                status: 'change arrow Height class success',
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
                status: 'change arrow Mass class success',
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
                status: 'change arrow Birth Year class success',
            }
        }
        case 'ARROW_FAILURE' : {
            return {
                ...state,
                error: action.error,
                status: 'change arrow class failure',
            }
        }
        default:
            return state
    }
}

export default SortStateReducer;