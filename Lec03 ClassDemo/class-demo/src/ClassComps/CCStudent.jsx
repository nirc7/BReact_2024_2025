import { Component, startTransition } from "react";


export default class CCStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grade: this.props.grade,
      name: this.props.name
    };
  }


  btnAddBomus = () => {
    //this.state.grade += 5 //ERROR!!!
    //this.setState({ grade: 200, name: 'dora' });
    this.setState(prevS => ({
      grade: prevS.grade + 5,
      name: prevS.name + ":)",
      age: 60
    }));
  }

  render() {
    return (
      <div style={{
        margin: 5,
        padding: 5,
        border: '2px solid red',
        borderRadius: 5
      }}>
        id = {this.props.id} <br />
        name= {this.state.name} <br />
        props grade={this.props.grade} <br />
        state grtade =  {this.state.grade} <br />
        age={this.state.age} <br />
        <button onClick={this.btnAddBomus}>Add Bomus</button>
        {/* <button onClick={btnPlus}>Id Plus</button>
        Grade: <input type="text" onChange={chgGrade} />
        grsade= {myGrade} */}
      </div>
    );
  }
}