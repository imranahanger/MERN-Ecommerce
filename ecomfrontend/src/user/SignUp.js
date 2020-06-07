import React, {useState} from 'react'
import Layout from "../core/Layout";
import {API} from "../config";
import {Link} from "react-router-dom";
import {signup} from "../auth";

const SignUp = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        success: false,
        error: ''
    })
    const {name, email, password, error, success} = values
    const onChangeHandler = (name) => (event) => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const clickSubmit = (event) => {
        setValues({...values, error: false})
        event.preventDefault()
        signup({name, email, password})
            .then(data => {
                if (data.error) {
                    setValues({
                        ...values,
                        error: data.error,
                        success: false
                    })
                } else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        success: true,
                        error: ''
                    })
                }
            })
    }
    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    onChange={onChangeHandler('name')}
                    className="form-control"
                    value={name}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    type="text"
                    onChange={onChangeHandler('email')}
                    className="form-control"
                    value={email}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    type="password"
                    onChange={onChangeHandler('password')}
                    className="form-control"
                    value={password}
                />
            </div>
            <button className="btn btn-dark" onClick={clickSubmit}>Submit</button>

        </form>
    )
    const showError = () => {
        console.log("one")
        return (<div className="alert alert-danger" style={{display: error ? '' : "none"}}>
            {error}
        </div>)
    }
    const showSuccess = () => {
        console.log("two")

        return (<div className="alert alert-info" style={{display: success ? '' : "none"}}>
            New Account Created Successfully. PLease <Link to={'/SignIn'}>SignIn</Link>
        </div>)
    }
    return (
        <Layout
            title="SignUp Page"
            description="SignUp Node React Ecom Application"
            className="container col-md-8 offset-md-2">
            {showError()}
            {showSuccess()}
            {signUpForm()}
        </Layout>
    )
}
export default SignUp
