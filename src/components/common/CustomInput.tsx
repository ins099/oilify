import React, { useContext, useRef, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { ms, scale } from 'react-native-size-matters';
import { COLORS } from '../../utils/theme';
import CustomIcon from './CustomIcon';
import { TextSmall, TextSmaller } from './Texts';
import { AppThemeType } from '../../utils/interface';
import { AppThemeContext } from '../../Contexts/ThemeProviders';
import { heightToDP, widthToDP } from 'react-native-responsive-screens';
import { utility } from '../../utils/utility';

interface InputProps extends TextInputProps {
  textInputContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  label?: string;
  error?: string | undefined;
  icon?: any;
}

const Input: React.FC<InputProps> = ({
  textInputContainerStyle,
  textInputStyle,
  containerStyle,
  error,
  secureTextEntry,
  onChangeText,
  value,
  label,
  icon,
  ...restProps
}: InputProps): JSX.Element => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean | undefined>(
    !!secureTextEntry,
  );

  const { theme } = useContext(AppThemeContext)
  const styles = dynamicStyles(theme)

  const labelVisible = !!label;

  return (
    <View style={{ gap: 5 }}>
      {labelVisible && (
        <TextSmall textStyle={styles.label}>{label}</TextSmall>
      )}
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.textInputContainer, textInputContainerStyle]}>
          <CustomIcon {...icon} />
          <TextInput
            ref={textRef}
            value={value}
            style={[styles.textInput, textInputStyle]}
            onChangeText={onChangeText}
            placeholderTextColor={COLORS[theme].lightgrey}
            secureTextEntry={isVisible}
            placeholder={restProps?.placeholder && utility.translate(restProps?.placeholder)}
          />
          {!!secureTextEntry && (
            <View
              style={{
                position: 'absolute',
                right: 0,
                top: !labelVisible ? 15 : -3.1,
              }}>
              <CustomIcon
                name={!isVisible ? 'eye-slash' : 'eye'}
                type="font-awesome-6"
                onPress={() => setIsVisible(p => !p)}
                size={scale(18)}
              />
            </View>
          )}
        </View>
      </View>
      <TextSmaller bold color={'red'}>
        {error && `* ${error}`}
      </TextSmaller>
    </View>
  );
};

export default Input;

const dynamicStyles = (theme: AppThemeType) => StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 8,
    height: heightToDP(5),
    maxHeight: 80,
    borderWidth: 1,
    paddingHorizontal: widthToDP(1),
    borderColor: COLORS[theme].borderGrey,
  },
  label: {},
  textInputContainer: {
    width: '100%',
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    fontSize: ms(8),
    paddingHorizontal: widthToDP(0.1),
    flex: 1,
    color: COLORS[theme].black,
  },
});
