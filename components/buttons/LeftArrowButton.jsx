import { TouchableOpacity, Image } from "react-native"
import colors from '../../constants/colors'


const LeftArrowButton = ({ numItems, state, setState, width, height }) => {
    
    const handlePress = () => {
        if (state > 0) {
            setState(prev => prev - 1)
        }
        else {
            setState(numItems - 1)
        }
        console.log(state)
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image source={require('../../assets/icons/left_arrow.png')} style={{ resizeMode:"cover", width: width, height: height }}/>
        </TouchableOpacity>
    )
}

export default LeftArrowButton