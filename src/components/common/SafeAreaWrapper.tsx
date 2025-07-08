import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface SafeAreaWrapperProps {
    children: React.ReactNode;
    style?: ViewStyle
    clipTop?: boolean;
    clipLeft?: boolean;
    clipBottom?: boolean;
    clipRight?: boolean;

}

const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = (props) => {

    const { children, style, clipBottom, clipLeft, clipRight, clipTop } = props;
    const { top, bottom, left, right } = useSafeAreaInsets()

    const edges = {
        paddingTop: !clipTop ? top : 0,
        paddingBottom: !clipBottom ? bottom : 0,
        paddingLeft: !clipLeft ? left : 0,
        paddingRight: !clipRight ? right : 0,
    }

    return (
        <View style={[styles.container, edges, style]}>
            {children}
        </View>
    );
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
    }
});
