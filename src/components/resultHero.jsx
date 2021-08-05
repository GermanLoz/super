import React from 'react'
import { Formik } from 'formik';

export default function ResultHero(Props) {
const {setSearch} = Props
  return( 
      <div>
        <Formik
        initialValues={{ name: '' }}
        validate={values => {
        const errors = {};
              if (!values.name)  {
                errors.name = 'Required name';
              }
              return errors;
            }}
        onSubmit={(values) => {
              setSearch(values.name)
        }}
      >
        {props => (
          <form className="form" onSubmit={props.handleSubmit}>
            <input
              className="input"
              type="text"
              onChange={props.handleChange}
              name="name"
            />
            {props.errors.name && <div id="feedback" className="error">{props.errors.name}</div>}
            <button className="button" type="submit">Search</button>
          </form>
        )}
      </Formik>
        </div> 
    )
}