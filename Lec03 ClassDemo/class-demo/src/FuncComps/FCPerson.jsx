
export default function FCPerson(props) {

  let myId=props.id;
  let myGrade=0;

  function btnPlus(){
    myId++; 
    console.log(myId);
    
  } 

  function chgGrade(event){
    myGrade = event.target.value;
    console.log(myGrade);    
  }

  return (
    <div style={{
      margin: 5,
      padding: 5,
      border: '2px solid green',
      borderRadius: 5
    }}>
      id = {myId} <br />
      name= {props.name} <br />
      <button onClick={btnPlus}>Id Plus</button>
      Grade: <input type="text" onChange={chgGrade}  />
      grsade= {myGrade}
    </div>
  );
}