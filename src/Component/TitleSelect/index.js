import {compose, withHandlers} from 'recompose';
import TitleSelect from './TitleSelect';


export default compose(
    withHandlers({
        chooseOption: props => event => {
            props.setSelectedActive(props.name,event.target.value)
        },
    }),
)(TitleSelect);

