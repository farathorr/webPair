import "./register.css";

const Registeration = () => {
	return (
		<div className="register">
			<form action="/register">
				<label htmlFor="username">
					Username
					<input type="text" id="username" name="username" />
				</label>
				<label htmlFor="email">
					Email
					<input type="text" id="email" name="email" />
				</label>
				<label htmlFor="password">
					Password
					<input type="password" id="password" name="password" />
				</label>
				<button>Register</button>
			</form>
		</div>
	);
};

export default Registeration;
