import { StyleSheet, Image, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import colors from '../../constants/colors'
import LeftArrowButton from '../../components/buttons/LeftArrowButton'
import RightArrowButton from '../../components/buttons/RightArrowButton'

const NewImage = () => {
    const [colorIndex, setColorIndex] = useState(0);
    return (
        <SafeAreaView style={styles.container}>
            <LeftArrowButton numItems={colors.length} state={colorIndex} setState={setColorIndex} width={200} height={200}/>
            <RightArrowButton numItems={colors.length} state={colorIndex} setState={setColorIndex} width={200} height={200}/>
            <Image source={require('../../assets/shapes/circle.png')} style={{ width: 200, height: 200, resizeMode: 'contain' }}/>
        </SafeAreaView>
    )
}

export default NewImage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });