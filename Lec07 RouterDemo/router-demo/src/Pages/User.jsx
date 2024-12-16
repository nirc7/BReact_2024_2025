import { useLocation } from "react-router-dom";


export default function User(props) {
    const { state } = useLocation();
    let studentData = state;

    return (
        <div>
            <h3>User Page</h3>
            user Id = {studentData.userId} <br />
            user name={studentData.userName}
        </div>
    )
}

