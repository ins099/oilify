import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../components/common/SafeAreaWrapper';
import { TextBig, TextBigger, TextNormal, TextSmall, TextSmaller } from '../components/common/Texts';

interface ScreenThreeProps {

}

const ScreenThree: React.FC<ScreenThreeProps> = (props) => {

    const { } = props;

    return (
        <SafeAreaWrapper clipBottom style={styles.container}>
            <TextBigger>Bigger</TextBigger>
            <TextBig>Big</TextBig>
            <TextNormal>Normal</TextNormal>
            <TextSmall>Small</TextSmall>
            <TextSmaller>Smaller</TextSmaller>
        </SafeAreaWrapper>
    );
};

export default ScreenThree;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
