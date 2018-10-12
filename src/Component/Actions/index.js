
export function getRepos(dataName) {
    return{ payload:dataName,type: 'LOADING'};
}

export function setFilter(groupFilter,eventTarget){
    return{ sectorFilter:groupFilter, filter:eventTarget, type: 'FILTER'};
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
