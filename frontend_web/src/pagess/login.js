import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const requestBody = { email, password };
            const response = await axios.post('https://api.p2.lc2s5.foxhub.space/login', requestBody);
            localStorage.setItem('access_token', response.data.access_token);
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Welcome back!",
                timer: 2000,
                showConfirmButton: false,
            });
            navigate('/');
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response?.data?.message || "Something went wrong!"
            });
        }
    }

    return (
        <div className="login-container" style={styles.container}>
            <form onSubmit={handleLogin} style={styles.form}>
                <h2 style={styles.heading}>Welcome Back, Hafsa Madam!</h2>
                <p style={styles.subHeading}>Please log in to access your dashboard</p>
                <div style={styles.inputGroup}>
                    <label htmlFor="email" style={styles.label}>Email address:</label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        style={styles.input}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="password" style={styles.label}>Password:</label>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        style={styles.input}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Log In</button>
                <p style={styles.registerText}>
                    Forgot password  <Link to={'/register'} style={styles.link}>Click here to reset the Password</Link>
                </p>
            
            </form>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
    },
    form: {
        width: "100%",
        maxWidth: "400px",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    },
    heading: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#333",
    },
    subHeading: {
        fontSize: "16px",
        marginBottom: "20px",
        color: "#666",
    },
    inputGroup: {
        marginBottom: "15px",
        textAlign: "left",
    },
    label: {
        display: "block",
        marginBottom: "5px",
        fontWeight: "bold",
        color: "#444",
    },
    input: {
        width: "100%",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        fontSize: "14px",
    },
    button: {
        width: "100%",
        padding: "10px 15px",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
    registerText: {
        marginTop: "20px",
        fontSize: "14px",
        color: "#555",
    },
    link: {
        color: "#007bff",
        textDecoration: "none",
        fontWeight: "bold",
    },
    demoText: {
        marginTop: "20px",
        fontSize: "12px",
        color: "#888",
    },
};

export default LoginForm;
