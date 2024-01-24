import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

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

            <Text>                        
                <TouchableIcon iconName="airplane-outline"/>
                <TouchableIcon iconName="bandage-outline"/>
                <TouchableIcon iconName="calendar-number-outline"/>
                <TouchableIcon iconName="aperture"/>
                <TouchableIcon iconName="aperture"/>
                <TouchableIcon iconName="finger-print-sharp"/>
                <TouchableIcon iconName="images-sharp"/>
                <TouchableIcon iconName="language-sharp"/>
            </Text>

        </View>
    )
}
