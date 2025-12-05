import React, { useState, useRef } from 'react';
import { StyleSheet, View, ActivityIndicator, StatusBar, BackHandler, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Load from deployed Vercel URL
const APP_URL = 'https://trustwise-ai.vercel.app';

export default function App() {
    const [canGoBack, setCanGoBack] = useState(false);
    const webViewRef = useRef<WebView>(null);

    // Handle Android back button
    React.useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
                if (canGoBack && webViewRef.current) {
                    webViewRef.current.goBack();
                    return true;
                }
                return false;
            });
            return () => backHandler.remove();
        }
    }, [canGoBack]);

    return (
        <SafeAreaProvider>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <SafeAreaView style={styles.container} edges={['top']}>
                <WebView
                    ref={webViewRef}
                    source={{ uri: APP_URL }}
                    originWhitelist={['*']}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    allowsBackForwardNavigationGestures={true}
                    onNavigationStateChange={(navState) => {
                        setCanGoBack(navState.canGoBack);
                    }}
                    renderLoading={() => (
                        <View style={styles.loaderContainer}>
                            <ActivityIndicator
                                color="#2563eb"
                                size="large"
                            />
                        </View>
                    )}
                    style={styles.webview}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    webview: {
        flex: 1,
    },
    loaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});
