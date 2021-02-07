import React from 'react';
import { View, Text } from 'native-base';
import themes from '@themes';

function JobID({ jobID }) {
    return (
        <View style={themes.row}>
            <Text style={themes.secondaryText}>Job ID: {jobID}</Text>
        </View>
    )
}

export default JobID;