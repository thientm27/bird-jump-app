import { createBrowserRouter, createHashRouter } from "react-router-dom"
import Ton from "./pages/TonPage/Ton"
import  PlayPage  from "./pages/GamePage/Game"

export const router = createHashRouter([
    {   
        path: "/",
        element: <Ton />,
        children: [
            {
                path: "/game",
                element: <PlayPage />,
            },
        ]
    },
]
)
