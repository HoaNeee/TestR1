import React, { useCallback, useEffect, useState } from "react"
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import { fetchData } from "../api/searchApi"
import {MyTextInput } from "../components";
import ItemLocation from "../components/itemLists/ItemLocationList";

import _ from 'lodash';

const testAddressScreen = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    //loading 1s
    const debounced = useCallback(
        _.debounce((query) => {
            fetchAddress(query)
        }, 1000),
        []
    )
    
    const fetchAddress = async (query) => {
        if (query.length > 0) {
            setIsLoading(true)
            try {
                const data = await fetchData(query)
                setResults(data)
            } catch (error) {
                console.error(error);

            }
            finally {
                setIsLoading(false)
            }
        }
    }

    //quan sat
    useEffect(() => {
        if (searchQuery.length > 0) {
            debounced(searchQuery)
        }
    }, [searchQuery])

    return <View style={styles.container}>
        <MyTextInput 
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            isLoading={isLoading}
            leftIconName={'search'}
            placeholder={'Enter keywork'}
        />
        
        {!isLoading && searchQuery.length > 0 ? (
            <FlatList data={results}
                renderItem={({ item }) => {

                    return (
                        <ItemLocation
                            item={item}
                            //handlePress={}
                            searchQuery={searchQuery}
                        />
                    )
                }}
                keyExtractor={(item) => item.id} />
        ) : <View>
            <Text>Please enter location</Text>
        </View>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
})

export default testAddressScreen