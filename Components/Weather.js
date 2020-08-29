import React, { useState } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <ImageBackground source={require('../15.jpg')} style={styles.backdrop}>
            <Forecast {...forecastInfo}/>
        </ImageBackground>


        
    )

   }

const styles = StyleSheet.create({
    backdrop:{
        width: '100%',
        height: '100%'

    }
})