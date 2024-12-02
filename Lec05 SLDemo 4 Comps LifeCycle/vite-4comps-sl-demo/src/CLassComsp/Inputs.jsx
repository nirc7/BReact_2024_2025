import { Component } from 'react';

export default class Inputs extends Component {
    constructor(props) {
        super(props);

        //this.state = {};
    }

    chgId = (e) => {
        this.setState({ id: e.target.value });
    }

    chgName = (e) => {
        this.setState({ name: e.target.value });
    }

    btnAddStudwent = () => {
        this.props.sendStudent2P(this.state.id, this.state.name);
    }

    render() {
        return (
            <div style={{ border: 'solid red 2px', margin: 5, padding: 5, borderRadius: 5 }}>
                ID: <input type="text" onChange={this.chgId} /> <br />
                NAME: <input type="text" onChange={this.chgName} /> <br />
                <button onClick={this.btnAddStudwent} >Add Stjudent</button>
            </div>
        )
    }
}
