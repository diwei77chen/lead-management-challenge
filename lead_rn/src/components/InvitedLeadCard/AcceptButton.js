import React from 'react';
import { Alert } from 'react-native';
import { Text, Button } from 'native-base';
import PropTypes from 'prop-types';
import themes from '@themes';

function AcceptButton({ onButtonPress }) {
    return (
        <Button 
            style={{ ...themes.gapRight, backgroundColor: themes.primaryColor }}
            onPress={() => Alert.alert(
                "",
                "Are you sure to accept this job?",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Accept job button alert canceled.")
                    },
                    {
                        text: "OK",
                        onPress: () => onButtonPress()
                    }
                ]
            )}
        >
            <Text>Accept</Text>
        </Button>
    )
}

AcceptButton.propTypes = {
    onButtonPress: PropTypes.func
}

export default AcceptButton;