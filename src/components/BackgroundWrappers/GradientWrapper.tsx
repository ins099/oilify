import React, { useContext } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppThemeContext } from '../../Contexts/ThemeProviders';
import { AppThemeType } from '../../utils/interface';
import { COLORS } from '../../utils/theme';

interface GradientWrapperInterface {
    children: React.ReactNode;
    containerStyle?: ViewStyle | ViewStyle[]
}

const GradientWrapper: React.FC<GradientWrapperInterface> = (props) => {
    const { children, containerStyle } = props;
    const { theme } = useContext(AppThemeContext)
    const styles = dynamicStyles(theme)
    
    return (
        <LinearGradient
            colors={[COLORS[theme].secondary, COLORS[theme].primary]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={containerStyle}
        >
            {children}
        </LinearGradient>
    );
};

export default GradientWrapper;

const dynamicStyles = (theme: AppThemeType) => StyleSheet.create({
    container: {
        flex: 1
    }
});