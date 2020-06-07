import React, {useState} from 'react'
import Layout from "../core/Layout";
import {API} from "../config";
import {Link, Redirect} from "react-router-dom";
import {signin,authenticate,isAuthenticated} from "../auth";

const SignUp = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        loading: false,
        redirectToReferrer: false,
        error: ''
    })
    const {email, password, error, loading, redirectToReferrer} = values
    const {user} = isAuthenticated()
    const onChangeHandler = (name) => (event) => {
        setValues({...values, error: false, [name]: event.target.value})
    }
    const clickSubmit = (event) => {
        setValues({...values, error: false, loading: true})
        event.preventDefault()
        signin({email, password})
            .then(data => {
                if (data.error) {
                    setValues({
                        ...values,
                        error: data.error,
                        loading: false
                    })
                } else {
                    authenticate(data,()=>{
                        setValues({
                            ...values,
                            loading: false,
                            redirectToReferrer: true,
                            error: ''
                        })
                    })
                }
            })
    }
    const signUpForm = () => (
        <form>
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
    const showLoading = () => {
        return loading && (
            <div className="alert aler-info">
                <h2>Loading...</h2>
            </div>
        )
    }
    const redirectUser = () => {
        if (redirectToReferrer) {
            if(user&&user.role==1){
                return <Redirect to="/admin/dashboard"/>
            }else{
                return <Redirect to="/user/dashboard"/>

            }
        }
        if(isAuthenticated()){
            return <Redirect to ="/"/>
        }
    }
    return (
        <Layout
            title="SignIn Page"
            description="SignIn Node React Ecom Application"
            className="container col-md-8 offset-md-2">
            {showLoading()}
            {showError()}
            {redirectUser()}
            {signUpForm()}
        </Layout>
    )
}
export default SignUp
