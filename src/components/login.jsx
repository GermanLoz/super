import React, {useState, useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Validate from './functions/validate.jsx'

const Login = (Props)=>{
  const {setUser} = Props
  const [message,setMessage] = useState(``)
  const [login, setLogin] = useState(null)

  useEffect(()=>{
    if(login){
      setUser(login)
    }
  }, [login])

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
          !/^[a-z]+[A-Z]{2,40}$/i.test(values.password)
        ) {
            errors.password = 'La contraseña tiene que comenzar con letras y terminar con 2 numeros';
        }
         return errors;
       }}
       onSubmit= {async function(values){
        await Validate(values.email,values.password)
        .then( (e)=> {
          if(e === "Error: Request failed with status code 401"){
           setMessage("Error al iniciar session") 
          }
          const {data} = e
            setLogin({email:values.email,data})
           })
         .catch((error)=>{
           setMessage(error)
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
         </Form>
       )}
     </Formik>
   </div>
 );
 
}
export default Login

