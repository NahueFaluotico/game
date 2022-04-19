import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
	AngularFirestore,
	AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { map } from '@firebase/util';
import { Observable } from 'rxjs';
import { User } from './user.types';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		private fireAuth: AngularFireAuth,
		private afStore: AngularFirestore,
	) { }

	setUserData(user) {
		const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
			`users/${user.uid}`
		);
		const userData: User = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL,
			emailVerified: user.emailVerified,
		};
		return userRef.set(userData, {
			merge: true,
		});
	}
  getMyUser(){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.afStore.doc(`users/${user.uid}`).valueChanges();
  }
}
