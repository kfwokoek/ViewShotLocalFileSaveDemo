import { StyleSheet, Image, SafeAreaView, View } from 'react-native'
import React, {useState} from 'react'
import colors from '../../constants/colors'
import LeftArrowButton from '../../components/buttons/LeftArrowButton'
import RightArrowButton from '../../components/buttons/RightArrowButton'

const NewImage = () => {
    const [circleColorIndex, setCircleColorIndex] = useState(0);
    const [squareColorIndex, setSquareColorIndex] = useState(0);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <LeftArrowButton numItems={colors.length} state={circleColorIndex} setState={setCircleColorIndex} width={150} height={150}/>
                <Image source={require('../../assets/shapes/circle.png')} style={{ width: 150, height: 150, resizeMode: 'contain' }} tintColor={colors[circleColorIndex].hex}/>
                <RightArrowButton numItems={colors.length} state={circleColorIndex} setState={setCircleColorIndex} width={150} height={150}/>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 50}}>
                <LeftArrowButton numItems={colors.length} state={squareColorIndex} setState={setSquareColorIndex} width={150} height={150}/>
                <Image source={require('../../assets/shapes/square.png')} style={{ width: 150, height: 150, resizeMode: 'contain' }} tintColor={colors[squareColorIndex].hex}/>
                <RightArrowButton numItems={colors.length} state={squareColorIndex} setState={setSquareColorIndex} width={150} height={150}/>
            </View>
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