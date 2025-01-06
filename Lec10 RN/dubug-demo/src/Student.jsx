
export default function Student(props) {

    const btnAdd = () => {
        debugger;
        let num = 7;
        num++;
        console.log(num);
    }

    return (
        <div>
            id={props.id} <br />
            name={props.name} <br />
            <button onClick={btnAdd} >++</button>
        </div>
    )
}
