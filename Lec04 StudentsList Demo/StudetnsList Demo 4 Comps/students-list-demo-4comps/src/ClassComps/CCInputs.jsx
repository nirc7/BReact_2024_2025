import { Component } from 'react';

export default class CCInputs extends Component {


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
   
  }

  render() {
    return (
      <div style={{
        border: '2px dashed red',
        borderRadius: 10, margin: 5,
        padding: 10
      }} >
        ID: <input type="text" onChange={this.chgId} /> <br />
        Name: <input type="text" onChange={this.chgName} /> <br />
        Grade: <input type="text" onChange={this.chgGrade} /> <br />
        <button onClick={this.btnAddStudnet} className='btn btn-success' >Add Studnet</button> <br />
      </div>
    )
  }
}
