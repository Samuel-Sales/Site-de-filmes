import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export const useGetMovieDetail = (movieId) => {      // se isso nao funcionar usar export function useGetMovieDetail() {}
    const [movie, setMovie] = useState({});

    useEffect(() => {
        MoviesService.getMovieDetail(movieId)
            .then(({ data }) => setMovie(data))
    }, [movieId])

    return movie;
}