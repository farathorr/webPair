import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
	const emailInput = useField("email");
	const passwordInput = useField("password");
	const passwordConfirmInput = useField("password");
	const { signUp } = useSignup(emailInput.value, passwordInput.value, passwordConfirmInput.value, setIsAuthenticated);

	return (
		<div>
			<h2>Signup</h2>
			<label>
				email:
				<input type="email" {...emailInput} />
			</label>
			<br />
			<label>
				Password:
				<input type="password" {...passwordInput} />
			</label>
			<br />
			<label>
				Confirm Password:
				<input type="password" {...passwordConfirmInput} />
			</label>
			<button onClick={signUp}>Sign Up</button>
		</div>
	);
};

export default SignupComponent;
