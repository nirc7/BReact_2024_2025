import { useNavigate } from "react-router-dom";

export default function Home(props) {
    const navigate = useNavigate();

    const btngo2UserPage = () => {

        let studentData = {
            userId: 7,
            userName: 'avi'
        };

        navigate('user', { state: studentData });
    }

    return (
        <div>
            <h3>Home Page</h3>
            <button onClick={btngo2UserPage}>go2UserPage</button>
        </div>
    )
}
