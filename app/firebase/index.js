import firebase from 'firebase';

try {
	var config = {
		apiKey: "AIzaSyCcqeV1LO6dU4zea3eW68lT9mN-VXu-V0I",
		authDomain: "todo-application-97c30.firebaseapp.com",
		databaseURL: "https://todo-application-97c30.firebaseio.com",
		projectId: "todo-application-97c30",
		storageBucket: "todo-application-97c30.appspot.com",
		messagingSenderId: "317092255336"
	};

	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;