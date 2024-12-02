import React from 'react'

export default function StudentList(props) {

  let studentsStr = props.students.map(
    stu => <div key={stu.id}>id= {stu.id} name= {stu.name}</div>
  );

  return (
    <div style={{ border: 'solid green 2px', margin: 5, padding: 5, borderRadius: 5 }}>
      <h3>STudents List: </h3>
      {studentsStr}
    </div>
  )
}
