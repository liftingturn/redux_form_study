import React, {useState}from 'react'
import {connect} from 'react-redux'
import { reduxForm, Field } from 'redux-form';

export default function LoginLayout(props) {
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submit clicked',props)
    }
  
    return (
        <form onSubmit={handleSubmit} className="form">
        <div className="field">
          <div className="control">
            <label className="label">First Name</label>
            <Field className="input" name="firstName" component="input" type="text" placeholder="First Name"/>
          </div>
        </div>
    
        <div className="field">
          <div className="control">
            <label className="label">Last Name</label>
            <Field className="input" name="lastName" component="input" type="text" placeholder="Last Name"/>
          </div>
        </div>
    
        <div className="field">
          <div className="control">
            <label className="label">Email</label>
            <Field className="input" name="email" component="input" type="email" placeholder="Email Address"/>
          </div>
        </div>
    
        <div className="field">
          <div className="control">
            <label className="label">Proficiency</label>
            <div className="select">
              <Field className="input" name="proficiency" component="select">
                <option />
                <option value="beginner">Beginner Dev</option>
                <option value="intermediate">Intermediate Dev</option>
                <option value="expert">Expert Dev</option>
              </Field>
            </div>
          </div>
        </div>
    
        <div className="field">
          <div className="control">
            <label className="label">Age</label>
            <Field className="input" name="age" component="input" type="number" placeholder="Age"/>
          </div>
        </div>
    
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <Field name="saveDetails" id="saveDetails" component="input" type="checkbox"/>
              Save Details
            </label>
          </div>
        </div>
    
        <div className="field">
          <div className="control">
            <label className="label">Message</label>
            <Field className="textarea" name="message" component="textarea" />
          </div>
        </div>
    
        <div className="field">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
    
      </form>
    )
}

LoginLayout = reduxForm({  //reduxForm()으로 form component decorate
    form: 'signIn',
  })(LoginLayout);   
// 이것은 form 상태에 대한 정보와 form을 전송하는 기능들을 제공하는 props와 함께 컴포넌트를 전달합니다.
// 각각의 입력 컴포넌트는 Field 컴포넌트의 component prop 내에 위치되어야 합니다.
// Field 컴포넌트는 value, onChange, onBlur 같은 props를 React.DOM.input component에 전달해서
// 이 값들을 채우고 변경사항들을 수신합니다.