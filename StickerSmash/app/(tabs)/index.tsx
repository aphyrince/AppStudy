import { StyleSheet, View } from 'react-native';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/images/background-image.png');

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage} />
            </View>
            <View style={styles.footerContainer}>
                <Button label='Choose a photo' theme='primary' />
                <Button label='Use this photo' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        gap: 12,
    },

    imageContainer: {
        flex: 1,
        paddingTop: 28,
        minHeight: 440,
    },
    footerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
