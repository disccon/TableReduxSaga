import {compose, withHandlers} from 'recompose';
import HeaderTable from './HeaderTable';



export default compose(
    withHandlers({
        onclickArrows: props => (arrowId,classArrow) => {
            props.onclickSetArrows(arrowId,classArrow)
        },
    }),

)(HeaderTable);

