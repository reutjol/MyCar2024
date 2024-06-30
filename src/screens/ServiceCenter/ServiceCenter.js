import React, { useState } from 'react';
import { ScrollView, ImageBackground, Image, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import ServiceButton from './components/ServiceButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ServiceCenter = ({ navigation }) => {
    const handleServiceSelection = (service) => {
        if (service === 'VehicleRepair') {
            navigation.navigate('ServiceCenterProcess', { startStep: 0 });
        } else {
            navigation.navigate('ServiceCenterProcess', { startStep: 1 });
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <ImageBackground
                source={require('./D1-2-assets/images/tim-mossholder-unsplash.jpg')}
                style={styles.imageBackground}>
                <View style={styles.viewhead}>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <Text style={styles.headerText}>זימון שירותי מוסך</Text>
                        </View>
                        <TouchableOpacity style={styles.touchable}>
                            <Image source={require('./D1-2-assets/icons/Close.png')} style={styles.closeButtonImage} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>איך אפשר לעזור לך?</Text>
                    <Text style={styles.subtitle}>אנא בחר שירות</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <ServiceButton
                        icon={require('./D1-2-assets/icons/Car.png')}
                        text="תקלת ברכב"
                        style={styles.serviceButton}
                        onPress={() => handleServiceSelection('VehicleRepair')}
                    />
                    <ServiceButton
                        icon={require('./D1-2-assets/icons/RoutineService.png')}
                        text="טיפול תקופתי"
                        style={styles.serviceButton}
                        onPress={() => handleServiceSelection('RoutineService')}
                    />
                    <ServiceButton
                        icon={require('./D1-2-assets/icons/Warning.png')}
                        text="תאונה / נזק"
                        style={styles.serviceButton}
                        onPress={() => handleServiceSelection('Accident')}
                    />
                    <ServiceButton
                        icon={require('./D1-2-assets/icons/Brakes.png')}
                        text="ביקורת בטיחות"
                        style={styles.serviceButton}
                        onPress={() => handleServiceSelection('SafetyCheck')}
                    />
                    <ServiceButton
                        icon={require('./D1-2-assets/icons/Brakes.png')}
                        text="אחר"
                        style={styles.serviceButton}
                        onPress={() => handleServiceSelection('Other')}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default ServiceCenter;

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    imageBackground: {
        width: '100%',
        height: windowHeight * 0.35,
    },
    viewhead: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5%',
    },
    headerContent: {
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        color: '#FFF',
    },
    touchable: {
        width: windowWidth * 0.1,
        height: windowWidth * 0.1,
    },
    closeButtonImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        margin: '5%',
    },
    content: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        marginTop: '-15%',
    },
    textContainer: {
        alignItems: 'flex-end',
        width: '90%',
        margin: windowHeight * 0.02
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#68677E',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    serviceButton: {
        flex: 1,
        minWidth: '40%',
        marginBottom: windowHeight * 0.01,
    },
});
