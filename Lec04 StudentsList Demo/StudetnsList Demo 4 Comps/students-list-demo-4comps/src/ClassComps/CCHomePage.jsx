import { Component, } from 'react';
import CCInputs from './CCInputs';
import FCStudentsList from '../FuncComps/FCStudentsList';

export default class CCHomePage extends Component {
  render() {
    return (
      <div style={{
        border: '2px solid green',
        borderRadius: 10,
        margin:5,
        padding:10
      }}>
        HP
        <CCInputs/>
        <FCStudentsList/>
      </div>
    )
  }
}
