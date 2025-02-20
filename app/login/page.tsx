"use client";
import { useAppDispatch } from "@/app/store/hooks";
import {
  setIsLoggedIn,
  setUserInfo,
} from "../store/features/authSlice/authSlice";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formDate = new FormData(e.target as HTMLFormElement);
    const username = formDate.get("username");
    const password = formDate.get("password");
    console.log(username, password);
    if (username && password) {
      dispatch(setIsLoggedIn(true));
      dispatch(
        setUserInfo({
          username: username as string,
          password: password as string,
        })
      );
      //   navigate to home page
      router.push("/posts");
    }
  };

  return (
    <div
      className="card"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
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
