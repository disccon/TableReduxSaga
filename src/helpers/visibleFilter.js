const visibleFilter = (initialState,visibilityFilters, arrowState,sortStateArrows) => {
    if (initialState.results) {
        let resultsVisible = initialState.results;
        if (visibilityFilters.genderFilter !== 'all') {
            if (visibilityFilters.genderFilter === 'male') {
                resultsVisible = resultsVisible.filter((t) => {
                    return t.gender === 'male'
                });
            }
            else if (visibilityFilters.genderFilter === 'female') {
                resultsVisible = resultsVisible.filter((t) => {
                    return t.gender === 'female'
                });
            }
        }

        if (visibilityFilters.hairColorFilter !== 'all') {
            if (visibilityFilters.hairColorFilter === 'blond') {
                resultsVisible = resultsVisible.filter((t) => {
                    return t.hair_color.includes('blond');
                });
            }
            else if (visibilityFilters.hairColorFilter === 'brown') resultsVisible = resultsVisible.filter((t) => {
                return t.hair_color.includes('brown');
            });
            else if (visibilityFilters.hairColorFilter === 'black') resultsVisible = resultsVisible.filter((t) => {
                return t.hair_color.includes('black');
            });
            else if (visibilityFilters.hairColorFilter === 'red') resultsVisible = resultsVisible.filter((t) => {
                return t.hair_color.includes('red');
            });
        }

        if (visibilityFilters.massFilter !== 'all') {
            if (visibilityFilters.massFilter === '50') resultsVisible = resultsVisible.filter((t) => {
                return t.mass < 50;
            });
            else if (visibilityFilters.massFilter === '50 - 100') resultsVisible = resultsVisible.filter((t) => {
                return t.mass >= 50 && t.mass < 100
            });
            else if (visibilityFilters.massFilter === '100 - 150') resultsVisible = resultsVisible.filter((t) => {
                return t.mass >= 100 && t.mass < 150
            });
            else if (visibilityFilters.massFilter === '150 >') resultsVisible = resultsVisible.filter((t) => {
                return t.mass >= 150
            });
        }
        return sortStateArrows(resultsVisible,arrowState)
    }
    return []
}

export default visibleFilter;