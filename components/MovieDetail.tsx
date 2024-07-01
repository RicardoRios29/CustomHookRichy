import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import useMovieDetails from '../hooks/useMovieDetails';

interface MovieDetailProps {
  movieId: number;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movieId }) => {
  const { loading, movieData, error } = useMovieDetails(movieId);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;
  if (!movieData) return null;

  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${movieData.poster_path}` }}
      />
      <Text style={styles.title}>{movieData.title}</Text>
      <Text style={styles.overview}>{movieData.overview}</Text>
      <Text>Release Date: {movieData.release_date}</Text>
      <Text>Rating: {movieData.vote_average}/10</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  poster: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  overview: {
    marginBottom: 10,
  },
});

export default MovieDetail;