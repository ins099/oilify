import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import SafeAreaWrapper from '../components/common/SafeAreaWrapper';
import { TextBig, TextBigger, TextNormal, TextSmall, TextSmaller } from '../components/common/Texts';
import { useNotifications } from '../utils/hooks/useNotifications';
import CustomButton from '../components/common/CustomButton';
import { AppThemeContext } from '../Contexts/ThemeProviders';
import { AppThemeType } from '../utils/interface';
import { COLORS } from '../utils/theme';

interface ScreenOneProps {

}

const ScreenOne: React.FC<ScreenOneProps> = (props) => {

    const { } = props;
    const { sendNotification, onCreateTriggerNotification } = useNotifications()

    const { toggleTheme, theme } = useContext(AppThemeContext)

    const styles = dynamicStyles(theme)

    return (
        <SafeAreaWrapper clipBottom style={styles.container}>
            <TextBigger>LOGIN</TextBigger>
            <TextBig>Big</TextBig>
            <TextNormal>Normal</TextNormal>
            <TextSmall>Small</TextSmall>
            <TextSmaller>Smaller</TextSmaller>
            <CustomButton onPress={() => toggleTheme()} title='Toggle Theme' />
            <CustomButton onPress={() => sendNotification({})} title='Send Notification' />
            <CustomButton onPress={() => onCreateTriggerNotification()} title='Trigger Notification' />
        </SafeAreaWrapper >
    );
};

export default ScreenOne;

const dynamicStyles = (theme: AppThemeType) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: COLORS[theme].background
    }
});
