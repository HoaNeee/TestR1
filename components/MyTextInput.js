import { ActivityIndicator, StyleSheet, TextInput, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'

const MyTextInput = (props) => {
    const {leftIconName,righIcon ,style, value, onChangeText, placeholder, isLoading} = props
    return (
        <View style={styles.container}>
            {isLoading ? (<ActivityIndicator 
            size={20} style={{padding: 15}}/>)
            
            : (leftIconName && <Icon name={leftIconName} size={20} color={'black'} style={{padding: 15 }}/>)}
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 20,
        margin: 15,
        backgroundColor: 'white',
        elevation: 5
    },
    textInput: {
        flex: 1,
        fontWeight: 'bold'
    }
})

export default MyTextInput