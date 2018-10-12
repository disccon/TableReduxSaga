const visibilityFiltersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FILTER_GENDER_SUCCESS' : {
            return {
                ...state,
                genderFilter: action.filter,
                error: undefined,
                status: 'Filter success',
            }
        }
        case 'FILTER_HAIRCOLOR_SUCCESS' : {
            return {
                ...state,
                hairColorFilter: action.filter,
                error: undefined,
                status: 'Filter success',
            }
        }
        case 'FILTER_MASS_SUCCESS' : {
            return {
                ...state,
                massFilter: action.filter,
                error: undefined,
                status: 'Filter success',
            }
        }
        case 'FILTER_FAILURE' : {
            return {
                ...state,
                error: action.error,
                status: 'Filter failure',
            }
        }
        default:
            return state
    }
}

export default visibilityFiltersReducer;
