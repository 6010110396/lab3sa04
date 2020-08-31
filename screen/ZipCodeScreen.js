import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Bangkok', code: '10210' },
    { place: 'Suratthani', code: '84110' },
   ]
   

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather',{zipCode: code})
    } }>
    <View style={styles.zipItem}>
    <Text style={styles.zipPlace}>{place}</Text>
    <Text style={styles.zipCode}>{code}</Text>
    </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        
        
        <ImageBackground source={require('../15.jpg')} style={styles.backdrop}>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            }}>    
        

        <FlatList
            data={availableZipItems}
            keyExtractor={item => item.code}
            renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
        <StatusBar style="auto" />
    </View>
    </ImageBackground> 
    );
   
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.9,
    },
    zipItem: {
        flex: 1,
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'auto',
    },

    zipPlace: {
        color: '#440066',  
        fontSize: 20,
        paddingTop: '2%',
        paddingBottom: '5%',
        paddingLeft: '20%', 
        fontWeight: "bold"
    },

    zipCode: {
        color: '#000099',  
        fontSize: 20,
        paddingTop: '2%',
        paddingBottom: '5%',
        paddingRight: '20%',
        fontWeight: "bold"
    },

});