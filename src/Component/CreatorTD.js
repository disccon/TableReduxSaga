import React, {Fragment} from 'react';

export default class CreatorTD extends React.Component{
    render() {
        return (
            <Fragment>
                {this.props.list.map((name,index) => {
                    return <td key={index}>{`${name}`}</td>
                })
                }
            </Fragment>

        )
    }
}