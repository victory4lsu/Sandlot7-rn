import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ScoreCard from '../components/scoreCard';


const ScoreKeeper = () => {
    return (
        <View style={styles.container}>
            <ScoreCard/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderColor: 'blue',
        borderWidth: 2,
        alignItems: 'flex-start'
    }
});

export default ScoreKeeper;