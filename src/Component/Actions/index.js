
export function getRepos(dataName) {
    return{ payload:dataName,type: 'LOADING'};
}

export function setSelectedSort(selectName,eventTarget){
    return{ payload:selectName, target:eventTarget, type: 'CHOOSE'};
}

export function setArrows(arrowId,arrowClass){
    return{ arrowId:arrowId, type: 'ARROW',arrowClass: arrowClass};
}

export function getNewTable( isOpen,results,index,homeworld,species,vehicles){
    return{
        payload:isOpen,
        results,
        homeworld,
        species,
        vehicles,
        index,
        type: 'NEWTABLE'};
}
