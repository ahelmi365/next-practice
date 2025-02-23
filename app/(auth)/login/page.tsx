"use client";
import { useAppDispatch } from "@/app/store/hooks";
import { useRouter } from "next/navigation";
import {
  setIsLoggedIn,
  setUserInfo,
} from "../../store/features/authSlice/authSlice";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formDate = new FormData(e.target as HTMLFormElement);
    const username = formDate.get("username");
    const password = formDate.get("password");
    if (username && password) {
      console.log(username, password);
      dispatch(setIsLoggedIn(true));
      dispatch(
        setUserInfo({
          username: username as string,
          password: password as string,
        })
      );
      //   navigate to home page
      router.push("/");
    }
  };

  return (
    <div
      className="card"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",

        backgroundColor: "var(--background)",
        color: "var(--foreground)",

        width: "100%",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          style={{
            marginBottom: "10px",
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          style={{
            marginBottom: "10px",
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <div style={{ marginBottom: "10px", textAlign: "center" }}>
          <a
            href="/register"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Don&apos;t have an account? Register here
          </a>
        </div>
        <button
          type="submit"
          style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
