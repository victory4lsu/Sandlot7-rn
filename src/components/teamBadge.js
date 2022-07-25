import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from '@rneui/themed';

const TeamBadge = ({teamDetails}) => {

    return (
<View style={[styles.teamContainer, {backgroundColor: teamDetails.backgroundColor}]}>
    <Avatar
          size={64}
          rounded
          source={teamDetails.logoUrl ? { uri: teamDetails.logoUrl} : {}}
          key={`${teamDetails.name}-${teamDetails.id}`}
        />
    <View style={styles.teamDetails}>
        <Text style={[styles.teamName, {color: teamDetails.fontColor}]}>{teamDetails.name}</Text>
        <Text style={[styles.teamMascot, {color: teamDetails.fontColor}]}>{teamDetails.mascot}</Text>
    </View>
</View>
    );
};

const styles = StyleSheet.create({
    teamContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15     
    },
    teamDetails: {
        paddingLeft: 15
    },
    teamName: {
        fontSize: 18,
        fontWeight: '600'
    },
    teamMascot: {
        fontSize: 16,
        fontWeight: '600'
    }
});

export default TeamBadge;