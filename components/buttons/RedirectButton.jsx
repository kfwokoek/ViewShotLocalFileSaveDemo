import { TouchableOpacity, Text, View } from 'react-native'
import { useRouter } from 'expo-router';


const RedirectButton = ({ text, link, width, height, functionCall }) => {
    

    const router = useRouter();

    redirectLink = () => {
        if (functionCall !== undefined){
            functionCall()
        }
        router.push(link);
    }

    

    return (
        <View>
            <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                height: height,
                borderRadius: 40,
                borderWidth: 3,
                borderColor: 'white',
                margin: 13,
            }}
            onPress={redirectLink}
            >
                <Text 
                    style={{color: 'white'}}          
                    adjustsFontSizeToFit={true}
                    numberOfLines={1} >
                        
                        {text}
                </Text>
            </TouchableOpacity>
        
        </View>
        
    )
}

export default RedirectButton