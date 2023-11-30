import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignup = (email, password, confirmPassword, setIsAuthenticated) => {
	const navigate = useNavigate();
	const signUp = async () => {
		try {
			if (password !== confirmPassword) {
				console.error("Passwords do not match");
				return;
			}
			const response = await fetch("/api/user/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.ok) {
				const user = await response.json();
				localStorage.setItem("user", JSON.stringify(user));
				console.log("User signed up successfully!");
				setIsAuthenticated(true);
				navigate("/");
			} else {
				console.error("Signup failed");
			}
		} catch (error) {
			console.error("Error during signup:", error);
		}
	};

	return { signUp };
};
