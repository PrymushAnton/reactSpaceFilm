import { createContext, useContext, ReactNode, useState } from "react";
import { Response } from "../shared/types/response";
import { useEffect } from "react";

interface IUser {
	email: string;
	name: string;
	src: string;
	role: string;
	age: number;
}

interface IUserContext {
	user: IUser | null;
	login: (email: string, password: string) => void;
	register: (
		email: string,
		name: string,
		src: string,
		password: string,
		age: number
	) => void;
	isAuthenticated: () => boolean;
	logout: () => void;
	getToken: () => string | "error";
	isAdmin: () => boolean;
}

const initialValue: IUserContext = {
	user: null,
	login: (email: string, password: string) => {},
	register: (
		email: string,
		name: string,
		src: string,
		password: string,
		age: number
	) => {},
	isAuthenticated: () => false,
	logout: () => {},
	getToken: () => "",
	isAdmin: () => false
};
const userContext = createContext<IUserContext>(initialValue);

export function useUserContext() {
	return useContext(userContext);
}

interface IUserContextProviderProps {
	children?: ReactNode;
}

export function UserContextProvider(props: IUserContextProviderProps) {
	const [user, setUser] = useState<IUser | null>(null);

	async function getData(token: string) {
		try {
			const response = await fetch("http://localhost:3001/api/user/me", {
				headers: { Authorization: `Bearer ${token}` },
			});
			const result: Response<IUser> = await response.json();
			if (result.status === "error") {
				console.log(result.message);
				return;
			}
			setUser(result.data);
			localStorage.setItem("role", result.data.role)
		} catch (error) {}
	}

	async function login(email: string, password: string) {
		try {
			const response = await fetch(
				"http://localhost:3001/api/user/login",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password }),
				}
			);
			const result: Response<string> = await response.json();
			if (result.status === "error") {
				console.log(result.message);
				return;
			}
			getData(result.data);
			localStorage.setItem("token", result.data);
		} catch (error) {}
	}


	async function register(
		email: string,
		name: string,
		src: string,
		password: string,
		age: number
	) {
		try {
			const response = await fetch(
				"http://localhost:3001/api/user/register",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: email,
						name: name,
						src: src,
						password: password,
						age: age
					}),
				}
			);

			const result: Response<string> = await response.json();
			if (result.status === "error") {
				console.log(result.message);
				return;
			}
			getData(result.data);
			localStorage.setItem("token", result.data);
		} catch (error) {}
	}
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			return;
		}
		getData(token);
	}, []);

	function isAuthenticated() {
		const token = localStorage.getItem("token")
		if (!token) {
			return false;
		}
		return true;
	}

	function logout(){
		localStorage.removeItem("token")
		localStorage.removeItem("role")
        setUser(null)
    }

	function getToken(){
		const token = localStorage.getItem("token")
        if (!token) {
			return "error"
		}
		return token
    }

	function isAdmin(){
		const role = localStorage.getItem("role")
		if (!role) return false
		if (role === "admin"){
			return true
		}
		return false
    }

	return (
		<userContext.Provider
			value={{
				user: user,
				login: login,
				register: register,
				isAuthenticated: isAuthenticated,
				logout: logout,
				getToken: getToken,
				isAdmin: isAdmin
			}}
		>
			{props.children}
		</userContext.Provider>
	);
}
