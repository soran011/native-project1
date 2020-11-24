import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';


function Screen({ children }) {
    return (
        <SafeAreaView style={styles.sreen}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sreen: {
        paddingTop: Constants.StatusBarHeight,
        flex: 1,
    }
})
export default Screen;