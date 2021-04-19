import React from 'react';


class PersonRow extends React.Component{
    render(){
        return(
            <div>
               <tr key = {this.props.index} className={this.props.age > 65 ? 'table-danger': '' }>
                   <td>{this.props.firstName}</td>
                   <td>{this.props.lastName}</td>
                   <td>{this.props.age}</td>
               </tr>
            </div>
        )
    }
}
export default PersonRow;