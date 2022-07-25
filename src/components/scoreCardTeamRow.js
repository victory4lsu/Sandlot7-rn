import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TeamBadge from './teamBadge';

const ScoreCardTeamRow = ({teamDetails, score}) => {
    return (
    <View style={[styles.scoreRow, {backgroundColor: teamDetails.backgroundColor}]}>
        <TeamBadge teamDetails={teamDetails}/>
        <Text style={[styles.scoreText, {color: teamDetails.fontColor, backgroundColor: teamDetails.backgroundColor}]}>{score}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    scoreRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
    scoreContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreText: {
        padding: 15,
        fontSize: 40
    }
});

export default ScoreCardTeamRow;