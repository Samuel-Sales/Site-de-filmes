import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/movieDetails/MovieDetails";

export const router = createBrowserRouter ([
    // Nessa primeira ela vai ser uma rota base da nossa aplicacao
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/movie/:movieId",
                element: <MovieDetails />
            }
        ]
    }
])