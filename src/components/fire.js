import firebase from 'firebase/app'
import 'firebase/auth'
import { fire } from '../services/init.jsx'


const auth = fire.auth()

export { auth }