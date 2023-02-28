/* eslint-disable jsx-a11y/label-has-associated-control */
import { Component } from 'react'
import Cookies from 'js-cookie'
import './index.css'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    state = { username: '', password: '', error: false }

    loggingIn = async event => {
        console.log(this.state)
        event.preventDefault()
        // generally we do api call here and verify user credentials
        if (this.state.password === "bar" && this.state.username === "foo") {

            const { history } = this.props
            Cookies.set("jwtToken", "thisisjwttokenfromserver", { expires: 30 })
            history.replace("/")
        } else {

            this.setState({ error: true })
        }

    }

    inputChanging = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        if (Cookies.get("jwtToken") !== undefined) {
            return <Redirect to="/" />
        }

        const { username, password, error } = this.state

        return (
            <>
                <div className="text-white  d-flex justify-content-center loginParentCon min-vh-100">
                    <div className='contentCon d-flex'>
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <img className="w-100" alt="" src="https://img.freepik.com/premium-vector/online-registration_203633-559.jpg?w=740" />
                        </div>
                        <div className='col-6 d-flex justify-content-center align-items-center'>
                            <form className="formCon p-4 pt-0 rounded w-50 shadow-lg" onSubmit={this.loggingIn}>
                                <div className="text-center">
                                    <h1 className=''>FOCUS</h1>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="USERNAME">User Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={username}
                                        onChange={this.inputChanging}
                                        id="USERNAME"
                                        name="username"
                                    />

                                    <label htmlFor="PASSWORD" className="mt-2">
                                        PASSWORD
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="PASSWORD"
                                        onChange={this.inputChanging}
                                        value={password}
                                        name="password"
                                    />
                                    <button type="submit" className="btn btn-primary btn-block mt-3">
                                        Login
                                    </button>
                                    {error && <small className='text-danger'>Entered Wrong Credentials!</small>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login
