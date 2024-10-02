'use client';
import { useEffect, useState } from "react";



import {useRouter} from "next/navigation";
import InputLabel from "../components/InputLabel/InputLabel";
import { loginUser } from "../services/authServices";
import RoundedButton from "../components/RoundedButton/RoundedButton";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleLogin(){
    const response = await loginUser({email, password});

    if(response.ok){
      const user = await response.json();

      console.info('user: ', user);

      localStorage.setItem('user', JSON.stringify(user));

      router.push('/dashboard');
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('user');

    if(user){
      router.push('/dashboard');
    }
  }, []);

  return (
      <main className="flex min-h-screen gap-4 flex-grow flex-col items-center justify-center p-6">
        <InputLabel label={"Email"} onChange={(e) => setEmail(e.target.value)} />
        <InputLabel label={"Password"} onChange={(e) => setPassword(e.target.value)} />
        <RoundedButton onClick={handleLogin} text={"Login"} />
      </main>
  );
}