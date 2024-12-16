import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuPage from "./Pages/MenuPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Root from "./Pages/Root";
import User from "./Pages/User";

export default function App2(props) {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
            ],
        },
        {
            path: "/menu/:userId",
            element: <MenuPage />
        },
        {
            path: "/user",
            element: <User />
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
