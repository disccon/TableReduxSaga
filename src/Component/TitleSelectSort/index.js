import {compose, withHandlers} from 'recompose';
import TitleSelectSort from './TitleSelectSort';


export default compose(
    withHandlers({
        setSortActive: props => event => {
            props.setSelectedSortActive(props.name,event.target.value)
        },
    }),
)(TitleSelectSort);

