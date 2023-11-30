import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = (email, password, setIsAuthenticated) => {
	const navigate = useNavigate();
	const login = async () => {
		try {
			const response = await fetch("/api/user/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.ok) {
				const user = await response.json();
				localStorage.setItem("user", JSON.stringify(user));
				console.log("User logged in successfully!");
				setIsAuthenticated(true);
				navigate("/");
			} else {
				console.error("Login failed");
			}
		} catch (error) {
			console.error("Error during login:", error);
		}
	};
	return { login };
};
