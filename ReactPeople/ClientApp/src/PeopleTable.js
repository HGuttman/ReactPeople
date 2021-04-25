  
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PersonRow from './PersonRow.js';
import PersonForm from './PersonForm.js';

class PeopleTable extends React.Component{
  state = {
          firstName:'',
          lastName:'',
          age:'',
      people: []
  }
onAddClick = () =>{
    const { firstName, lastName, age, people } = this.state;
    const person = {
        firstName, lastName, age
    };
    const peopleCopy = [...people, person];
    this.setState({ people: peopleCopy, firstName: '', lastName: '', age: '' });
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
    const empty = [];
    this.setState({ People: empty });
};
    FillTable = () => {
        if (this.state.people.length == 0) {
            return <h1>No people added yet...</h1>
        }
        else {
            return  <table className = "table table-hover table-bordered table-striped mt-3" >
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.people.map((person, idx) => <PersonRow
                        firstName={person.firstName}
                        lastName={person.lastName}
                        age={person.age}
                        index={idx} />)}
                </tbody>
            </table >
                }
           }

    render() {
        return (
            <div className='container'>
                <PersonForm
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age}
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                />
                <div className='container'>
                    {this.FillTable()}
                </div>
            </div>
        );
    }
  }

export default PeopleTable;