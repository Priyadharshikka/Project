import React, { useState } from 'react'


function Login
    () {

    let [userName, setUserName] = useState('');
    var [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    let formHandler = (e) => {
        e.preventDefault();
        if (userName.length === 0 || password.length === 0) {
            setError(true);
        }
        if (userName && password) {
            const loginObj = {
                name: userName,
                pwd: password
            }
            console.log(loginObj);
            alert(JSON.stringify(loginObj));
        }


    }
    return (
        <div>
            <h3>Login page</h3>
            <form onSubmit={formHandler}>
                Username : <input type="text" value={userName} placeholder="User Name" onChange={(e) => setUserName(e.target.value)} />
                <br />
                <div>
                    {error && userName.length === 0 ?
                        <label style={{ color: 'red', fontSize: 10 }}>
                            Username is required
                        </label> : ""}
                </div>
                Password : <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
                <div>
                    {error && password.length == 0 ?
                        <lable style={{ color: 'red', fontSize: 10 }}>
                            Password is required
                        </lable> : ""}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
