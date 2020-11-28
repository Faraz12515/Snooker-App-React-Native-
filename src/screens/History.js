import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Image,
	ActivityIndicator,
} from 'react-native';

export default function History({ navigation }) {
	const [isLoading, setIsLoading] = useState(true);
	const listData = [
		{
			img: require('../../assets/pooltable.jpg'),
			date: 'Date: 1-10-2020',
			time: 'Timings: 9:00-11:00 PM',
		},
		{
			img: require('../../assets/pooltable.jpg'),
			date: 'Date: 3-10-2020',
			time: 'Timings: 8:00-10:00 PM',
		},
		{
			img: require('../../assets/pooltable.jpg'),
			date: 'Date: 11-10-2020',
			time: 'Timings: 6:00-8:15 PM',
		},
		{
			img: require('../../assets/pooltable.jpg'),
			date: 'Date: 16-10-2020',
			time: 'Timings: 7:30-9:00 PM',
		},
		{
			img: require('../../assets/pooltable.jpg'),
			date: 'Date: 21-10-2020',
			time: 'Timings: 9:30-11:00 PM',
		},
		{
			img: require('../../assets/pooltable.jpg'),
			date: 'Date: 29-10-2020',
			time: 'Timings: 9:00-11:00 PM',
		},
		{
			img: require('../../assets/pooltable.jpg'),
			date: 'Date: 1-11-2020',
			time: 'Timings: 8:30-10:30 PM',
		},
		{
			img: require('../../assets/pooltable.jpg'),
			date: 'Date: 8-11-2020',
			time: 'Timings: 6:30-08:30 PM',
		},
		{
			img: require('../../assets/pooltable.jpg'),
			date: 'Date: 17-11-2020',
			time: 'Timings: 7:00-9:30 PM',
		},
		{
			img: require('../../assets/pooltable.jpg'),
			date: 'Date: 22-11-2020',
			time: 'Timings: 9:30-11:30 PM',
		},
		{
			img: require('../../assets/pooltable.jpg'),
			date: 'Date: 1-11-2020',
			time: 'Timings: 7:00-9:00 PM',
		},
	];

	const userData = [
		{
			name: 'User',
			place: 'Location',
			games: '5 Games',
			win: '2',
			loss: '1',
			draw: '2',
		},
	];

	setTimeout(() => {
		setIsLoading(false);
	}, 1000);

	return isLoading == true ? (
		<ActivityIndicator
			size='large'
			color='#1977FF'
			style={{ alignSelf: 'center', flex: 1 }}
		/>
	) : (
		<View style={styles.container}>
			<ScrollView>
				{listData.map((v, i) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('Details', {
									data: userData,
									list: v,
								})
							}
							key={i}
							style={[
								styles.List,
								{ marginBottom: i == listData.length - 1 ? 16 : 0 },
							]}
						>
							<View style={styles.ImageView}>
								<View style={styles.ImageStyleView}>
									<Image source={v.img} style={styles.image} />
								</View>
							</View>
							<View style={styles.textView}>
								<Text style={styles.text}>{v.date}</Text>
								<Text style={styles.text}>{v.time}</Text>
							</View>
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FEFEFE',
	},
	List: {
		flexDirection: 'row',
		alignSelf: 'center',
		width: '95%',
		height: 105,
		borderRadius: 5,
		marginTop: 14,
		backgroundColor: '#1977FF',
		elevation: 8,
	},
	ImageView: {
		flex: 1.5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	ImageStyleView: {
		marginLeft: 12,
		height: '90%',
		width: '100%',
		borderRadius: 8,
		overflow: 'hidden',
	},
	image: { height: '100%', width: '100%' },
	textView: {
		flex: 4,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		width: '100%',
		textAlign: 'left',
		paddingLeft: '8%',
		fontSize: 17,
		fontWeight: 'bold',
		color: '#fff',
	},
});
