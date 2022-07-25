import { color } from '@rneui/base';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScoreCardTeamRow from './scoreCardTeamRow';

const ScoreCard = () => {
    let team1 = {
        id: 1,
        logoUrl: 'https://static.hudl.com/users/prod/3958495_4fc9b3508f9e43fa9ce45baf7d8a7ec5.jpg',
        name: 'Woodlawn Baton Rouge',
        mascot: 'Panthers',
        backgroundColor: '#461D7C',
        fontColor: '#FFFFFF'
    }
    let team2 = {
        id: 2,
        logoUrl: 'https://i.pinimg.com/originals/f4/f0/11/f4f011cd07a0e83957f200d68778009a.jpg',
        name: 'Catholic Baton Rouge',
        mascot: 'Bears',
        backgroundColor: '#000000',
        fontColor: '#FFFFFF'
    }

    return (
        <View style={styles.scorekeeperContainer}>
            <ScoreCardTeamRow teamDetails={team1} score='17' />
            <ScoreCardTeamRow teamDetails={team2} score='2' />
        </View>
    )
};

const styles = StyleSheet.create({
    scorekeeperContainer : {
        width: '100%'
    }
})

export default ScoreCard;