import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

export default function SignupCord() {
    const initialFormData = {
        name: "",
        email: "",
        scholarId: "",
        authpassword: "",
        password: ""
    };
    const navigate=useNavigate();
    const [corddata, setCordData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCordData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (corddata.authpassword !== "2112027") {
            alert("You are not a coordinator");
            return;
        }
        const response = await fetch("http://localhost:2025/api/coordinatorsinsert", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...corddata
            })
        })


        const json = await response.json();
        alert(json.message);


        setCordData(initialFormData);
    };

    const initiallogindata =
    {
        email: "",
        password: ""
    };

    const [cordlogin, setcordlogin] = useState(initiallogindata);

    const handleloginchange = (e) => {
        const { name, value } = e.target;
        setcordlogin(prevData => ({
            ...prevData,
            [name]: value
        }));


    };

    const handlelogin = async (e) => {
        e.preventDefault();

        console.log(cordlogin)

        const response = await fetch("http://localhost:2025/api/cordlogincheck", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cordlogin)
        })
        const json=await response.json()
        

        if(json.success===true)
            {
                alert(json.message)
                navigate('/Home')
            }



        setcordlogin(initiallogindata);
    };


    return (
        <div className='body1'>
            <div className="main">
                <input className='input1' type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input className='input1' 
                            type="text"
                            name="name"
                            placeholder="Full name"
                            required
                            value={corddata.name}
                            onChange={handleChange}
                        />
                        <input className='input1'
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={corddata.email}
                            onChange={handleChange}
                        />
                        <input className='input1'
                            type="text"
                            name="scholarId"
                            placeholder="ScholarId"
                            required
                            value={corddata.scholarId}
                            onChange={handleChange}
                        />
                        <input className='input1'
                            type="password"
                            name="authpassword"
                            placeholder="Authentication Code"
                            required
                            value={corddata.authpassword}
                            onChange={handleChange}
                        />
                        <input className='input1'
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={corddata.password}
                            onChange={handleChange}
                        />
                        <button type="submit">Sign up</button>
                    </form>
                </div>

                <div className="login">
                    <form onSubmit={handlelogin}>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input className='input1'
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={cordlogin.email}
                            onChange={handleloginchange}
                        />
                        <input className='input1'
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={cordlogin.password}
                            onChange={handleloginchange}
                        />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}