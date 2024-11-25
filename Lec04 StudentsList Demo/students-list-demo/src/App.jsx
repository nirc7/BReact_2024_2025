
import { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    //let myid2; // local var
    //this.myid; //field

    this.state = {
      id: null,
      students: [{ id: 1, name: 'avi', grade: 100 }, { id: 2, name: 'benny', grade: 101 }]
    };
  }

  chgId = (e) => {
    this.setState({ id: Number(e.target.value) });
  }

  chgName = (e) => {
    this.setState({ name: e.target.value });
  }
  chgGrade = (e) => {
    this.setState({ grade: Number(e.target.value) });
  }

  btnAddStudnet = () => {
    let newStudents = [...this.state.students,
    { id: this.state.id, name: this.state.name, grade: this.state.grade }];

    console.log(newStudents);    
    this.setState({ students: newStudents});
  }

  render() {
    let studentsStr = this.state.students.map(stu =>
      <div key={stu.id} >id={stu.id} name={stu.name} grade={stu.grade}</div>);

    return (
      <>
        <h1>Students List</h1>
        <div className="card">
          ID: <input type="text" onChange={this.chgId} /> <br />
          Name: <input type="text" onChange={this.chgName} /> <br />
          Grade: <input type="text" onChange={this.chgGrade} /> <br />
          <button onClick={this.btnAddStudnet} className='btn btn-success' >Add Studnet</button> <br />
          <h2>List:</h2>
          {studentsStr}
        </div>
      </>
    );
  }
}

