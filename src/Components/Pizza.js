import React from 'react'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const Pizza = ({ errors, touched, values }) => {
  return (
    <div className='form-container'>
      <h1>Get Onboard!</h1>

      <Form>
        <Field
          type='name'
          name='name'
          placeholder='Name'
          autoComplete='new-name'
          className='input'
        />
        {touched.name && errors.name && <p className='error'>{errors.name}</p>}
        <Field
          type='email'
          name='email'
          placeholder='Email'
          className='input'
        />
        {touched.email && errors.email && (
          <p className='error'>{errors.email}</p>
        )}
        <label>Pizza Size</label>
        <Field as="select" name="Pizza Size">
             <option value="12">12 inches</option>
             <option value="24">24  inches</option>
             <option value="9001">Over 9000!</option>
           </Field>
          <br/>
          <label>Pizza Toppings</label>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="Cheese" />
              Cheese
            </label>
            <label className='term'>
          <Field type='checkbox' name='term' checked={values.term} /> I want all the <a href='https://giphy.com/gifs/29thfloor-art-loop-pizza-ToMjGpPXUoKCyBGW7lu/fullscreen
          '>PIZZA</a>
        </label>
            <label>
              <Field type="checkbox" name="checked" value="Cash" />
              Cash 
            </label>            
            <label>
              <Field type="checkbox" name="checked" value="Olives" />
             Olives 
            </label>
                        <label>
              <Field type="checkbox" name="checked" value="Hopes and Dreams" />
            Hopes and Dreams 
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Unicorn Tears" />
           Unicorn Tears 
            </label>
          </div>
        <label className='special-instructions'>
          Special Delivery instructions
          <br/>
          <Field as='textarea' name='special-instructions' /> 
        </label>
        <button type='submit' className='submit'>
          Add to Order
        </button>
      </Form>
    </div>
  )
}

const FormikApp = withFormik({
  mapPropsToValues({ name, email, password, term }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      term: term || false
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().min(2, "need at least two characters")
      .required('Name Required'),
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
        resetForm();
      })
      .catch(error => console.log(error.response));
    
  }
})
const PizzaForm = FormikApp(Pizza)

export default PizzaForm;