import React, { useEffect } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Image,
} from 'react-native';

export default function Details(props) {
	const { navigation, route } = props;
	const { data, list } = route.params;
	useEffect(() => {
		console.log('Checking User Data', data);
		console.log('Checking List Data', list);
	}, []);

	const listData = [
		{
			title: 'Name: ',
			data: data[0].name,
		},
		{
			title: 'Place: ',
			data: data[0].place,
		},
		{
			title: 'No.of Games: ',
			data: data[0].games,
		},
		{
			title: 'Win: ',
			data: data[0].win,
		},
		{
			title: 'Loss: ',
			data: data[0].loss,
		},
		{
			title: 'Draw: ',
			data: data[0].draw,
		},
	];
	return (
		<View style={styles.container}>
			<View style={[styles.List, { marginBottom: 16 }]}>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.ImageView}>
						<View style={styles.ImageStyleView}>
							<Image source={list.img} style={styles.image} />
						</View>
					</View>

					<View style={styles.textView}>
						<Text style={styles.text}>{list.date}</Text>
						<Text style={[styles.text, { fontSize: 19 }]}>{list.time}</Text>
					</View>
				</View>
				<View style={styles.userDetailsView}>
					{listData.map((v, i) => {
						return (
							<Text key={i} style={styles.userDetailsText}>
								<Text style={[styles.userDetailsText, { fontWeight: 'bold' }]}>
									{v.title}
								</Text>
								{v.data}
							</Text>
						);
					})}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FEFEFE',
	},
	List: {
		alignSelf: 'center',
		width: '95%',
		height: '90%',
		borderRadius: 5,
		marginTop: 14,
		backgroundColor: '#1977FF',
		elevation: 8,
	},
	ImageView: {
		flex: 1.5,
		height: 100,
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingVertical: 7,
	},
	ImageStyleView: {
		marginLeft: 12,
		height: '100%',
		width: '100%',
		borderRadius: 5,
		overflow: 'hidden',
	},
	image: { height: '100%', width: '100%' },
	userDetailsText: {
		marginVertical: '2%',
		fontSize: 20,
		color: 'white',
		width: '100%',
	},
	userDetailsView: {
		alignSelf: 'flex-start',
		paddingVertical: '4%',
		paddingHorizontal: '3%',
	},
	textView: {
		flex: 4,
		flexDirection: 'column',
		alignSelf: 'flex-start',
		marginTop: '5%',
	},
	text: {
		width: '100%',
		textAlign: 'left',
		paddingLeft: '7%',
		paddingVertical: 3,
		fontSize: 22,
		fontWeight: 'bold',
		color: '#fff',
	},
});
