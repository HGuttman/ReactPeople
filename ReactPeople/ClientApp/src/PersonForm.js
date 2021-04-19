import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
//import ReactDOM from 'react-dom';

class PersonForm extends React.Component{
render(){
    return(
<div className = "row jumbotron">
    
    <div className = "col-md-2">
        <input type="text" className = "form-control" value = {this.props.person.firstName} placeholder = "First Name" onChange = {this.props.onFirstNameChange}/>
    </div>
    <div className = "col-md-2">
        <input type="text" className = "form-control" value = {this.props.person.lastName} placeholder = "Last Name" onChange = {this.props.onLastNameChange}/>
    </div>
    <div className = "col-md-2">
        <input type="text" className = "form-control" value = {this.props.person.age} placeholder = "Age" onChange = {this.props.onAgeChange}/>
    </div>
    <div className = "col-md-2">
        <button className = "btn btn-warning" onClick={this.props.onAddClick}>Add</button>
    </div>
    <div className = "col-md-2">
        <button className = "btn btn-danger" onClick={this.props.onClearClick}>Clear</button>
    </div>

</div>
       );
    }
}
export default PersonForm;