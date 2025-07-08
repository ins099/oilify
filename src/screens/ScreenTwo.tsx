import React from 'react';
import { StyleSheet } from 'react-native';
import SafeAreaWrapper from '../components/common/SafeAreaWrapper';
import { TextBig, TextBigger, TextNormal, TextSmall, TextSmaller } from '../components/common/Texts';

interface ScreenTwoProps {

}

const ScreenTwo: React.FC<ScreenTwoProps> = (props) => {

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

export default ScreenTwo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
