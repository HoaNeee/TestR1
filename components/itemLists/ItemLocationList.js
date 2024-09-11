import { Linking, StyleSheet, TouchableOpacity, View } from "react-native"
import { HighlightedText } from ".."
import Icon from 'react-native-vector-icons/FontAwesome'

const handlePress = (latitude, longitude) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
    Linking.openURL(url).catch(err => console.error(err));
    //console.log(latitude,longitude);
}

const ItemLocation = (props) => {
    const { item, searchQuery } = props

    return (
        <View
            style={styles.container}
        >
            <View style={{
                flexDirection: 'row',
                width: '80%'
            }}>
                <Icon name={'map-marker'} size={25} style={styles.icon} />
                <HighlightedText text={item.title} keyword={searchQuery} />
            </View>
           <TouchableOpacity 
                onPress={() => handlePress(item.position.lat, item.position.lng)}
           >
           <Icon name={'compass'} size={25} style={styles.icon}/>
           </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        alignSelf: 'center',
        marginHorizontal: 10
    }
})

export default ItemLocation