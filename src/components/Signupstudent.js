import React from 'react'


export default function SignupStudent() {
    
    return (
        <div className="body1">
	<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signupst">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="Full Name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
                    <input type="text" name="broj" placeholder="Scholar Id" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
                    <button >Sign up</button>
				</form>
			</div>

			<div className="login2">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>
</div>
    )
}
