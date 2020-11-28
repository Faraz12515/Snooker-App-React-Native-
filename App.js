import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import History from './src/screens/History';
import Details from './src/screens/Details';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{
						title: 'Home',

						headerTitleAlign: 'center',
						headerStyle: {
							backgroundColor: '#fff',
							height: 0,
						},
						headerTintColor: 'black',
						headerTitleStyle: {
							fontWeight: 'bold',
							height: 0,
						},
					}}
				/>
				<Stack.Screen
					name='Login'
					component={Login}
					options={{
						title: 'Login',
						headerLeft: null,

						headerTitleAlign: 'center',
						headerStyle: {
							backgroundColor: '#fff',
							height: 0,
						},
						headerTintColor: 'black',
						headerTitleStyle: {
							fontWeight: 'bold',
							height: 0,
						},
					}}
				/>
				<Stack.Screen
					name='SignUp'
					component={SignUp}
					options={{
						title: 'SignUp',
						headerLeft: null,

						headerTitleAlign: 'center',
						headerStyle: {
							backgroundColor: '#fff',
							height: 0,
						},
						headerTintColor: 'black',
						headerTitleStyle: {
							fontWeight: 'bold',
							height: 0,
						},
					}}
				/>
				<Stack.Screen
					name='History'
					component={History}
					options={{
						title: 'History',
						headerTitleAlign: 'center',
						headerStyle: {
							backgroundColor: '#fff',
						},
						headerTintColor: 'black',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}
				/>
				<Stack.Screen
					name='Details'
					component={Details}
					options={{
						title: 'Details',
						headerTitleAlign: 'center',
						headerStyle: {
							backgroundColor: '#fff',
						},
						headerTintColor: 'black',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
