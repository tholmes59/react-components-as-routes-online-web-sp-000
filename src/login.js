import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div>
                <form>
                <div>
                    <input type="text" name="username" placeholder="username" />
                    <label htmlFor="username">Username</label>
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" />
                    <label htmlFor="password">Password</label>
                </div>
                <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default Login 