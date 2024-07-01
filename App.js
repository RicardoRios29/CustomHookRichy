import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Picker } from 'react-native';
import MovieDetail from './components/MovieDetail';

const App = () => {
  const [movieId, setMovieId] = useState(324857); // ID de "Spiderman: Into the Spider-Verse"

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <MovieDetail movieId={movieId} />
        <Picker
          selectedValue={movieId}
          onValueChange={(itemValue) => setMovieId(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Spiderman: Into the Spider-Verse" value={324857} />
          <Picker.Item label="RRR" value={579974} />
          <Picker.Item label="Lord of the Rings: The Return of the King" value={122} />
          <Picker.Item label="Star Wars: The Empire Strikes Back" value={1891} />
        </Picker>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  picker: {
    width: 300,
    marginTop: 20,
  },
});

export default App;
