import {compose, withHandlers} from 'recompose';
import ContentTable from './ContentTable';



export default compose(
    withHandlers({
        getNewTable: props => (isOpen,index,homeworld,species,vehicles) => {
            props.onClickclGetNewTable(isOpen,props.results,index,homeworld,species,vehicles)
        },
    }),

    )(ContentTable);
