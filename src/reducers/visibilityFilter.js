const visibilityFilter = (state = state, action) => {
    //console.log('22222',state,action)
    switch (action.filter) {
        case 'ARROW_NAME_SUCCESS':
            return action.filter
        default:
            return action
    }
}

export default visibilityFilter;
