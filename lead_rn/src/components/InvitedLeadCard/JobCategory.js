import React from 'react';
import { View, Icon, Text } from 'native-base';
import PropTypes from 'prop-types';
import themes from '@themes';

function JobCategory({ categoryName }) {
    return (
        <View style={themes.row}>
            <Icon style={themes.gapRight} name="briefcase-outline" />
            <Text style={themes.secondaryText}>{categoryName}</Text>
        </View>
    )
}

JobCategory.propTypes = {
    categoryName: PropTypes.string
}

export default JobCategory;