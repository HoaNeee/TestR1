import { Text } from "react-native";

//GPT
const HighlightedText = ({ text, keyword }) => {
    if (!keyword) return <Text>{text}</Text>;

    //tim vi tri cua key
    const keywordIndex = text.toLowerCase().indexOf(keyword.toLowerCase());

    if (keywordIndex === -1) {
        //key === -1 khong bold
        return <Text style={{
            alignSelf: 'center'
        }}>{text}</Text>;
    }

    // tach chuoi thanh 3 phan
    const beforeHighlight = text.slice(0, keywordIndex);
    const highlighted = text.slice(keywordIndex, keywordIndex + keyword.length);
    const afterHighlight = text.slice(keywordIndex + keyword.length);

    return (
        <Text style={{
            alignSelf: 'center'
        }}>
            {beforeHighlight}
            <Text style={{ fontWeight: 'bold' }}>{highlighted}</Text>
            {afterHighlight}
        </Text>
    );
};

export default HighlightedText