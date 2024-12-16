import { Link, Outlet } from 'react-router-dom';

export default function Root(props) {
    return (
        <div>
            <Link style={{ margin: 10 }} to="/">Home</Link> |
            <Link style={{ margin: 10 }} to="about">About</Link> |
            <Link style={{ margin: 10 }} to="menu/7">Manu</Link> | <br />
            START OUTLET
            <Outlet />
            END OUTLET
        </div>
    )
}
