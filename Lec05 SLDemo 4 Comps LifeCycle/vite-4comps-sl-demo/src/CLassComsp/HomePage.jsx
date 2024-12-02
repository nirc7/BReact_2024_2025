import React, { Component } from 'react'
import Inputs from './Inputs'
import StudentList from '../FuncComps/StudentList'
import FCInputs from '../FuncComps/FCInputs';

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: []
        };

        console.log('ctor');
        //go to DB .....setsTATET() //ERROR
    }

    componentDidMount() {
        //go to DB .....setsTATET() //GOOD
        //this.setState({ students: newStudents });
        console.log('componentDidMount'); 
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');   
        //go to db save the sthistrrt     
    }

    getStudentFromChild = (id, name) => {
        let newStudents = [
            ...this.state.students,
            { id, name }
        ];
        console.log(newStudents);
        this.setState({ students: newStudents });
        console.log('after', this.state.students);        
    }

    render() {
        console.log('render');

        return (
            <div style={{ border: 'solid blue 2px', margin: 5, padding: 5, borderRadius: 5 }}>
                Hompe
                <FCInputs sendStudent2P={this.getStudentFromChild} />
                <Inputs sendStudent2P={this.getStudentFromChild} />
                <StudentList students={this.state.students} />
            </div>
        )
    }
}
