import firebase from 'firebase/app'
import 'firebase/firestore'
import { fire } from '../services/init.jsx'

const db = fire.firestore()

export { db }