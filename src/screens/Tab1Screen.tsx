import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top + 10,
        }}>
            <Text style={styles.globalMargin}>
                Icons
            </Text>

            <Icon name="airplane-outline" size={80} color="#900" />
            <Icon name="bandage-outline" size={80} color="#900" />
            <Icon name="calendar-number-outline" size={80} color="#900" />
            <Icon name="aperture" size={80} color="#900" />
            <Icon name="aperture" size={80} color="#900" />
            <Icon name="finger-print-sharp" size={80} color="#900" />
            <Icon name="images-sharp" size={80} color="#900" />
            <Icon name="language-sharp" size={80} color="#900" />

        </View>
    )
}
