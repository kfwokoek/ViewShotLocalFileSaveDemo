import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RedirectButton from '../components/buttons/RedirectButton';

export default function App() {
  return (
    <View style={styles.container}>
      <RedirectButton text="Create New Image" link="/NewImage" width={200} height={75} />
      <RedirectButton text="View Saved Images" link="/SavedImages" width={200} height={75} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
