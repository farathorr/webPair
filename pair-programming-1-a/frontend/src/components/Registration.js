import { useState } from "react";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user={
      "username":name,
      email,
      password,
      role:"guest"
    };

    if(password.length<8){
    alert("Password must be at least 8 characters long");
    return;
    }if(password!==confirmPassword){
    alert("Passwords do not match");
      return;
  }
    console.log(event);
    console.log(user);
    await fetch("http://localhost:3001/api/users/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "role":"admin"
      },
      body:JSON.stringify(user)
  });
};
  return (
    <div className="login-page">
      <h2>Register</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="confirmPassword"
          name="confirmPassword"
        />

        <button className="submit-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
