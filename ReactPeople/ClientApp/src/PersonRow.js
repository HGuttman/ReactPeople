import React from 'react';


class PersonRow extends React.Component{
    render() {
        if (this.props.firstName == null && this.props.lastName == null && this.props.age == null) {
            return (
                <h1>No people added yet...</h1>
            )
        }
        else {
            return (
                <div>
                    <tr key={this.props.index} className={this.props.age > 65 ? 'table-danger' : ''}>
                        <td>{this.props.firstName}</td>
                        <td>{this.props.lastName}</td>
                        <td>{this.props.age}</td>
                    </tr>
                </div>
            );
        }
    }
}
export default PersonRow;