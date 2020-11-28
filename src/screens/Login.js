import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';

export default function Login({ navigation }) {
	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	setTimeout(() => {
		setIsLoading(false);
	}, 1000);

	setTimeout(() => {
		isLoggedIn == true &&
			(setIsLoggedIn(false), navigation.navigate('History'));
	}, 3000);

	return isLoading == true ? (
		<ActivityIndicator
			size='large'
			color='#1977FF'
			style={{ alignSelf: 'center', flex: 1 }}
		/>
	) : (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={{ flex: 1 }}>
				<View style={styles.ImageView}>
					<Image
						source={require('../../assets/blue8-ball.jpg')}
						style={styles.ImageStyle}
						resizeMode='contain'
					/>
				</View>

				<View style={styles.textInputView}>
					<View>
						<TextInput
							style={styles.textInput}
							placeholder='Email or Phone'
							placeholderTextColor='#999'
							onChangeText={(text) => setUserName(text)}
							value={userName}
						/>
					</View>
					<View>
						<TextInput
							style={styles.textInput}
							placeholder='Password'
							placeholderTextColor='#999'
							onChangeText={(text) => setPassword(text)}
							value={password}
						/>
					</View>
				</View>

				<View style={{ paddingTop: 20 }}>
					<TouchableOpacity
						style={styles.Button}
						onPress={() => setIsLoggedIn(true)}
					>
						{isLoggedIn == true ? (
							<ActivityIndicator size='small' color='#fff' />
						) : (
							<Text style={styles.ButtonText}>Login</Text>
						)}
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity>
						<Text style={styles.ForgotButtonText}>Forgot Password?</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FEFEFE',
	},
	textInputView: { alignSelf: 'center', width: '90%' },
	textInput: {
		marginVertical: 20,
		paddingVertical: 10,
		color: '#1977FF',
		fontSize: 16,
		paddingTop: 5,
		borderBottomColor: '#000',
		borderBottomWidth: 1,
	},
	Button: {
		backgroundColor: '#1977FF',
		padding: 10,
		marginVertical: '2%',
		alignItems: 'center',
		alignSelf: 'center',
		width: '90%',
		elevation: 5,
		borderRadius: 4,
	},
	ButtonText: {
		backgroundColor: 'red',
		color: 'red',
		fontSize: 18,
		fontWeight: 'bold',
	},
	ForgotButtonText: {
		textAlign: 'center',
		color: '#1977FF',
		fontSize: 14,
		fontWeight: 'bold',
	},
	ImageView: { width: '100%', height: '50%' },
	ImageStyle: { width: '70%', height: '100%', alignSelf: 'center' },
	ButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
