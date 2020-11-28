import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';

export default function SignUp({ navigation }) {
	const [isLoading, setisLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	setTimeout(() => {
		setisLoading(false);
	}, 1000);

	setTimeout(() => {
		isLoggedIn == true && (setIsLoggedIn(false), navigation.navigate('Login'));
	}, 3000);

	return isLoading == true ? (
		<ActivityIndicator
			size='large'
			color='#1977FF'
			style={{ alignSelf: 'center', flex: 1 }}
		/>
	) : (
		<View style={styles.container}>
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
						placeholder='First Name'
						placeholderTextColor='#999'
						onChangeText={(text) => setFirstName(text)}
						value={firstName}
					/>
				</View>
				<View>
					<TextInput
						style={styles.textInput}
						placeholder='Last Name'
						placeholderTextColor='#999'
						onChangeText={(text) => setLastName(text)}
						value={lastName}
					/>
				</View>
				<View>
					<TextInput
						style={styles.textInput}
						placeholder='Email or Phone'
						placeholderTextColor='#999'
						onChangeText={(text) => setEmail(text)}
						value={email}
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
			<View style={{ paddingTop: 15 }}>
				<TouchableOpacity
					style={styles.Button}
					onPress={() => setIsLoggedIn(true)}
				>
					{isLoggedIn == true ? (
						<ActivityIndicator size='small' color='#fff' />
					) : (
						<Text style={styles.ButtonText}>Sign Up</Text>
					)}
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

	textInputView: { alignSelf: 'center', width: '90%' },
	textInput: {
		marginVertical: 20,
		paddingVertical: 5,
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
	ImageView: { width: '100%', height: '36%' },
	ImageStyle: { width: '70%', height: '100%', alignSelf: 'center' },
	ButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
