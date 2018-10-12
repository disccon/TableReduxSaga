import {compose, withHandlers} from 'recompose';
import TitleSelectFilter from './TitleSelectFilter';


export default compose(
    withHandlers({
        SelectedFilter: props => event => {
            props.setSelectedFilter(props.name,event.target.value)
        },
    }),
)(TitleSelectFilter);

