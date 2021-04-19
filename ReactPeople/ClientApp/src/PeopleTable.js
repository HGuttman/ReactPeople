  
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PersonRow from './PersonRow.js';
import PersonForm from './PersonForm.js';

class PeopleTable extends React.Component{
  state = {
      person:{
          firstName:'',
          lastName:'',
          age:''
      },
      people: []
  }
onAddClick = () =>{
    const { firstName, lastName, age, People } = this.state;
    const person = {
        firstName, lastName, age
    };
    const peopleCopy = [...People, person];
    this.setState({ People: peopleCopy, firstName: '', lastName: '', age: '' });
}

  onFirstNameChange = e =>{
      let firstName = e.target.value;
      this.setState({firstName});
  };
  onLastNameChange = e =>{
    let lastName = e.target.value;
    this.setState({lastName});
};
onAgeChange = e =>{
    let age = e.target.value;
    this.setState({age});
};
onClearClick = () =>{
    this.setState({people: [] });
};
FillTable = () =>{
    if(this.state.people.count == 0){
        return <h2>No people added yet...</h2>
    }
    else{
        return
        <table className = "table-hover table-bordered table-striped">
            <thead>
                <tr>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {this.state.people.map((person, idx) => <PersonRow
                firstName = {person.firstName}
                lastName = {person.lastName}
                age = {person.age}
                index = {idx} /> )}
            </tbody>
        </table>
    }
}

  render(){
    return(
        <div className = 'container'>
            <PersonForm
            person = {this.state.person}
            onFirstNameChange = {this.onFirstNameChange}
            onLastNameChange = {this.onLastNameChange}
            onAgeChange = {this.onAgeChange}
            onAddClick ={this.onAddClick}
            onClearClick = {this.onClearClick}
            />
            {this.FillTable()}
        </div>
    )
  }

}
export default PeopleTable;