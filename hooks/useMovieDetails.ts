import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '266edcd9b7717f14479631f49b4c68e5'; 
const BASE_URL = 'https://api.themoviedb.org/3';

interface MovieData {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const useMovieDetails = (movieId: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!movieId) return;

      setLoading(true);
      try {
        const response = await axios.get<MovieData>(`${BASE_URL}/movie/${movieId}`, {
          params: {
            api_key: API_KEY,
            language: 'en-US',
          },
        });
        setMovieData(response.data);
        setError(null);
      } catch (err) {
        setError('Error fetching movie details');
        setMovieData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return { loading, movieData, error };
};

export default useMovieDetails;