import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	StatusBar,
} from 'react-native';

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<StatusBar barStyle='dark-content' backgroundColor='#FEFEFE' />
			<View style={{ width: '100%', height: '50%' }}>
				<Image
					source={require('../../assets/blue8-ball.jpg')}
					style={{ width: '100%', height: '100%' }}
					resizeMode='contain'
				/>
			</View>
			<View
				style={{
					position: 'absolute',
					bottom: '8%',
					alignSelf: 'center',
					width: '100%',
				}}
			>
				<TouchableOpacity
					style={styles.Button}
					onPress={() => navigation.navigate('Login')}
				>
					<Text style={styles.ButtonText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.Button}
					onPress={() => navigation.navigate('SignUp')}
				>
					<Text style={styles.ButtonText}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FEFEFE',
	},
	Button: {
		backgroundColor: '#1977FF',
		padding: 11,
		marginVertical: '2.5%',
		alignItems: 'center',
		alignSelf: 'center',
		width: '90%',
		elevation: 5,
		borderRadius: 4,
		// backgroundColor:'#2B1FF5'
		// backgroundColor:'#0CEAFF'
	},
	ButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
