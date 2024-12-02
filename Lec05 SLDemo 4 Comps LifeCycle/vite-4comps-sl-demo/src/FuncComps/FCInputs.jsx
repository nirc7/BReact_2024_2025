import React from 'react'

export default function FCInputs(props) {

    let id= null;
    let name=null;

    const chgId = (e) => {
        id= e.target.value ;
    }

    const chgName = (e) => {
        name= e.target.value;
    }

    const btnAddStudwent = () => {
        props.sendStudent2P(id, name);
    }


    return (
        <div style={{ border: 'solid yellow 2px', margin: 5, padding: 5, borderRadius: 5 }}>
            ID: <input type="text" onChange={chgId} placeholder='enter the num' /> <br />
            NAME: <input type="text" onChange={chgName} /> <br />
            <button onClick={btnAddStudwent} >Add Stjudent</button>
        </div>
    )
}
