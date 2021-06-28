import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {auth} from '../components/fire.js'

const Register = ()=>{
return (
   <div>
     <Formik
       initialValues={{ email: '', password: '' }}
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
           errors.password = 'La contraseña tiene que comenzar con letras y terminar con 2 numeros';
        }
         return errors;
       }}
       onSubmit=
       {(values, { setSubmitting }) => {
        try{
          auth.createUserWithEmailAndPassword(values.email, values.password)
          alert("Registered user")
        }catch(e){
          console.log(e)
        }
        }}
     >
       {({ isSubmitting}) => (
         <Form className="form">
           <Field  type="email" className="input" name="email" />
           <ErrorMessage className="error" name="email" component="div"/>
           <Field type="password" className="input" name="password" />
           <ErrorMessage className="error" name="password" component="div" />
           <button type="submit" className="button" disabled={isSubmitting}>
             Register
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
}
export default Register