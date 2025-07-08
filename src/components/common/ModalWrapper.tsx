import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { AppThemeContext } from '../../Contexts/ThemeProviders';
import { AppThemeType } from '../../utils/interface';
import { COLORS, FIXED_SIZES } from '../../utils/theme';

export type ModalWrapperType = {
    isVisible: boolean;
    closeOnBackDrop?: boolean;
    closeModal: () => void;
    onModalClose?: () => void;
    children?: React.ReactNode
}

const ModalWrapper: React.FC<ModalWrapperType> = (props) => {
    const { isVisible, closeModal, children, closeOnBackDrop, onModalClose } = props;
    const { theme } = useContext(AppThemeContext)
    const styles = dynamicStyles(theme)

    return (
        <ReactNativeModal
            isVisible={isVisible}
            avoidKeyboard
            style={styles.modal}
            // backdropColor={COLORS[theme].lightWhite}
            onModalHide={onModalClose}
            onBackButtonPress={closeModal}
            onBackdropPress={closeOnBackDrop ? closeModal : () => { }}
            animationIn={'slideInDown'}
            animationOut={'slideOutDown'}
            animationInTiming={500}
            animationOutTiming={500}
            hideModalContentWhileAnimating
            backdropTransitionInTiming={600}
            backdropTransitionOutTiming={600}
            backdropOpacity={0.5}
            backdropColor={COLORS[theme].black}
            hasBackdrop={true}
        >
            <View style={styles.container}>
                {children}
            </View>
        </ReactNativeModal >
    );
};

export default ModalWrapper;

const dynamicStyles = (theme: AppThemeType) => StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: COLORS[theme].white,
        borderRadius: FIXED_SIZES.smallBorderRadius,
        padding: FIXED_SIZES.padding,
        minWidth: 100,
        minHeight: 100
    },
    modal: {
        margin: 0,
        height: '100%',
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
    }

});