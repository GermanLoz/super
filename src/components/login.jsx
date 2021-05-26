import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {auth} from '../components/fire.js'
import { useHistory } from 'react-router-dom';


const Login = ()=>{
  const[message,setMessage] = useState(``)
  const historial = useHistory()
return( 
  <div>
     <Formik
       initialValues={{ email: '', password: ''}}
       validate={values => {
         const errors = {};
         if (!values.email && !values.password ) {
           errors.email = 'Required Email';
           errors.password = 'Required Password';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         else if (
          !/^[a-z]+[A-Z]+[1-9]{2,40}$/i.test(values.password)
        ) {
            errors.password = 'Password null, must include 2 letters/';
        }
         return errors;
       }}
       onSubmit=
       {(values, { setSubmitting }) => {
         auth.signInWithEmailAndPassword(values.email,values.password)
        .then( (e)=> {
              historial.push('/SuperHero')
           })
         .catch((error)=>{
           if(error.code == 'auth/wrong-password'){
             setMessage(`Email or password incorrect`)
            }
         })
       }
      }
 >   

       {({ isSubmitting}) => (
         <Form className="form">
           {
             message ?
             <div className='mensaje'>{message}</div>
             : " "
           }
           <ErrorMessage className="error" name="invalid" component="div"/>
           <Field  type="email" className="input" name="email" />
           <ErrorMessage className="error" name="email" component="div"/>
           <Field type="password" className="input" name="password" />
           <ErrorMessage className="error" name="password" component="div" />
           <button type="submit" className="button" onClick={isSubmitting}>
             Login
           </button>
           <p className="reg-tit">No tienes cuenta ?</p>
           <button type="button" id ="reg" className="button" >
             Register
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
 
}
export default Login

