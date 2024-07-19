import React from 'react'
import { Link } from 'react-router-dom';
import  nitslogo  from '../images/Nitslogo.jpeg';


export default function Signuphome() {
    return (
        
            <div className="parentcontainer">
            <div className="Maincontainer1 d-flex min-vw-100 min-vh-100  flex-column  justify-content-center " >

                <div className="Subcontainer1">

                    <div className="card " style={{ width: "18rem", marginLeft: "10rem" }}>
                        <div className="card-body">
                           
                                <div className="text-center d-flex justify-content-start"   >
                                    <img src={nitslogo} class="rounded"style={{ height:"5rem" } } alt=""/>
                                </div>
                            
                            <h1 className="card-title">Welcome</h1>
                            <h4 className="card-title mb-2">SignUp</h4>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/signup" className="btn btn-primary mb-2">Coordinator SignUp</Link>
                            <Link to="/signupst" className="btn btn-success">Student SignUp</Link>
                        </div>
                    </div>



                </div>
            </div>
            </div>
        

    )
}
