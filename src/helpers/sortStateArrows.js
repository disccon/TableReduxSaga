
const sortStateArrows = (resultsVisibili,arrowState) => {
    if (arrowState.arrowName === 'fa fa-arrow-down' || arrowState.arrowName === 'fa fa-arrow-up') {
        let SortState = resultsVisibili.sort(function (a, b) {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        if (arrowState.arrowName === 'fa fa-arrow-up') {
            return SortState.reverse()
        } else {
            return SortState;
        }
    } else if (arrowState.arrowHeight === 'fa fa-arrow-down' || arrowState.arrowHeight === 'fa fa-arrow-up') {
        let SortState = resultsVisibili.sort(function (a, b) {
            return a.height - b.height;
        });
        if (arrowState.arrowHeight === 'fa fa-arrow-up') {
            return SortState.reverse()
        } else {
            return SortState;
        }
    } else if (arrowState.arrowMass === 'fa fa-arrow-down' || arrowState.arrowMass === 'fa fa-arrow-up') {
        let SortState = resultsVisibili.sort(function (a, b) {
            return a.mass - b.mass;
        });
        if (arrowState.arrowMass === 'fa fa-arrow-up') {
            return SortState.reverse()
        } else {
            return SortState;
        }
    } else if (arrowState.arrowBirthYear === 'fa fa-arrow-down' || arrowState.arrowBirthYear === 'fa fa-arrow-up') {
        let SortState = resultsVisibili.sort(function (a, b) {
            let birthYearA = parseInt(a.birth_year, 10)
            let birthYearB = parseInt(b.birth_year, 10)
            if (isNaN(birthYearA)) {
                birthYearA = 9999999;
            }
            if (isNaN(birthYearB)) {
                birthYearB = 9999999;
            }
            if (birthYearA > birthYearB) {
                return 1;
            }
            if (birthYearA < birthYearB) {
                return -1;
            }
            return 0;
        });
        if (arrowState.arrowBirthYear === 'fa fa-arrow-up') {
            return SortState.reverse()
        } else {
            return SortState;
        }
    }
    else {
        return resultsVisibili
    }
}
export default sortStateArrows;